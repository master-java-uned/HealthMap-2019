import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Elementosrejilla } from '../models/elementosrejilla';
import { UsuarioDatos } from '../models/usuario-datos';
import { TokenService } from '../services/token.service';
import { RejillaService } from '../services/rejilla.service';


@Component({
   selector: 'app-elementos',
   templateUrl: './elementos.component.html',
   styleUrls: ['./elementos.component.css']
})
export class ElementosComponent implements OnInit {
   //Indica si estamos ejecutando la aplicación en modo test
   @Input() bModo_test: boolean;
   //Objeto del usuario con todos sus campos
   @Input() usuarioDatos: UsuarioDatos;
   //SALIDA - Emitter en el que se vuelcan los datos de salida
   @Output() emitterOutputComponente = new EventEmitter();


   constructor(private tokenService: TokenService, private rejillaService: RejillaService) { }


   ngOnInit() {
      this.inicializarRejilla();
   }

   inicializarRejilla(): void {
      //Obtenemos los elementos base de la BD
      this.rejillaService.backend_getElementos().subscribe(data => {
         this.usuarioDatos.rejilla.elementos = data;
         //Si estamos en modo test rellenamos los datos de los elementos de forma automática
         this.rellenar_modo_test();
         this.rejillaService.sesion_setElementos(this.usuarioDatos.rejilla.elementos);
      });
   }


   guardar(): void {
      //Montamos la estructura de salida
      for (var i = 0; i <= 11; i++) {
         this.usuarioDatos.rejilla.elementosrejilla[i].idelemento = this.usuarioDatos.rejilla.elementos[i].idelemento;
         this.usuarioDatos.rejilla.elementosrejilla[i].idrejilla = this.usuarioDatos.rejilla.idrejilla;
         //Tratamos los casos especiales: "Yo actual", "Yo dentro de dos años" y "Yo ideal"
         if (this.usuarioDatos.rejilla.elementos[i].descripcion in new Array("Yo actual", "Yo dentro de dos años", "Yo ideal")) {
            this.usuarioDatos.rejilla.elementosrejilla[i].nombreelemento = this.usuarioDatos.rejilla.elementos[i].descripcion;
            this.usuarioDatos.rejilla.elementosrejilla[i].rolelemento = null;
         }
      }
      this.emitterOutputComponente.emit({ bMostrarConstructos: true, elementosUsuario: this.usuarioDatos.rejilla.elementosrejilla });
   }


   //Para hacer pruebas, usamos este método que rellena todo de forma automática
   rellenar_modo_test(): void {
      //Si no se hace esto da un error de inicialización del objeto
      this.usuarioDatos.rejilla.elementosrejilla = new Array;
      if (this.bModo_test) {
         for (var i = 0; i <= 11; i++) {
            this.usuarioDatos.rejilla.elementosrejilla[i] = new Elementosrejilla(i, this.usuarioDatos.rejilla.idrejilla, 'nombre_' + i, 'rol_desc_' + i);
         }
      }
   }
}