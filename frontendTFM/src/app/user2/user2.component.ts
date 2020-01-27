import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDatos } from '../models/usuario-datos';
import { UsuarioRejilla } from '../models/usuario-rejilla';
import { TokenService } from '../services/token.service';
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';
import { Polos } from '../models/polos'
import { ElementosService } from '../services/elementos.service'
import { InformacionRejilla } from '../models/informacion-rejilla'
import { Elementosrejilla } from '../models/elementosrejilla';
import { PuntuacionesService } from '../services/puntuaciones.service';
import { Evaluacion } from '../models/evaluacion';
import { Rejilla } from '../models/rejilla';




@Component({
   selector: 'app-user2',
   templateUrl: './user2.component.html',
   styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
   usuarioDatos: UsuarioDatos;
   bMostrarListaRejillas = true;
   bMostrarConstructos = false;
   bMostrarElementos = false;
   bPuntuarRejilla = false;
   modo_test: boolean = true;
   rejillas: Array<Rejilla> = [];
   polosInicio: Array<Polos> = [];
   elementosInicio: Array<Elementosrejilla> = [];
   evaluaciones: Array<Evaluacion> = [];
   resultadoRejillas: Array<InformacionRejilla> = [];
   aux: number;
   isShow: Array<boolean>;
   bMostrarEvaluacion: boolean = false;
   yer_cont_log: number = 0;
   devuelto: any = {};
   mostrarEvaluaciones: Array<boolean> = [];
   idEvaluacion: number;
   listaUsuarios: Array<UsuarioDatos> = [];



   constructor(private tokenService: TokenService, private router: Router, private rejillaService: RejillaService, private constructosService: ConstructosService, private elementosService: ElementosService, private puntuacionesService: PuntuacionesService) {
   }



   ngOnInit() {
      //console.log("YI-LOG - User2Component-ngOnInit() - " + (++this.yer_cont_log).toString());
      this.bMostrarListaRejillas = true;
      this.usuarioDatos = new UsuarioDatos;
      this.usuarioDatos.idusuario = this.tokenService.sesion_getUserId();

      var usuarioAux: UsuarioDatos = new UsuarioDatos;
      usuarioAux.idusuario = this.usuarioDatos.idusuario;
      usuarioAux.nombreUsuario = this.tokenService.sesion_getUserName();
      this.listaUsuarios.push(usuarioAux);

      this.clearRejilla();
      console.log(this.resultadoRejillas);
      this.getRejillasUser();
      if (this.rejillaService.sesion_getRejillaId() != null) {
         this.bMostrarElementos = true;
         this.usuarioDatos.rejilla.idrejilla = this.rejillaService.sesion_getRejillaId();
         this.usuarioDatos.rejilla.elementos = this.rejillaService.sesion_getElementos();
         console.log(this.usuarioDatos.rejilla.idrejilla);
      }
      console.log(this.resultadoRejillas);
   }


   clearRejilla() {
      this.resultadoRejillas = [];
   }


   toggleDisplay(idrejilla: number) {
      //console.log("YI-LOG - User2Component-toggleDisplay() - " + (++this.yer_cont_log).toString());
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShow = !resultado.isShow;
         }
      })
   }


   showElementos(idrejilla: number) {
      //console.log("YI-LOG - User2Component-showElementos() - " + (++this.yer_cont_log).toString());
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShowElementos = !resultado.isShowElementos;
         }
      })
   }


   showConstructos(idrejilla: number) {
      //console.log("YI-LOG - User2Component-showConstructos() - " + (++this.yer_cont_log).toString());
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShowConstructos = !resultado.isShowConstructos;
         }
      })
   }


   iniciarRejilla(): void {
      //console.log("YI-LOG - User2Component-iniciarRejilla() - " + (++this.yer_cont_log).toString());
      this.bMostrarListaRejillas = false;
      this.bMostrarElementos = true;
      this.bMostrarConstructos = false;
      this.bPuntuarRejilla = false;
      //Hay que inicializar la nueva rejilla porque si no coge los datos de memoria de la rejilla anterior
      var elementos_temp = this.usuarioDatos.rejilla.elementos;   //Hacemos un backup de los elementos
      this.usuarioDatos.rejilla = new UsuarioRejilla;
      this.usuarioDatos.rejilla.elementos = elementos_temp;
      //this.usuarioDatos.rejilla.elementos = this.rejillaService.sesion_getElementos();
      // console.log(this.usuarioDatos.rejilla.elementos);
      // console.log(this.usuarioDatos.rejilla.idrejilla);
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
      //console.log("YI-LOG - User2Component-obtenerSalidaElementosComponent() - " + (++this.yer_cont_log).toString() + " - " + event.bMostrarConstructos);
      console.log(event.elementosUsuario);
      this.usuarioDatos.rejilla.elementosrejilla = event.elementosUsuario;
      this.bMostrarConstructos = event.bMostrarConstructos;
      if (this.bMostrarConstructos) {
         this.bMostrarElementos = false;
      }
   }


   obtenerSalidaConstructosComponent(event): void {
      //    //console.log("YI-LOG - User2Component-obtenerSalidaConstructosComponent() - " + (++this.yer_cont_log).toString() + " - " + event.bPuntuarRejilla);
      this.bPuntuarRejilla = event.bPuntuarRejilla;
      if (this.bPuntuarRejilla) {
         this.bMostrarConstructos = false;
         //     //console.log("YI-LOG - User2Component-obtenerSalidaConstructosComponent()-backend_nuevaRejilla_v2 - " + (++this.yer_cont_log).toString());

         this.rejillaService.backend_nuevaRejilla2(this.usuarioDatos.idusuario, this.usuarioDatos.rejilla.elementosrejilla, this.usuarioDatos.rejilla.polos).subscribe(data => {
            this.devuelto = data;
            this.usuarioDatos.rejilla.idrejilla = this.devuelto;
            this.rejillaService.sesion_setRejillaId(this.usuarioDatos.rejilla.idrejilla);
            //            console.log(this.usuarioDatos.rejilla.idrejilla);

         },
         );

      }
   }


   getRejillasUser() {
      //  //console.log("YI-LOG - User2Component-getRejillasUser() - " + (++this.yer_cont_log).toString());
      this.aux = 0;
      this.rejillaService.backend_getRejillasUser(this.usuarioDatos.idusuario).subscribe(data => {
         this.rejillas = data;
         this.getInformacion();
      },
         // (err: any) => {
         ///     console.log(err);
         // }
      );
   }


   getInformacion() {
      // //console.log("YI-LOG - User2Component-getInformacion() - " + (++this.yer_cont_log).toString());
      if (this.rejillas != null) {
         this.rejillas.forEach((rejilla) => {
            this.getPolosUsuario(rejilla);
         })
         this.rejillas.forEach((rejilla) => {
            this.getElementos(rejilla.idrejilla);
         })
      }
   }


   getPolosUsuario(rejilla: Rejilla) {
      //console.log("YI-LOG - User2Component-getPolosUsuario() - " + (++this.yer_cont_log).toString());
      console.log("Id rejilla - " + rejilla.idrejilla);
      this.puntuacionesService.backend_getEvaluacionesUsuario(rejilla.idrejilla).subscribe(data => {
         if (Object.entries(data).length !== 0) {
            this.evaluaciones = data;
            this.mostrarEvaluaciones = [];
            for (let i = 0; i < this.evaluaciones.length; i++) {
               this.mostrarEvaluaciones[i] = false;
            }
         }
         else {
            this.evaluaciones = null;
            this.mostrarEvaluaciones = null;
         }
      },
      );
      this.constructosService.backend_getPolosUsuario(rejilla.idrejilla).subscribe(data => {
         this.polosInicio = data;
         this.resultadoRejillas[this.aux] = new InformacionRejilla(true, null, rejilla.idrejilla, rejilla.idpaciente, rejilla.fechahora, rejilla.fechahorafin, rejilla.comentariopaciente, rejilla.comentariopsicologo, null, this.polosInicio, this.evaluaciones, true, true, this.mostrarEvaluaciones);
         this.aux++;
      });
   }


   getElementos(idrejilla: number) {
      //   //console.log("YI-LOG - User2Component-getElementos() - " + (++this.yer_cont_log).toString());
      this.elementosService.backend_getElementosByIdRejilla(idrejilla).subscribe(data => {
         this.resultadoRejillas.forEach(resultado => {
            if (resultado.idrejilla === idrejilla) {
               resultado.elementos = data;
            }
         })
      },
      );

   }


   showRejillaCompleta(indiceEvaluaciones: number, indice: number) {
      //console.log("YI-LOG - User2Component-showRejillaCompleta() - " + (++this.yer_cont_log).toString());
      console.log(indiceEvaluaciones + " - " + indice);
      console.log(this.resultadoRejillas);
      console.log(this.resultadoRejillas[indice].isShowEvaluaciones);
      this.resultadoRejillas[indice].isShowEvaluaciones[indiceEvaluaciones] = !this.resultadoRejillas[indice].isShowEvaluaciones[indiceEvaluaciones];
   }


   nuevaEvaluacionRejilla(idRejilla: number, elementosRejillaAux: Array<Elementosrejilla>, polosAux: Array<Polos>) {
      //console.log("YI-LOG - User2Component-nuevaEvaluacionRejilla() - " + (++this.yer_cont_log).toString());
      console.log(idRejilla);

      // this.usuarioDatos.rejilla.elementosrejilla = elementosRejillaAux;
      // this.usuarioDatos.rejilla.polos = polosAux;
      // console.log(this.usuarioDatos.rejilla.elementosrejilla);
      // console.log(this.usuarioDatos.rejilla.polos);

      this.rejillaService.sesion_setRejillaId(idRejilla);
      this.constructosService.sesion_setElementosUsuario(elementosRejillaAux);
      this.constructosService.sesion_setConstructosUsuario(polosAux);
      console.log(elementosRejillaAux);
      console.log(polosAux);

      this.bMostrarListaRejillas = false;
      this.bMostrarElementos = false;
      this.bMostrarConstructos = false;
      this.bPuntuarRejilla = true;
   }
}