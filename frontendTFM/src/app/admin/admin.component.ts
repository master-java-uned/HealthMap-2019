import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router';
import { InformacionRejilla } from '../models/informacion-rejilla'
import { Evaluacion } from '../models/evaluacion'
import { ElementosUsuario } from '../models/elementos-usuario'
import { Polos } from '../models/polos'
import { Rejilla } from '../models/rejilla'
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';
import { ElementosService } from '../services/elementos.service';
import { PuntuacionesService } from '../services/puntuaciones.service';

@Component({
   selector: 'app-admin',
   templateUrl: './admin.component.html',
   styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   usuarios: any;
   resultadoRejillas: Array<InformacionRejilla> = [];
   rejillas: Array<Rejilla> = [];
   polosInicio: Array<Polos> = [];
   elementosInicio: Array<ElementosUsuario> = [];
   evaluaciones: Array<Evaluacion> = [];
   aux: number;
   isShow: Array<boolean>;
   mostrarEvaluaciones: Array<boolean> = [];
   idEvaluacion: number;
   nombreUsuario: string;
   mostrarUsuario: Array<boolean> = [];

   constructor(private tokenService: TokenService, private router: Router, private authService: AuthService, private elementosService: ElementosService, private constructosService: ConstructosService, private rejillaService: RejillaService, private puntuacionesService: PuntuacionesService) { }


   ngOnInit() {
      this.authService.backend_getUsuarios().subscribe(data => {
         this.usuarios = data;
         for (let i = 0; i < this.usuarios.length; i++) {
            this.mostrarUsuario[i] = true;
         }
         this.resultadoRejillas = [];
         console.log(this.usuarios);
         this.getRejillas();
      },
      );
   }


   logOut(): void {
      this.tokenService.sesion_logOut();
      this.router.navigate(['login']);


   }
   getRejillas() {
      this.aux = 0;
      this.usuarios.forEach((usuario) => {

         this.rejillaService.backend_getRejillasUser(usuario.id).subscribe(data => {
            this.rejillas = data;
            this.getInformacion();
         });
      })

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
            for (let i = 0; i < this.evaluaciones.length; i++) {
               this.mostrarEvaluaciones[i] = false;
            }
         }
         else {
            this.evaluaciones = null;
            this.mostrarEvaluaciones = [];
         }
      },
      );
      this.constructosService.backend_getPolosUsuario(rejilla.idrejilla).subscribe(data => {
         this.polosInicio = data;
         this.usuarios.forEach((usuario) => {
            if (rejilla.idpaciente === usuario.id) {
               this.nombreUsuario = usuario.nombreUsuario;
            }
         })
         console.log(this.nombreUsuario);
         this.resultadoRejillas[this.aux] = new InformacionRejilla(true, this.nombreUsuario, rejilla.idrejilla, rejilla.idpaciente, rejilla.fechahora, rejilla.fechahorafin, rejilla.comentariopaciente, rejilla.comentariopsicologo, null, this.polosInicio, this.evaluaciones, true, true, this.mostrarEvaluaciones);
         console.log(this.resultadoRejillas[this.aux])
         this.aux++;
      });
   }


   getElementos(idrejilla: number) {
      this.elementosService.backend_getElementosByIdRejilla(idrejilla).subscribe(data => {
         this.resultadoRejillas.forEach(resultado => {
            if (resultado.idrejilla === idrejilla) {
               resultado.elementos = data;
            }
         })
      },
      );

   }
   mostrarUsuarios(idUsuario: number) {
      this.mostrarUsuario[idUsuario] = !this.mostrarUsuario[idUsuario];
   }

   mostrarRejilla(idrejilla: number) {
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShow = !resultado.isShow;
         }
      })
   }


   mostrarElementos(idrejilla: number) {
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShowElementos = !resultado.isShowElementos;
         }
      })
   }


   mostrarConstructos(idrejilla: number) {
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShowConstructos = !resultado.isShowConstructos;
         }
      })
   }





   showRejillaCompleta(indiceEvaluaciones: number, indice: number) {
      this.resultadoRejillas[indice].isShowEvaluaciones[indiceEvaluaciones] = !this.resultadoRejillas[indice].isShowEvaluaciones[indiceEvaluaciones];

   }

}