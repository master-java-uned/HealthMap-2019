import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Elementosrejilla } from '../models/elementosrejilla';
import { Polos } from '../models/polos'
import { ConstructosService } from '../services/constructos.service';
import { Puntuaciones } from '../models/puntuaciones';
import { PuntuacionesService } from '../services/puntuaciones.service';
import { RejillaService } from '../services/rejilla.service';
import { OrdenConstructos } from '../models/orden-constructos';
import { Router } from '@angular/router';


@Component({
   selector: 'app-puntuar-rejilla',
   templateUrl: './puntuar-rejilla.component.html',
   styleUrls: ['./puntuar-rejilla.component.css']
})
export class PuntuarRejillaComponent implements OnInit {
   //Indica si estamos ejecutando la aplicación en modo test
   @Input() bModo_test: boolean;
   //SALIDA - Emitter en el que se vuelcan los datos de salida
   @Output() emitterOutputComponente = new EventEmitter();
   elementosUsuario: Array<Elementosrejilla> = [];
   polosUsuario: Array<Polos> = [];
   puntuaciones: number[][] = [[], []];
   ordenConstructos: Array<number> = new Array;
   ordenConstructosFinales: Array<OrdenConstructos> = new Array;
   puntuacionesFinales: Array<Puntuaciones> = new Array;
   idEvaluacion: number;
   idRejilla: number;
   k: number = 0;


   constructor(private constructosService: ConstructosService, private puntuacionesService: PuntuacionesService, private rejillaService: RejillaService, private router: Router) {
   }


   ngOnInit() {
      for (var i: number = 0; i < 14; i++) {
         this.puntuaciones[i] = [];
      }
      this.elementosUsuario = this.constructosService.sesion_getElementosUsuario();
      this.polosUsuario = this.constructosService.sesion_getConstructosUsuario();
      //Si estamos en modo test puntuamos de forma automática la rejilla
      if (this.bModo_test) {
         for (var i: number = 0; i < 14; i++) {
            this.ordenConstructos[i] = i;
            for (var j: number = 0; j < 12; j++) {
               // this.puntuaciones[i][j] = j;
               this.puntuaciones[i][j] = Math.floor(Math.random() * (7 - 1 + 1)) + 1;;
            }
         }
      }
   }


   guardarPuntuaciones(): void {
      this.idRejilla = this.rejillaService.sesion_getRejillaId();
      //Guardamos en el backend la nueva evaluación hecha
      this.puntuacionesService.backend_insertEvaluacion(this.idRejilla).subscribe(data => {
         this.idEvaluacion = data
         for (var i: number = 0; i < 14; i++) {
            this.ordenConstructosFinales[i] = new OrdenConstructos(0, this.idEvaluacion, i + 1, this.ordenConstructos[i]);
            for (var j: number = 0; j < 12; j++) {
               this.puntuacionesFinales[this.k] = new Puntuaciones(this.idEvaluacion, i + 1, j + 1, this.puntuaciones[i][j]);
               this.k++;
            }
         }
         //Guardamos en el backend las puntuaciones de la nueva evaluación hecha
         this.insertPuntuaciones();
         this.emitterOutputComponente.emit({ bComponenteTerminado: true });
      });
   }


   insertPuntuaciones(): void {
      //Guardamos en el backend las puntuaciones de la nueva evaluación hecha
      this.puntuacionesService.backend_insertPuntuaciones(this.puntuacionesFinales).subscribe(data => {
         this.idEvaluacion = data;
         //Guardamos en el backend el orden establecido por el paciente de la nueva evaluación hecha
         this.insertOrdenConstructos();
      });
   }


   insertOrdenConstructos(): void {
      //Guardamos en el backend el orden establecido por el paciente de la nueva evaluación hecha
      this.puntuacionesService.backend_insertOrdenConstructos(this.ordenConstructosFinales).subscribe(data => {
         this.idEvaluacion = data;
      });
   }
}