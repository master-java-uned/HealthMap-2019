import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementosUsuario } from '../models/elementos-usuario';
import { UsuarioDatos } from '../models/usuario-datos';
import { TokenService } from '../services/token.service';
import { RejillaService } from '../services/rejilla.service';


@Component({
   selector: 'app-elementos',
   templateUrl: './elementos.component.html',
   styleUrls: ['./elementos.component.css']
})
export class ElementosComponent implements OnInit {
   @Input() bModo_test: boolean;
   @Input() usuarioDatos: UsuarioDatos;
   @Output() emitterOutputComponente = new EventEmitter();
   yer_cont_log: number = 0;


   constructor(private tokenService: TokenService, private rejillaService: RejillaService) { }


   ngOnInit() {
      console.log("YERAY-LOG - ElementosComponent-ngOnInit() - " + (++this.yer_cont_log).toString());
      //Si no se hace esto da un error raro
      this.usuarioDatos.rejilla.elementos = this.rejillaService.sesion_getElementosEvaluacion();
      this.inicializarRejilla();
   }


   inicializarRejilla(): void {
      console.log("YERAY-LOG - ElementosComponent-inicializarRejilla() - " + (++this.yer_cont_log).toString());
      this.rejillaService.backend_getElementos().subscribe(data => {
         this.usuarioDatos.rejilla.elementos = data;
         console.log(data);
         this.rellenar_modo_test();
         this.rejillaService.sesion_setElementos(this.usuarioDatos.rejilla.elementos);
         console.log(this.usuarioDatos.rejilla.elementos);
      },
         (err: any) => {
            console.log("YERAY-LOG - error");
         }
      );
   }


   guardar(): void {
      console.log("YERAY-LOG - ElementosComponent-guardar() - " + (++this.yer_cont_log).toString());
      this.usuarioDatos.rejilla.elementosUsuario[0] = new ElementosUsuario("Yo actual", null);
      this.usuarioDatos.rejilla.elementosUsuario[1] = new ElementosUsuario("Yo dentro de dos años", null);
      this.usuarioDatos.rejilla.elementosUsuario[2] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre2, this.usuarioDatos.rejilla.elementos.descripcionUsuario2);
      this.usuarioDatos.rejilla.elementosUsuario[3] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre3, this.usuarioDatos.rejilla.elementos.descripcionUsuario3);
      this.usuarioDatos.rejilla.elementosUsuario[4] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre4, this.usuarioDatos.rejilla.elementos.descripcionUsuario4);
      this.usuarioDatos.rejilla.elementosUsuario[5] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre5, this.usuarioDatos.rejilla.elementos.descripcionUsuario5);
      this.usuarioDatos.rejilla.elementosUsuario[6] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre6, this.usuarioDatos.rejilla.elementos.descripcionUsuario6);
      this.usuarioDatos.rejilla.elementosUsuario[7] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre7, this.usuarioDatos.rejilla.elementos.descripcionUsuario7);
      this.usuarioDatos.rejilla.elementosUsuario[8] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre8, this.usuarioDatos.rejilla.elementos.descripcionUsuario8);
      this.usuarioDatos.rejilla.elementosUsuario[9] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre9, this.usuarioDatos.rejilla.elementos.descripcionUsuario9);
      this.usuarioDatos.rejilla.elementosUsuario[10] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre10, this.usuarioDatos.rejilla.elementos.descripcionUsuario10);
      this.usuarioDatos.rejilla.elementosUsuario[11] = new ElementosUsuario("Yo ideal", null);
      this.emitterOutputComponente.emit({ bMostrarConstructos: true, elementosUsuario: this.usuarioDatos.rejilla.elementosUsuario });
   }


   //Para hacer pruebas, usamos este método que rellena todo de forma automática
   rellenar_modo_test(): void {
      if (this.bModo_test) {
         for (var i = 0; i <= 11; i++) {
            this.usuarioDatos.rejilla.elementos['nombre' + i] = 'nombre_' + i;
            this.usuarioDatos.rejilla.elementos['descripcionUsuario' + i] = 'nombre_' + i;
         }
      }
   }
}