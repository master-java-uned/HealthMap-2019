import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementosUsuario } from '../models/elementos-usuario';
import { TokenService } from '../services/token.service';
import { RejillaService } from '../services/rejilla.service';


@Component({
   selector: 'app-elementos',
   templateUrl: './elementos.component.html',
   styleUrls: ['./elementos.component.css']
})
export class ElementosComponent implements OnInit {
   @Input() bModo_test: boolean;
   @Output() emitterOutputComponente = new EventEmitter();
   elementosUsuario: any = {};
   elementos: any = {};
   idUsuario: bigint;
   idRejilla: number;
   yer_cont_log: number = 0;


   constructor(private tokenService: TokenService, private rejillaService: RejillaService) { }


   ngOnInit() {
      console.log("YERAY-LOG - ElementosComponent-ngOnInit() - " + (++this.yer_cont_log).toString());
      this.idUsuario = this.tokenService.getUserId();
      console.log("IdUsuario " + this.idUsuario);
      //Si no se hace esto da un error raro
      this.elementos = this.rejillaService.getElementosEvaluacion();
      if (this.rejillaService.getRejillaId() != null) {
         this.elementos = this.rejillaService.getElementosEvaluacion();
         this.idRejilla = this.rejillaService.getRejillaId();
         console.log("IdRejilla " + this.idRejilla);
      }
      this.inicializarRejilla();
   }


   inicializarRejilla(): void {
      console.log("YERAY-LOG - ElementosComponent-inicializarRejilla() - " + (++this.yer_cont_log).toString());
      this.rejillaService.getElementos().subscribe(data => {
         this.elementos = data;
         console.log(data);
         this.rellenar_modo_test();
         this.rejillaService.setElementos(this.elementos);
         console.log(this.elementos);
      },
         (err: any) => {
            console.log("YERAY-LOG - error");
         }
      );
   }


   guardar(): void {
      console.log("YERAY-LOG - ElementosComponent-guardar() - " + (++this.yer_cont_log).toString());
      this.elementosUsuario[0] = new ElementosUsuario("Yo actual", null);
      this.elementosUsuario[1] = new ElementosUsuario("Yo dentro de dos años", null);
      this.elementosUsuario[2] = new ElementosUsuario(this.elementos.nombre2, this.elementos.descripcionUsuario2);
      this.elementosUsuario[3] = new ElementosUsuario(this.elementos.nombre3, this.elementos.descripcionUsuario3);
      this.elementosUsuario[4] = new ElementosUsuario(this.elementos.nombre4, this.elementos.descripcionUsuario4);
      this.elementosUsuario[5] = new ElementosUsuario(this.elementos.nombre5, this.elementos.descripcionUsuario5);
      this.elementosUsuario[6] = new ElementosUsuario(this.elementos.nombre6, this.elementos.descripcionUsuario6);
      this.elementosUsuario[7] = new ElementosUsuario(this.elementos.nombre7, this.elementos.descripcionUsuario7);
      this.elementosUsuario[8] = new ElementosUsuario(this.elementos.nombre8, this.elementos.descripcionUsuario8);
      this.elementosUsuario[9] = new ElementosUsuario(this.elementos.nombre9, this.elementos.descripcionUsuario9);
      this.elementosUsuario[10] = new ElementosUsuario(this.elementos.nombre10, this.elementos.descripcionUsuario10);
      this.elementosUsuario[11] = new ElementosUsuario("Yo ideal", null);
      this.emitterOutputComponente.emit({ bMostrarConstructos: true, elementosUsuario: this.elementosUsuario });
   }


   //Para hacer pruebas, usamos este método que rellena todo de forma automática
   rellenar_modo_test(): void {
      if (this.bModo_test) {
         for (var i = 0; i <= 11; i++) {
            this.elementos['nombre' + i] = 'nombre_' + i;
            this.elementos['descripcionUsuario' + i] = 'nombre_' + i;
         }
      }
   }
}