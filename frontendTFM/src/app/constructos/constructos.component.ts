import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Constructos } from '../models/constructos';
import { Polos } from '../models/polos';
// import { PreguntasPolos } from '../models/preguntas-polos';
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
   @Input() bModo_test: boolean;
   @Output() emitterOutputComponente = new EventEmitter();
   elementos: any = {};
   constructos: Constructos[];
   polos: Array<Polos> = [];
   poloIzquierdo: Array<string> = [];
   poloDerecho: Array<string> = [];
   bConstructosIniciados = false;
   yer_cont_log: number = 0;


   constructor(private rejillaService: RejillaService, private constructosService: ConstructosService) {
      console.log("YERAY-LOG - ConstructosComponent-constructor() - " + (++this.yer_cont_log).toString());
   }


   ngOnInit() {
      console.log("YERAY-LOG - ConstructosComponent-ngOnInit() - " + (++this.yer_cont_log).toString());
      this.rejillaService.getConstructos().subscribe(data => {
         console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-data - " + (++this.yer_cont_log).toString());
         console.log(data);
         this.constructos = data;
         this.rejillaService.setConstructos(this.constructos);
         console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-elementosUsuario - " + (++this.yer_cont_log).toString());
         console.log(this.elementosUsuario);
         console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-constructos - " + (++this.yer_cont_log).toString());
         console.log(this.constructos);
         console.log("YERAY-LOG - ConstructosComponent-ngOnInit()-idRejilla - " + (++this.yer_cont_log).toString());
         console.log(this.idRejilla);
         this.inicializarContructos();
         this.bConstructosIniciados = true;
      },
         (err: any) => {
         }
      );
   }


   inicializarContructos() {
      console.log("YERAY-LOG - ConstructosComponent-inicializarContructos() - " + (++this.yer_cont_log).toString());
      //Reemplazamos en los constructos los nombres reales de los elementos indicados por el paciente
      for (var i = 0; i < 14; i++) {
         this.constructos[i].txtpregunta = this.constructos[i].txtpregunta.replace("#1", this.elementosUsuario[this.constructos[i].idelemento1].nombre);
         this.constructos[i].txtpregunta = this.constructos[i].txtpregunta.replace("#2", this.elementosUsuario[this.constructos[i].idelemento2].nombre);
         switch (this.constructos[i].tipopregunta.toUpperCase()) {
            case "PARECIDOS": {
               this.constructos[i].preguntaAux1 = "";
               this.constructos[i].preguntaAux2 = "Que es para ti lo opuesto a...";
               break;
            }
            case "DIFERENCIAS": {
               this.constructos[i].preguntaAux1 = "Nos diferenciamos en que yo soy:";
               this.constructos[i].preguntaAux2 = "y el/ella es:";
               break;
            }
         }
         //Si estamos en modo test
         if (this.bModo_test) {
            this.poloIzquierdo[i] = 'val_test_poloIzq_' + i;
            this.poloDerecho[i] = 'val_test_poloDer_' + i;
         }
         this.polos[i] = new Polos(this.idRejilla, i, this.poloIzquierdo[i], this.poloDerecho[i]);
      }
   }


   guardarConstructos() {
      console.log("YERAY-LOG - ConstructosComponent-guardarConstructos() - " + (++this.yer_cont_log).toString());
      console.log(this.polos);
      this.constructosService.setConstructosUsuario(this.polos);
      this.constructosService.setElementosUsuario(this.elementosUsuario);
      //ykk - Enviar constructos y elementos al back
      this.emitterOutputComponente.emit({ bPuntuarRejilla: true });
   }
}