import { Component, OnInit, Input } from '@angular/core';
import { PuntuacionesService } from '../services/puntuaciones.service'
import { Puntuaciones } from '../models/puntuaciones';
import { Polos } from '../models/polos';
import { Elementosrejilla } from '../models/elementosrejilla';

@Component({
   selector: 'app-mostrar-rejilla',
   templateUrl: './mostrar-rejilla.component.html',
   styleUrls: ['./mostrar-rejilla.component.css']
})
export class MostrarRejillaComponent implements OnInit {
   @Input() idEvaluacion: number;
   @Input() polosInicio: Array<Polos> = [];
   @Input() elementosInicio: Array<Elementosrejilla> = [];
   puntuaciones: number[][] = [[], []];
   ordenConstructos: Array<number> = [];
   puntuacionesRejilla: Array<Puntuaciones> = [];
   aux: number = 0;

   constructor( private puntuacionesService: PuntuacionesService) {
   }

   ngOnInit() {
      for (var i: number = 0; i < 14; i++) {
         this.puntuaciones[i] = [];
      }
      this.getPuntuaciones();
   }

   getPuntuaciones() {
      this.puntuacionesService.backend_getPuntuaciones(this.idEvaluacion).subscribe(data => {
         this.puntuacionesRejilla = data;
         for (let i = 0; i < this.puntuacionesRejilla.length; i++) {
         }
         this.aux = 0;
         for (var i: number = 0; i < 3; i++) {
            for (var j: number = 0; j < 12; j++) {
               this.puntuaciones[i][j] = this.puntuacionesRejilla[this.aux].puntuacion;
               this.aux++;
            }
         }
         this.getOrden(this.idEvaluacion);
      },
      );
   }

   getOrden(idEvaluacion: number) {
      this.puntuacionesService.backend_getOrden(idEvaluacion).subscribe(data => {
         this.ordenConstructos = data;
      })
   }

}
