import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDatos } from '../models/usuario-datos';
import { UsuarioRejilla } from '../models/usuario-rejilla';
import { TokenService } from '../services/token.service';
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';
import { Polos } from '../models/polos'
import { ElementosService } from '../services/elementos.service'
import { Elementosrejilla } from '../models/elementosrejilla';
import { PuntuacionesService } from '../services/puntuaciones.service';


@Component({
   selector: 'app-pagina-paciente',
   templateUrl: './pagina-paciente.component.html',
   styleUrls: ['./pagina-paciente.component.css']
})
export class PaginaPacienteComponent implements OnInit {
   usuarioDatos: UsuarioDatos;
   bMostrarListaRejillas = true;
   bMostrarConstructos = false;
   bMostrarElementos = false;
   bPuntuarRejilla = false;
   modo_test: boolean = true;
   devuelto: any = {};
   listaUsuarios: Array<UsuarioDatos> = [];


   constructor(private tokenService: TokenService, private router: Router, private rejillaService: RejillaService, private constructosService: ConstructosService, private elementosService: ElementosService, private puntuacionesService: PuntuacionesService) {
   }


   ngOnInit() {
      this.bMostrarListaRejillas = true;
      this.usuarioDatos = new UsuarioDatos;
      this.usuarioDatos.idusuario = this.tokenService.sesion_getUserId();
      //Añadimos al usuario actual (el paciente) a la lista de usuarios que le pasaremos al componente app-mostrar-rejillas
      var usuarioAux: UsuarioDatos = new UsuarioDatos;
      usuarioAux.idusuario = this.usuarioDatos.idusuario;
      usuarioAux.nombreUsuario = this.tokenService.sesion_getUserName();
      this.listaUsuarios.push(usuarioAux);
      if (this.rejillaService.sesion_getRejillaId() != null) {
         this.usuarioDatos.rejilla.idrejilla = this.rejillaService.sesion_getRejillaId();
         this.usuarioDatos.rejilla.elementos = this.rejillaService.sesion_getElementos();
      }
   }


   iniciarRejilla(): void {
      this.bMostrarListaRejillas = false;
      this.bMostrarElementos = true;
      this.bMostrarConstructos = false;
      this.bPuntuarRejilla = false;
      //Hay que inicializar la nueva rejilla porque si no coge los datos de memoria de la rejilla anterior
      var elementos_temp = this.usuarioDatos.rejilla.elementos;   //Hacemos un backup de los elementos
      this.usuarioDatos.rejilla = new UsuarioRejilla;
      this.usuarioDatos.rejilla.elementos = elementos_temp;
   }


   htmlLogOut(): void {
      this.tokenService.sesion_logOut();
      this.router.navigate(['login']);
   }



   htmlInicio(): void {
      this.bMostrarListaRejillas = true;
      this.bMostrarElementos = false;
      this.bMostrarConstructos = false;
      this.bPuntuarRejilla = false;
   }



   obtenerSalidaElementosComponent(event): void {
      //Obtenemos la salida del componente app-elementos
      this.usuarioDatos.rejilla.elementosrejilla = event.elementosUsuario;
      this.bMostrarConstructos = event.bMostrarConstructos;
      if (this.bMostrarConstructos) {
         this.bMostrarElementos = false;
      }
   }


   obtenerSalidaConstructosComponent(event): void {
      //Obtenemos la salida del componente app-constructos
      this.bPuntuarRejilla = event.bPuntuarRejilla;
      if (this.bPuntuarRejilla) {
         this.bMostrarConstructos = false;
         this.rejillaService.backend_nuevaRejilla2(this.usuarioDatos.idusuario, this.usuarioDatos.rejilla.elementosrejilla, this.usuarioDatos.rejilla.polos).subscribe(data => {
            this.devuelto = data;
            this.usuarioDatos.rejilla.idrejilla = this.devuelto;
            this.rejillaService.sesion_setRejillaId(this.usuarioDatos.rejilla.idrejilla);
         });
      }
   }


   obtenerSalidaPuntuarRejillaComponent(event): void {
      //Obtenemos la salida del componente app-puntuar-rejilla
      if (event.bComponenteTerminado) {
         this.bMostrarListaRejillas = true;
         this.bMostrarElementos = false;
         this.bMostrarConstructos = false;
         this.bPuntuarRejilla = false;
      }
   }


   nuevaEvaluacionRejilla(idRejilla: number, elementosRejillaAux: Array<Elementosrejilla>, polosAux: Array<Polos>) {
      this.rejillaService.sesion_setRejillaId(idRejilla);
      this.constructosService.sesion_setElementosUsuario(elementosRejillaAux);
      this.constructosService.sesion_setConstructosUsuario(polosAux);
      this.bMostrarListaRejillas = false;
      this.bMostrarElementos = false;
      this.bMostrarConstructos = false;
      this.bPuntuarRejilla = true;
   }
}