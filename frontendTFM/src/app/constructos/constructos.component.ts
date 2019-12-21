import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementosUsuario } from '../models/elementos-usuario';
import { Constructos } from '../models/constructos';
import { Polos } from '../models/polos';
import { PreguntasPolos } from '../models/preguntas-polos';
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';



@Component({
   selector: 'app-constructos',
   templateUrl: './constructos.component.html',
   styleUrls: ['./constructos.component.css']
})
export class ConstructosComponent implements OnInit {
   @Input() elementosUsuario: any = {};
   @Input() idRejilla: number;
   @Output() emitterOutputComponente = new EventEmitter();
   elementos: any = {};
   constructos: Constructos[];
   varAux: number;
   parecidos = false;
   polos: Array<Polos> = [];
   poloDerecho: Array<string> = [];
   poloIzquierdo: Array<string> = [];
   segundaPregunta = false;
   bMostrarConstructos = false;
   diferencias = false;
   preguntasPolos: any = {};
   bPuntuarRejilla = false;
   yer_cont_log: number = 0;


   constructor(private rejillaService: RejillaService, private constructosService: ConstructosService) {
      console.log("YERAY-LOG - ConstructosComponent-constructor() - " + (++this.yer_cont_log).toString());
   }


   ngOnInit() {
      console.log("YERAY-LOG - ConstructosComponent-ngOnInit() - " + (++this.yer_cont_log).toString());
      this.rejillaService.getConstructos().subscribe(data => {
         this.constructos = data;
         this.rejillaService.setConstructos(this.constructos);
         console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-elementosUsuario - " + (++this.yer_cont_log).toString());
         console.log(this.elementosUsuario);
         console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-constructos - " + (++this.yer_cont_log).toString());
         console.log(this.constructos);
         console.log(this.idRejilla);
         this.mostrarContructos();
      },
         (err: any) => {
         }
      );
   }


   mostrarContructos() {
      console.log("YERAY-LOG - ConstructosComponent-mostrarContructos() - " + (++this.yer_cont_log).toString());
      for (var i = 0; i < 14; i++) {
         for (var u = 0; u < 12; u++) {
            var r = "#" + (u + 1);
            var re = new RegExp(r);
            this.constructos[i].txtpregunta = this.constructos[i].txtpregunta.replace(re, this.elementosUsuario[u].nombre);
         }
      }
      //reemplazar los numeros por elementousuario
      this.varAux = 0;
      this.parecidos = true;
   }


   guardarConstructos() {
      console.log("YERAY-LOG - User2Component-guardarConstructos() - " + (++this.yer_cont_log).toString());
      console.log(this.polos);
      this.polos[this.varAux] = new Polos(this.idRejilla, this.varAux + 1, this.poloIzquierdo[this.varAux], this.poloDerecho[this.varAux]);
      this.constructosService.setConstructosUsuario(this.polos);
      this.constructosService.setElementosUsuario(this.elementosUsuario);
      this.bMostrarConstructos = false;
      //ykk - Enviar constructos y elementos al back
      this.bPuntuarRejilla = true;
      this.emitterOutputComponente.emit({ bPuntuarRejilla: true });
   }


   incrementarVar() {
      //ykk mostrar las preguntas y lo que hay que poner a la vez
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
      console.log("YERAY-LOG - User2Component-incrementarVar() - " + (++this.yer_cont_log).toString());
      console.log(this.varAux + ": " + this.segundaPregunta + " - " + this.constructos[this.varAux].tipopregunta);
   }
}