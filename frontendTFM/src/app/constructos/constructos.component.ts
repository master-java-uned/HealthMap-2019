import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Polos } from '../models/polos';
import { UsuarioRejilla } from '../models/usuario-rejilla';
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';



@Component({
   selector: 'app-constructos',
   templateUrl: './constructos.component.html',
   styleUrls: ['./constructos.component.css']
})
export class ConstructosComponent implements OnInit {
   @Input() bModo_test: boolean;
   @Input() usuarioRejilla: UsuarioRejilla;
   @Output() emitterOutputComponente = new EventEmitter();

   bConstructosIniciados = false;
   yer_cont_log: number = 0;
   @ViewChild('boton', { static: false }) boton: ElementRef;


   constructor(private rejillaService: RejillaService, private constructosService: ConstructosService) {
      ////console.log("YI-LOG - ConstructosComponent-constructor() - " + (++this.yer_cont_log).toString());
   }


   ngOnInit() {
      ////console.log("YI-LOG - ConstructosComponent-ngOnInit() - " + (++this.yer_cont_log).toString());
      this.rejillaService.backend_getConstructos().subscribe(data => {
         ////console.log("YI-LOG - ConstructosComponent-ngOnInit()-data - " + (++this.yer_cont_log).toString());
         //console.log("YI-LOGdata);
         this.usuarioRejilla.constructos = data;
         this.rejillaService.sesion_setConstructos(this.usuarioRejilla.constructos);
         ////console.log("YI-LOG - ConstructosComponent-ngOnInit()-elementosUsuario - " + (++this.yer_cont_log).toString());
         //console.log("YI-LOGthis.usuarioRejilla.elementosrejilla);
         ////console.log("YI-LOG - ConstructosComponent-ngOnInit()-constructos - " + (++this.yer_cont_log).toString());
         //console.log("YI-LOGthis.usuarioRejilla.constructos);
         ////console.log("YI-LOG - ConstructosComponent-ngOnInit()-idRejilla - " + (++this.yer_cont_log).toString());
         //console.log("YI-LOGthis.usuarioRejilla.idrejilla);
         this.inicializarContructos();
         this.bConstructosIniciados = true;
      },
      );
   }


   inicializarContructos() {
      //console.log("YI-LOG - ConstructosComponent-inicializarContructos() - " + (++this.yer_cont_log).toString());
      //Reemplazamos en los constructos los nombres reales de los elementos indicados por el paciente
      for (var i = 0; i < 14; i++) {
         this.usuarioRejilla.constructos[i].txtpregunta = this.usuarioRejilla.constructos[i].txtpregunta.replace("#1", this.usuarioRejilla.elementosrejilla[this.usuarioRejilla.constructos[i].idelemento1].nombreelemento);
         this.usuarioRejilla.constructos[i].txtpregunta = this.usuarioRejilla.constructos[i].txtpregunta.replace("#2", this.usuarioRejilla.elementosrejilla[this.usuarioRejilla.constructos[i].idelemento2].nombreelemento);
         switch (this.usuarioRejilla.constructos[i].tipopregunta.toUpperCase()) {
            case "PARECIDOS": {
               this.usuarioRejilla.constructos[i].preguntaAux1 = "";
               this.usuarioRejilla.constructos[i].preguntaAux2 = "Que es para ti lo opuesto a...";
               break;
            }
            case "DIFERENCIAS": {
               this.usuarioRejilla.constructos[i].preguntaAux1 = "Nos diferenciamos en que yo soy:";
               this.usuarioRejilla.constructos[i].preguntaAux2 = "y el/ella es:";
               break;
            }
         }
         //Si estamos en modo test
         if (this.bModo_test) {
            this.usuarioRejilla.poloIzquierdo[i] = 'val_test_poloIzq_' + i;
            this.usuarioRejilla.poloDerecho[i] = 'val_test_poloDer_' + i;
         }
         this.usuarioRejilla.polos[i] = new Polos(this.usuarioRejilla.idrejilla, i + 1, this.usuarioRejilla.poloIzquierdo[i], this.usuarioRejilla.poloDerecho[i]);
      }
      //console.log("YI-LOGthis.usuarioRejilla.constructos);
      //console.log("YI-LOGthis.usuarioRejilla.poloIzquierdo);
      //console.log("YI-LOGthis.usuarioRejilla.poloDerecho);
      //   //console.log("YI-LOGthis.usuarioRejilla.polos);
   }


   guardarConstructos() {
      //console.log("YI-LOG - ConstructosComponent-guardarConstructos() - " + (++this.yer_cont_log).toString());
      //console.log("YI-LOGthis.usuarioRejilla.polos);
      this.constructosService.sesion_setConstructosUsuario(this.usuarioRejilla.polos);
      this.constructosService.sesion_setElementosUsuario(this.usuarioRejilla.elementosrejilla);
      //ykk - Enviar constructos y elementos al back
      this.emitterOutputComponente.emit({ bPuntuarRejilla: true });
   }
}