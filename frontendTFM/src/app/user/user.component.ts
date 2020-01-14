import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Elementos } from '../models/elementos';
import { TouchSequence } from 'selenium-webdriver';
import { TokenService } from '../services/token.service'
import { RejillaService } from '../services/rejilla.service'
import { LoginUsuario } from '../models/login-usuario';
import { ElementosUsuario } from '../models/elementos-usuario';
import { Constructos } from '../models/constructos';
import { PreguntasPolos } from '../models/preguntas-polos'
import { Polos } from '../models/polos'
import { ConstructosService } from '../services/constructos.service';
// import { FlatTreeControl } from '@angular/cdk/tree';

const modo_test: boolean = true;



@Component({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   idUsuario: bigint;
   idRejilla: number;
   mostrarConstructos = false;
   rejillaIniciada = false;
   elementos: any = {};
   constructos: Constructos[];
   elementosUsuario: any = {};
   usuario: LoginUsuario;
   varAux: number;
   constructosUsuario: any = {};
   polos: Array<Polos> = [];
   parecidos = false;
   diferencias = false;
   preguntas: any = {};
   segundaPregunta = false;
   poloDerecho: Array<string> = [];
   poloIzquierdo: Array<string> = [];
   preguntasPolos: any = {};
   devuelto: any = {};
   puntuarRejilla = false;
   yer_cont_log: number = 0;



   constructor(private tokenService: TokenService, private router: Router, private rejillaService: RejillaService, private constructosService: ConstructosService) { }


   ngOnInit() {
      this.idUsuario = this.tokenService.sesion_getUserId();
      if (this.rejillaService.sesion_getRejillaId() != null) {
         this.rejillaIniciada = true;
         this.elementos = this.rejillaService.sesion_getElementosEvaluacion();
         this.idRejilla = this.rejillaService.sesion_getRejillaId();
         console.log(this.idRejilla);
      }
   }


   iniciarRejilla(): void {
      console.log("YERAY-LOG - iniciarRejilla() - " + (++this.yer_cont_log).toString());
      this.rejillaService.backend_nuevaRejilla(this.idUsuario).subscribe(data => {
         this.idRejilla = data;
         this.rejillaService.sesion_setRejillaId(this.idRejilla);
         this.rejillaIniciada = true;
      },
         (err: any) => {
         }
      );
      this.rejillaService.backend_getElementos().subscribe(data => {
         this.elementos = data;
         console.log(this.elementos);
         this.rellenar_modo_test();
         this.rejillaService.sesion_setElementos(this.elementos);
      },
         (err: any) => {
         }
      );
   }


   guardar(): void {
      console.log("YERAY-LOG - guardar() - " + (++this.yer_cont_log).toString());
      this.elementosUsuario[0] = new ElementosUsuario("Yo actual", null);
      this.elementosUsuario[1] = new ElementosUsuario("Yo dentro de dos años", null);
      this.elementosUsuario[2] = new ElementosUsuario(this.elementos.nombre3, this.elementos.descripcionUsuario3);
      this.elementosUsuario[3] = new ElementosUsuario(this.elementos.nombre4, this.elementos.descripcionUsuario4);
      this.elementosUsuario[4] = new ElementosUsuario(this.elementos.nombre5, this.elementos.descripcionUsuario5);
      this.elementosUsuario[5] = new ElementosUsuario(this.elementos.nombre6, this.elementos.descripcionUsuario6);
      this.elementosUsuario[6] = new ElementosUsuario(this.elementos.nombre7, this.elementos.descripcionUsuario7);
      this.elementosUsuario[7] = new ElementosUsuario(this.elementos.nombre8, this.elementos.descripcionUsuario8);
      this.elementosUsuario[8] = new ElementosUsuario(this.elementos.nombre9, this.elementos.descripcionUsuario9);
      this.elementosUsuario[9] = new ElementosUsuario(this.elementos.nombre10, this.elementos.descripcionUsuario10);
      this.elementosUsuario[10] = new ElementosUsuario(this.elementos.nombre11, this.elementos.descripcionUsuario11);
      this.elementosUsuario[11] = new ElementosUsuario("Yo ideal", null);
      this.rejillaService.backend_getConstructos().subscribe(data => {
         this.constructos = data;
         this.rejillaService.sesion_setConstructos(this.constructos);
         console.log(this.elementosUsuario);
         console.log(this.constructos);
         this.mostrarContructos();
      },
         (err: any) => {
         }
      );
   }


   mostrarContructos() {
      console.log("YERAY-LOG - mostrarContructos() - " + (++this.yer_cont_log).toString());
      for (var i = 0; i < 14; i++) {
         for (var u = 0; u < 12; u++) {
            var r = "#" + (u + 1);
            var re = new RegExp(r);
            this.constructos[i].txtpregunta = this.constructos[i].txtpregunta.replace(re, this.elementosUsuario[u].nombre);
         }
      }
      //reemplazar los numeros por elementousuario
      this.rejillaIniciada = false;
      this.mostrarConstructos = true;
      this.varAux = 0;
      this.parecidos = true;
   }


   incrementarVar() {
      if (this.segundaPregunta) {
         this.polos[this.varAux] = new Polos(this.idRejilla, this.varAux + 1, this.poloIzquierdo[this.varAux], this.poloDerecho[this.varAux]);
         this.varAux++;
         this.segundaPregunta = false;
         if (this.constructos[this.varAux].tipopregunta === 'Parecidos') {
            this.parecidos = true;
            this.diferencias = false;
         }
         else {
            this.parecidos = false;
            this.diferencias = true;
         }
      }
      else {
         if (this.parecidos) {
            this.preguntasPolos[this.varAux] = new PreguntasPolos("Que es para ti lo opuesto a" + this.poloIzquierdo[this.varAux], null);
         }
         else {
            this.preguntasPolos[this.varAux] = new PreguntasPolos("Nos diferenciamos en que yo soy:", "y el/ella es:");
         }
         this.segundaPregunta = true;
      }
      console.log("YERAY-LOG - incrementarVar() - " + (++this.yer_cont_log).toString());
      console.log(this.varAux + ": " + this.segundaPregunta + " - " + this.constructos[this.varAux].tipopregunta);
   }


   guardarConstructos() {
      console.log("YERAY-LOG - guardarConstructos() - " + (++this.yer_cont_log).toString());
      console.log(this.polos);
      this.polos[this.varAux] = new Polos(this.idRejilla, this.varAux + 1, this.poloIzquierdo[this.varAux], this.poloDerecho[this.varAux]);
      this.constructosService.backend_insertConstructos(this.polos).subscribe(data => {
         this.devuelto = data;
      },
         (err: any) => {
         }
      );
      this.constructosService.sesion_setConstructosUsuario(this.polos);
      this.constructosService.sesion_setElementosUsuario(this.elementosUsuario);
      this.mostrarConstructos = false;
      this.puntuarRejilla = true;
   }


   logOut(): void {
      this.tokenService.sesion_logOut();
      this.router.navigate(['login']);
   }


   //Para hacer pruebas, usamos este método que rellena todo de forma automática
   rellenar_modo_test(): void {
      if (modo_test) {
         for (var i = 3; i <= 11; i++) {
            this.elementos['nombre' + i] = 'nombre_' + i;
            this.elementos['descripcionUsuario' + i] = 'nombre_' + i;
         }
      }
   }
}