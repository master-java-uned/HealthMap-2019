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
   //Indica si estamos ejecutando la aplicación en modo test
   @Input() bModo_test: boolean;
   //Objeto del usuario de la rejilla con todos sus campos
   @Input() usuarioRejilla: UsuarioRejilla;
   //SALIDA - Emitter en el que se vuelcan los datos de salida
   @Output() emitterOutputComponente = new EventEmitter();
   bConstructosIniciados = false;


   constructor(private rejillaService: RejillaService, private constructosService: ConstructosService) {
   }


   ngOnInit() {
      //Obtenemos las definiciones de los constructos de la BD
      this.rejillaService.backend_getConstructos().subscribe(data => {
         this.usuarioRejilla.constructos = data;
         this.rejillaService.sesion_setConstructos(this.usuarioRejilla.constructos);
         //Ajustamos los constructos y sus preguntas asociadas
         this.inicializarContructos();
         this.bConstructosIniciados = true;
      });
   }


   inicializarContructos() {
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
         //Si estamos en modo test -> Rellenamos los campos para hacer pruebas rápidas
         if (this.bModo_test) {
            this.usuarioRejilla.poloIzquierdo[i] = 'val_test_poloIzq_' + i;
            this.usuarioRejilla.poloDerecho[i] = 'val_test_poloDer_' + i;
         }
         this.usuarioRejilla.polos[i] = new Polos(this.usuarioRejilla.idrejilla, i + 1, this.usuarioRejilla.poloIzquierdo[i], this.usuarioRejilla.poloDerecho[i]);
      }
   }


   guardarConstructos() {
      this.constructosService.sesion_setConstructosUsuario(this.usuarioRejilla.polos);
      this.constructosService.sesion_setElementosUsuario(this.usuarioRejilla.elementosrejilla);
      this.emitterOutputComponente.emit({ bPuntuarRejilla: true });
   }
}