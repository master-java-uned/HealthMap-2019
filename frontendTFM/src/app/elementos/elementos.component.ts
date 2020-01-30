import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Elementosrejilla } from '../models/elementosrejilla';
import { UsuarioDatos } from '../models/usuario-datos';
import { Elementos } from '../models/elementos';
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
   @ViewChild('boton', { static: false }) boton: ElementRef;
   yer_cont_log: number = 0;
   //elementosUsuario_temp: ElementosUsuario[] = new Array(null, null, null);

   constructor(private tokenService: TokenService, private rejillaService: RejillaService) { }


   ngOnInit() {
      ////console.log("YI-LOG - ElementosComponent-ngOnInit() - " + (++this.yer_cont_log).toString());
      //console.log("YI-LOGthis.usuarioDatos.rejilla.elementos);
      this.inicializarRejilla();
   }

   inicializarRejilla(): void {
      ////console.log("YI-LOG - ElementosComponent-inicializarRejilla() - " + (++this.yer_cont_log).toString());
      this.rejillaService.backend_getElementos().subscribe(data => {
         this.usuarioDatos.rejilla.elementos = data;
         //console.log("YI-LOGthis.usuarioDatos.rejilla.elementos);
         this.rellenar_modo_test();
         this.rejillaService.sesion_setElementos(this.usuarioDatos.rejilla.elementos);
      },
      );
   }


   guardar(): void {
      //console.log("YI-LOG - ElementosComponent-guardar() - " + (++this.yer_cont_log).toString());
      //console.log("YI-LOGthis.usuarioDatos.rejilla.elementos);
      var aux: Elementos = this.usuarioDatos.rejilla.elementos[0];
      for (var i = 0; i <= 11; i++) {
         this.usuarioDatos.rejilla.elementosrejilla[i].idelemento = this.usuarioDatos.rejilla.elementos[i].idelemento;
         this.usuarioDatos.rejilla.elementosrejilla[i].idrejilla = this.usuarioDatos.rejilla.idrejilla;

         //Tratamos los casos especiales: "Yo actual", "Yo dentro de dos años" y "Yo ideal"
         if (this.usuarioDatos.rejilla.elementos[i].descripcion in new Array("Yo actual", "Yo dentro de dos años", "Yo ideal")) {
            this.usuarioDatos.rejilla.elementosrejilla[i].nombreelemento = this.usuarioDatos.rejilla.elementos[i].descripcion;
            this.usuarioDatos.rejilla.elementosrejilla[i].rolelemento = null;
         }
      }
      //console.log("YI-LOGthis.usuarioDatos.rejilla.elementosrejilla);

      //ykk
      //YKK esto hay que cambiarlo porque está mal, se está liando entre elementos y elementosrejillas. elementosrejillas tiene que tener el id.
      //    Lo que ella llama this.usuarioDatos.rejilla.elementos.descripcionUsuario2 es en realidad el campo RolElemento de la tabla elementosrejillas
      //    Aqui ya tiene que venir el campo IdRejilla de la elementosrejillas rellenado. El campo "Yo actual" se coge de la tabla elementos (campo descripcion)
      //YKK UsuarioRejilla tiene que usar tipos de datos que no sean Any
      //console.log("YI-LOGthis.usuarioDatos.rejilla.elementos);
      //console.log("YI-LOGthis.usuarioDatos.rejilla.elementos[0].id);
      // this.usuarioDatos.rejilla.elementosUsuario[0] = new ElementosUsuario("Yo actual", null, this.usuarioDatos.rejilla.elementos.id[0]);
      // this.usuarioDatos.rejilla.elementosUsuario[1] = new ElementosUsuario("Yo dentro de dos años", null, this.usuarioDatos.rejilla.elementos.id[1]);
      // this.usuarioDatos.rejilla.elementosUsuario[2] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre2, this.usuarioDatos.rejilla.elementos.descripcionUsuario2, this.usuarioDatos.rejilla.elementos.id[2]);
      // this.usuarioDatos.rejilla.elementosUsuario[3] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre3, this.usuarioDatos.rejilla.elementos.descripcionUsuario3, this.usuarioDatos.rejilla.elementos.id[3]);
      // this.usuarioDatos.rejilla.elementosUsuario[4] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre4, this.usuarioDatos.rejilla.elementos.descripcionUsuario4, this.usuarioDatos.rejilla.elementos.id[4]);
      // this.usuarioDatos.rejilla.elementosUsuario[5] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre5, this.usuarioDatos.rejilla.elementos.descripcionUsuario5, this.usuarioDatos.rejilla.elementos.id[5]);
      // this.usuarioDatos.rejilla.elementosUsuario[6] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre6, this.usuarioDatos.rejilla.elementos.descripcionUsuario6, this.usuarioDatos.rejilla.elementos.id[6]);
      // this.usuarioDatos.rejilla.elementosUsuario[7] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre7, this.usuarioDatos.rejilla.elementos.descripcionUsuario7, this.usuarioDatos.rejilla.elementos.id[7]);
      // this.usuarioDatos.rejilla.elementosUsuario[8] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre8, this.usuarioDatos.rejilla.elementos.descripcionUsuario8, this.usuarioDatos.rejilla.elementos.id[8]);
      // this.usuarioDatos.rejilla.elementosUsuario[9] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre9, this.usuarioDatos.rejilla.elementos.descripcionUsuario9, this.usuarioDatos.rejilla.elementos.id[9]);
      // this.usuarioDatos.rejilla.elementosUsuario[10] = new ElementosUsuario(this.usuarioDatos.rejilla.elementos.nombre10, this.usuarioDatos.rejilla.elementos.descripcionUsuario10, this.usuarioDatos.rejilla.elementos.id[10]);
      // this.usuarioDatos.rejilla.elementosUsuario[11] = new ElementosUsuario("Yo ideal", null, this.usuarioDatos.rejilla.elementos.id[11]);


      this.emitterOutputComponente.emit({ bMostrarConstructos: true, elementosUsuario: this.usuarioDatos.rejilla.elementosrejilla });
   }


   //Para hacer pruebas, usamos este método que rellena todo de forma automática
   rellenar_modo_test(): void {
      //console.log("YI-LOG - ElementosComponent-rellenar_modo_test() - " + (++this.yer_cont_log).toString());
      //Si no se hace esto da un error de inicialización del objeto
      this.usuarioDatos.rejilla.elementosrejilla = new Array;
      if (this.bModo_test) {
         for (var i = 0; i <= 11; i++) {
            // this.usuarioDatos.rejilla.elementos['nombre' + i] = 'nombre_' + i;
            // this.usuarioDatos.rejilla.elementos['descripcionUsuario' + i] = 'desc_' + i;

            // this.usuarioDatos.rejilla.elementosUsuario[i].nombreElemento = 'nombre_' + i;
            // this.usuarioDatos.rejilla.elementosUsuario[i].rolElemento = 'rol_desc_' + i;

            this.usuarioDatos.rejilla.elementosrejilla[i] = new Elementosrejilla(i, this.usuarioDatos.rejilla.idrejilla, 'nombre_' + i, 'rol_desc_' + i);
         }
      }
      //console.log("YI-LOGthis.usuarioDatos.rejilla.elementosrejilla);
   }
}