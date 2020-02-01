import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';
import { ElementosService } from '../services/elementos.service';
import { PuntuacionesService } from '../services/puntuaciones.service';
import { UsuarioDatos } from '../models/usuario-datos';


@Component({
   selector: 'app-pagina-psicologo',
   templateUrl: './pagina-psicologo.component.html',
   styleUrls: ['./pagina-psicologo.component.css']
})
export class PaginaPsicologoComponent implements OnInit {
   bMostrarListaRejillas = false;
   usuarioAux: UsuarioDatos;
   listaUsuarios: Array<UsuarioDatos> = [];


   constructor(private tokenService: TokenService, private router: Router, private authService: AuthService, private elementosService: ElementosService, private constructosService: ConstructosService, private rejillaService: RejillaService, private puntuacionesService: PuntuacionesService) {
   }


   ngOnInit() {
      //Obtenemos la lista de pacientes del back para pasársela al componente app-mostrar-rejillas que se encargará de mostrar 
      //las rejillas de los mismos
      this.authService.backend_getUsuarios().subscribe(data => {
         data.forEach((usuario) => {
            this.usuarioAux = new UsuarioDatos;
            this.usuarioAux.idusuario = usuario.id;
            this.usuarioAux.nombreUsuario = usuario.nombreUsuario;
            this.listaUsuarios.push(this.usuarioAux);
         });
         //Una vez cargados los datos mostramos los datos en el HTML (antes no, porque podría dar error de inicialización de algunas 
         //variables usadas en el HTML)
         this.bMostrarListaRejillas = true;
      },
         (err: any) => {
            //console.log("Error" + err);
         }
      );
   }


   logOut(): void {
      this.tokenService.sesion_logOut();
      this.router.navigate(['login']);
   }
}