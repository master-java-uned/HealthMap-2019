import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from '../services/token.service'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';
import { InformacionRejilla } from '../models/informacion-rejilla'
import { Evaluacion } from '../models/evaluacion'
import { Elementosrejilla } from '../models/elementosrejilla'
import { Polos } from '../models/polos'
import { Rejilla } from '../models/rejilla'
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';
import { ElementosService } from '../services/elementos.service';
import { PuntuacionesService } from '../services/puntuaciones.service';
import { UsuarioDatos } from '../models/usuario-datos';


@Component({
   selector: 'app-mostrar-rejillas',
   templateUrl: './mostrar-rejillas.component.html',
   styleUrls: ['./mostrar-rejillas.component.css']
})
export class MostrarRejillasComponent implements OnInit {
   //Indica si estamos ejecutando la aplicación en modo test
   @Input() bModo_test: boolean;
   //Lista de usuarios a mostrar sus rejillas y evaluaciones (puede ser uno [si soy un paciente, solo tiene que mostrar las 
   //rejillas de ese paciente, por lo que la lista es de un único paciente] o varios [si el usuario es psicólogo])
   @Input() listaUsuarios: UsuarioDatos[];
   //Indica si el usuario es de tipo administrador (psicologo). Esto se usa para permitir o no, puntuar una rejilla existente (sólo
   //los usuarios que son pacientes pueden hacerlo)
   @Input() bIsAdmin: boolean;
   resultadoRejillas: Array<InformacionRejilla> = [];
   rejillas: Array<Rejilla> = [];
   polosInicio: Array<Polos> = [];
   elementosInicio: Array<Elementosrejilla> = [];
   evaluaciones: Array<Evaluacion> = [];
   aux: number;
   isShow: Array<boolean>;
   mostrarEvaluaciones: Array<boolean> = [];
   idEvaluacion: number;
   nombreUsuario: string;
   mostrarUsuario: Array<boolean> = [];
   bMostrarListaRejillas = false;
   bPuntuarRejilla = false;


   constructor(private tokenService: TokenService, private router: Router, private authService: AuthService, private elementosService: ElementosService, private constructosService: ConstructosService, private rejillaService: RejillaService, private puntuacionesService: PuntuacionesService) {
   }


   ngOnInit() {
      if (this.listaUsuarios != null) {
         for (let i = 0; i < this.listaUsuarios.length; i++) {
            this.mostrarUsuario[i] = true;
         }
         //Inicializamos las variables
         this.rejillas = [];
         this.evaluaciones = [];
         this.mostrarEvaluaciones = [];
         this.polosInicio = [];
         this.resultadoRejillas = [];
         //Obtenemos las rejillas
         this.getRejillas();
      }
      else {
         this.bMostrarListaRejillas = false;
         this.bPuntuarRejilla = false;
      }
   }


   getRejillas() {
      this.aux = 0;
      //Para cada usuario que le hemos indicado al componente
      this.listaUsuarios.forEach((usuario) => {
         //Obtenemos del backend las rejillas del usuario
         this.rejillaService.backend_getRejillasUser(usuario.idusuario).subscribe(data => {
            this.rejillas = data;
            //Obtenemos los datos asociados a las rejillas del usuario
            this.getInformacion();
            this.bMostrarListaRejillas = true;
         });
      });
   }


   getInformacion() {
      //Para cada rejilla del usuario
      this.rejillas.forEach((rejilla) => {
         //Obtenemos los datos asociados a la rejilla del usuario
         this.getDatosRejilla(rejilla);
      });
   }


   getDatosRejilla(rejilla: Rejilla) {
      //Obtenemos del backend las evaluaciones que el paciente ha hecho de la misma rejilla
      this.puntuacionesService.backend_getEvaluacionesUsuario(rejilla.idrejilla).subscribe(data1 => {
         if (Object.entries(data1).length !== 0) {
            this.evaluaciones = data1;
            for (let i = 0; i < this.evaluaciones.length; i++) {
               this.mostrarEvaluaciones[i] = false;
            }
         }
         else {
            this.evaluaciones = [];
            this.mostrarEvaluaciones = [];
         }
         //Obtenemos del backend los datos de los polos que el paciente ha indicado para la rejilla. OJO que tiene que hacerse dentro del
         //subscribe para que no haya incongruencias con las llamadas asíncronas que hace el Angular al backend
         this.constructosService.backend_getPolosUsuario(rejilla.idrejilla).subscribe(data2 => {
            this.polosInicio = data2;
            this.resultadoRejillas[this.aux] = new InformacionRejilla(true, null, rejilla.idrejilla, rejilla.idpaciente, rejilla.fechahora, rejilla.fechahorafin, rejilla.comentariopaciente, rejilla.comentariopsicologo, null, data2, data1, true, true, this.mostrarEvaluaciones);
            this.aux++;
            this.getElementos(rejilla.idrejilla);
         });
      });
   }


   getElementos(idrejilla: number) {
      //Obtenemos del backend los datos de los elementos que el paciente ha indicado
      this.elementosService.backend_getElementosByIdRejilla(idrejilla).subscribe(data3 => {
         this.resultadoRejillas.forEach(resultado => {
            if (resultado.idrejilla == idrejilla) {
               resultado.elementos = data3;
            }
         });
      });
   }


   html_mostrarUsuarios(idUsuario: number) {
      //Método usado en la parte HTML - Muestra los datos del usario
      this.mostrarUsuario[idUsuario] = !this.mostrarUsuario[idUsuario];
   }


   html_mostrarRejilla(idrejilla: number) {
      //Método usado en la parte HTML - Muestra los datos de la rejilla
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShow = !resultado.isShow;
         }
      });
   }


   html_mostrarElementos(idrejilla: number) {
      //Método usado en la parte HTML - Muestra los datos de los elementos
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShowElementos = !resultado.isShowElementos;
         }
      });
   }


   html_mostrarConstructos(idrejilla: number) {
      //Método usado en la parte HTML - Muestra los datos de los constructos
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShowConstructos = !resultado.isShowConstructos;
         }
      });
   }


   html_MostrarPuntuacionesRejilla(indiceEvaluaciones: number, indice: number) {
      //Método usado en la parte HTML - Muestra las puntuaciones de la rejilla de una evaluación concreta
      this.resultadoRejillas[indice].isShowEvaluaciones[indiceEvaluaciones] = !this.resultadoRejillas[indice].isShowEvaluaciones[indiceEvaluaciones];
   }


   nuevaEvaluacionRejilla(idRejilla: number, elementosRejillaAux: Array<Elementosrejilla>, polosAux: Array<Polos>) {
      this.rejillaService.sesion_setRejillaId(idRejilla);
      this.constructosService.sesion_setElementosUsuario(elementosRejillaAux);
      this.constructosService.sesion_setConstructosUsuario(polosAux);
      this.bMostrarListaRejillas = false;
      this.bPuntuarRejilla = true;
   }


   obtenerSalidaPuntuarRejillaComponent(event): void {
      //Obtiene el resultado del componente app-puntuar-rejilla. Si el componente ya terminó, lo ocultamos y mostramos la lista 
      //de rejillas otra vez
      if (event.bComponenteTerminado) {
         this.bMostrarListaRejillas = true;
         this.bPuntuarRejilla = false;
      }
   }
}