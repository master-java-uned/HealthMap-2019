import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDatos } from '../models/usuario-datos';
import { TokenService } from '../services/token.service';
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';
import { Polos } from '../models/polos'
import { ElementosService } from '../services/elementos.service'
import { InformacionRejilla } from '../models/informacion-rejilla'
import { ElementosUsuario } from '../models/elementos-usuario';
import { PuntuacionesService } from '../services/puntuaciones.service';
import { Evaluacion } from '../models/evaluacion';
import { Rejilla } from '../models/rejilla';
import { MostrarRejillaComponent } from '../mostrar-rejilla/mostrar-rejilla.component'



@Component({
   selector: 'app-user2',
   templateUrl: './user2.component.html',
   styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
   usuarioDatos: UsuarioDatos;
   bMostrarConstructos = false;
   bMostrarElementos = false;
   bPuntuarRejilla = false;
   modo_test: boolean = true;
   rejillas: Array<Rejilla> = [];
   polosInicio: Array<Polos> = [];
   elementosInicio: Array<ElementosUsuario> = [];
   evaluaciones: Array<Evaluacion> = [];
   resultadoRejillas: Array<InformacionRejilla> = [];
   puntuaciones: any = {};
   orden: any = {};
   aux: number;
   auxEvaluaciones: number = 0;
   isShow: Array<boolean>;
   rejillaCompleta: MostrarRejillaComponent;
   mostrarEvaluacion: boolean = false;
   yer_cont_log: number = 0;
   devuelto: any = {};


   constructor(private tokenService: TokenService, private router: Router, private rejillaService: RejillaService, private constructosService: ConstructosService, private elementosService: ElementosService, private puntuacionesService: PuntuacionesService) {
   }


   ngOnInit() {
      console.log("YERAY-LOG - User2Component-ngOnInit() - " + (++this.yer_cont_log).toString());
      this.usuarioDatos = new UsuarioDatos;
      this.usuarioDatos.idUsuario = this.tokenService.sesion_getUserId();
      this.getRejillasUser();
      if (this.rejillaService.sesion_getRejillaId() != null) {
         this.bMostrarElementos = true;
         this.usuarioDatos.rejilla.idRejilla = this.rejillaService.sesion_getRejillaId();
         this.usuarioDatos.rejilla.elementos = this.rejillaService.sesion_getElementosEvaluacion();
         console.log(this.usuarioDatos.rejilla.idRejilla);
      }
      console.log(this.resultadoRejillas);


   }


   toggleDisplay(idrejilla: number) {
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShow = !resultado.isShow;
         }
      })
   }


   showElementos(idrejilla: number) {
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShowElementos = !resultado.isShowElementos;
         }
      })
   }


   showConstructos(idrejilla: number) {
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShowConstructos = !resultado.isShowConstructos;
         }
      })
   }

   iniciarRejilla(): void {
      this.bMostrarElementos = true;
      console.log("YERAY-LOG - User2Component-iniciarRejilla() - " + (++this.yer_cont_log).toString());
   }


   logOut(): void {
      this.tokenService.sesion_logOut();
      this.router.navigate(['login']);
   }



   obtenerSalidaElementosComponent(event): void {
      console.log("YERAY-LOG - User2Component-obtenerSalidaElementosComponent() - " + (++this.yer_cont_log).toString() + " - " + event.bMostrarConstructos);
      console.log(event.elementosUsuario);
      this.usuarioDatos.rejilla.elementosUsuario = event.elementosUsuario;
      this.bMostrarConstructos = event.bMostrarConstructos;
      if (this.bMostrarConstructos) {
         this.bMostrarElementos = false;
      }
   }


   obtenerSalidaConstructosComponent(event): void {
      console.log("YERAY-LOG - User2Component-obtenerSalidaConstructosComponent() - " + (++this.yer_cont_log).toString() + " - " + event.bPuntuarRejilla);
      this.bPuntuarRejilla = event.bPuntuarRejilla;
      if (this.bPuntuarRejilla) {
         this.bMostrarConstructos = false;
         this.constructosService.backend_insertConstructos(this.usuarioDatos.rejilla.polos).subscribe(data => {
            this.devuelto = data;
         },
            (err: any) => {
            }
         );
         console.log("YERAY-LOG - User2Component-obtenerSalidaConstructosComponent()-backend_insertConstructos - " + (++this.yer_cont_log).toString() + " - " + event.bPuntuarRejilla);
         console.log(this.devuelto);
      }
   }


   getRejillasUser() {
      this.aux = 0;
      this.rejillaService.getRejillasUser(this.usuarioDatos.idUsuario).subscribe(data => {
         this.rejillas = data;
         this.getInformacion();
      });
   }


   getInformacion() {
      this.rejillas.forEach((rejilla) => {
         this.getPolosUsuario(rejilla);
      })
      this.rejillas.forEach((rejilla) => {
         this.getElementos(rejilla.idrejilla);
      })
   }


   getPolosUsuario(rejilla: Rejilla) {
      this.puntuacionesService.backend_getEvaluacionesUsuario(rejilla.idrejilla).subscribe(data => {
         if (Object.entries(data).length !== 0) {
            this.evaluaciones = data;
         }
         else {
            this.evaluaciones = null;
         }
      },
      );
      this.constructosService.backend_getPolosUsuario(rejilla.idrejilla).subscribe(data => {
         this.polosInicio = data;
         console.log(this.polosInicio);
         this.resultadoRejillas[this.aux] = new InformacionRejilla(true, null, rejilla.idrejilla, rejilla.idpaciente, rejilla.fechahora, rejilla.fechahorafin, rejilla.comentariopaciente, rejilla.comentariopsicologo, null, this.polosInicio, this.evaluaciones, true, true);
         this.aux++;
      });
   }


   getElementos(idrejilla: number) {
      this.elementosService.getElementosByIdRejilla(idrejilla).subscribe(data => {
         this.resultadoRejillas.forEach(resultado => {
            if (resultado.idrejilla === idrejilla) {
               resultado.elementos = data;
            }
         })
      },
      );

   }


   getEvaluacionesUser() {
      this.rejillas.forEach((rejilla) => {
         this.puntuacionesService.backend_getEvaluacionesUsuario(rejilla.idrejilla).subscribe(data => {
            if (Object.entries(data).length !== 0) {
               this.evaluaciones = data;
            }
         },
         );
      })


   }

   showRejillaCompleta(idEvaluacion: number) {
      this.mostrarEvaluacion = !this.mostrarEvaluacion;
      this.rejillaCompleta = new MostrarRejillaComponent(idEvaluacion);
   }
}