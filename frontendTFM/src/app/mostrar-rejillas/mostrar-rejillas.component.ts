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
   //@Input() listaUsuarios: Array<UsuarioDatos> = [];
   //@Input() listaUsuarios: Array<UsuarioDatos>;
   @Input() listaUsuarios: UsuarioDatos[];
   //@Input() listaUsuarios: any;
   @Input() bIsAdmin: boolean;
   //usuarios: any;
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
      //console.log("YI-LOG - MostrarRejillasComponent-constructor() - ");
   }



   ngOnInit() {
      //this.usuarios = this.listaUsuarios;
      //console.log("YI-LOG - MostrarRejillasComponent-ngOnInit() - 1");
      if (this.listaUsuarios != null) {
         //console.log(this.listaUsuarios);
         //console.log("YI-LOG - MostrarRejillasComponent-ngOnInit() - 2");
         for (let i = 0; i < this.listaUsuarios.length; i++) {
            this.mostrarUsuario[i] = true;
         }
         //Inicializamos las variables
         this.rejillas = [];
         this.evaluaciones = [];
         this.mostrarEvaluaciones = [];
         this.polosInicio = [];
         this.resultadoRejillas = [];
         this.getRejillas();
         //console.log(this.mostrarUsuario);
         //console.log("YI-LOG - MostrarRejillasComponent-ngOnInit() - 3");         
      }
      else {
         this.bMostrarListaRejillas = false;
         this.bPuntuarRejilla = false;
      }
   }



   getRejillas() {
      //console.log("YI-LOG - MostrarRejillasComponent-getRejillas() - 1");
      //console.log(this.listaUsuarios);
      this.aux = 0;
      this.listaUsuarios.forEach((usuario) => {
         //console.log("YI-LOG - MostrarRejillasComponent-getRejillas() - 2");
         //console.log(usuario);
         this.rejillaService.backend_getRejillasUser(usuario.idusuario).subscribe(data => {
            this.rejillas = data;
            //console.log(this.rejillas);            
            this.getInformacion();
            //console.log(this.resultadoRejillas);
            console.log(this.aux);
            this.bMostrarListaRejillas = true;
         });
      })

      // for (var i = 0; i < this.listaUsuarios.length; i++) {
      //    //console.log("YI-LOG - MostrarRejillasComponent-getRejillas() - 2");
      //    //console.log(this.listaUsuarios[i]);
      //    this.rejillaService.backend_getRejillasUser(this.listaUsuarios[i].idusuario).subscribe(data => {
      //       this.rejillas = data;
      //       this.getInformacion();
      //    });
      // }
   }



   getInformacion() {
      //console.log("YI-LOG - MostrarRejillasComponent-getInformacion() - ");
      this.rejillas.forEach((rejilla) => {
         this.getPolosUsuario(rejilla);
         console.log(rejilla.idrejilla);
         console.log(this.resultadoRejillas);
         // })
         // this.rejillas.forEach((rejilla) => {
         this.getElementos(rejilla.idrejilla);
      })
   }



   getPolosUsuario(rejilla: Rejilla) {
      //console.log("YI-LOG - MostrarRejillasComponent-getPolosUsuario() - 1");
      this.puntuacionesService.backend_getEvaluacionesUsuario(rejilla.idrejilla).subscribe(data1 => {
         if (Object.entries(data1).length !== 0) {
            this.evaluaciones = data1;
            //console.log(this.evaluaciones);
            //console.log("YI-LOG - MostrarRejillasComponent-getPolosUsuario() - 2");
            for (let i = 0; i < this.evaluaciones.length; i++) {
               this.mostrarEvaluaciones[i] = false;
            }
         }
         else {
            //this.evaluaciones = null;
            this.evaluaciones = [];
            this.mostrarEvaluaciones = [];
         }
         //console.log(rejilla.idrejilla);
         //console.log("YI-LOG - MostrarRejillasComponent-getPolosUsuario() - 3");
         this.constructosService.backend_getPolosUsuario(rejilla.idrejilla).subscribe(data2 => {
            this.polosInicio = data2;
            // this.listaUsuarios.forEach((usuario) => {
            //    //if (rejilla.idpaciente === usuario.id) {
            //    if (rejilla.idpaciente == Number(usuario.idusuario)) {
            //       this.nombreUsuario = usuario.nombreUsuario;
            //    }
            // })
            //console.log(this.nombreUsuario);
            //console.log("YI-LOG - MostrarRejillasComponent-getPolosUsuario() - 4");
            //this.resultadoRejillas[this.aux] = new InformacionRejilla(true, this.nombreUsuario, rejilla.idrejilla, rejilla.idpaciente, rejilla.fechahora, rejilla.fechahorafin, rejilla.comentariopaciente, rejilla.comentariopsicologo, null, this.polosInicio, this.evaluaciones, true, true, this.mostrarEvaluaciones);
            //this.resultadoRejillas[this.aux] = new InformacionRejilla(true, null, rejilla.idrejilla, rejilla.idpaciente, rejilla.fechahora, rejilla.fechahorafin, rejilla.comentariopaciente, rejilla.comentariopsicologo, null, this.polosInicio, this.evaluaciones, true, true, this.mostrarEvaluaciones);
            this.resultadoRejillas[this.aux] = new InformacionRejilla(true, null, rejilla.idrejilla, rejilla.idpaciente, rejilla.fechahora, rejilla.fechahorafin, rejilla.comentariopaciente, rejilla.comentariopsicologo, null, data2, data1, true, true, this.mostrarEvaluaciones);
            //console.log(this.resultadoRejillas[this.aux])
            //console.log(this.aux);
            this.aux++;
         });
      },
      );
      // this.constructosService.backend_getPolosUsuario(rejilla.idrejilla).subscribe(data => {
      //    this.polosInicio = data;
      //    this.listaUsuarios.forEach((usuario) => {
      //       //if (rejilla.idpaciente === usuario.id) {
      //       if (rejilla.idpaciente == Number(usuario.idusuario)) {
      //          this.nombreUsuario = usuario.nombreUsuario;
      //       }
      //    })
      //    //console.log(this.nombreUsuario);
      //    //console.log("YI-LOG - MostrarRejillasComponent-getPolosUsuario() - 3");
      //    this.resultadoRejillas[this.aux] = new InformacionRejilla(true, this.nombreUsuario, rejilla.idrejilla, rejilla.idpaciente, rejilla.fechahora, rejilla.fechahorafin, rejilla.comentariopaciente, rejilla.comentariopsicologo, null, this.polosInicio, this.evaluaciones, true, true, this.mostrarEvaluaciones);
      //    //console.log(this.resultadoRejillas[this.aux])
      //    this.aux++;
      // });
   }



   getElementos(idrejilla: number) {
      //console.log("YI-LOG - MostrarRejillasComponent-getElementos() - 1");
      this.elementosService.backend_getElementosByIdRejilla(idrejilla).subscribe(data => {
         this.resultadoRejillas.forEach(resultado => {
            if (resultado.idrejilla === idrejilla) {
               resultado.elementos = data;
               //console.log("YI-LOG - MostrarRejillasComponent-getElementos() - 2");
            }
         })
         //console.log(this.resultadoRejillas);
      },
      );
   }



   mostrarUsuarios(idUsuario: number) {
      this.mostrarUsuario[idUsuario] = !this.mostrarUsuario[idUsuario];
   }



   mostrarRejilla(idrejilla: number) {
      //console.log("YI-LOG - MostrarRejillasComponent-mostrarRejilla() - ");
      this.resultadoRejillas.forEach((resultado) => {
         if (resultado.idrejilla == idrejilla) {
            resultado.isShow = !resultado.isShow;
         }
      })
   }



   mostrarElementos(idrejilla: number) {
      //console.log("YI-LOG - MostrarRejillasComponent-mostrarElementos() - ");
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



   nuevaEvaluacionRejilla(idRejilla: number, elementosRejillaAux: Array<Elementosrejilla>, polosAux: Array<Polos>) {
      //console.log("YI-LOG - MostrarRejillasComponent-nuevaEvaluacionRejilla() - ");
      //console.log(idRejilla);

      // this.usuarioDatos.rejilla.elementosrejilla = elementosRejillaAux;
      // this.usuarioDatos.rejilla.polos = polosAux;
      // //console.log(this.usuarioDatos.rejilla.elementosrejilla);
      // //console.log(this.usuarioDatos.rejilla.polos);

      this.rejillaService.sesion_setRejillaId(idRejilla);
      this.constructosService.sesion_setElementosUsuario(elementosRejillaAux);
      this.constructosService.sesion_setConstructosUsuario(polosAux);
      //console.log(elementosRejillaAux);
      //console.log(polosAux);

      this.bMostrarListaRejillas = false;
      this.bPuntuarRejilla = true;
   }
}