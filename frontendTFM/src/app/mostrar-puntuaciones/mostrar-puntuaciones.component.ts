import { Component, OnInit, Input } from '@angular/core';
import { PuntuacionesService } from '../services/puntuaciones.service'
import { Puntuaciones } from '../models/puntuaciones';
import { Polos } from '../models/polos';
import { Elementosrejilla } from '../models/elementosrejilla';
import { OrdenConstructos } from '../models/orden-constructos';


@Component({
   selector: 'app-mostrar-puntuaciones',
   templateUrl: './mostrar-puntuaciones.component.html',
   styleUrls: ['./mostrar-puntuaciones.component.css']
})
export class MostrarPuntuacionesComponent implements OnInit {
   @Input() idEvaluacion: number;
   @Input() polosInicio: Array<Polos> = [];
   @Input() elementosInicio: Array<Elementosrejilla> = [];
   puntuaciones: number[][] = [[], []];
   // ordenConstructos: Array<number> = [];
   ordenConstructos: Array<OrdenConstructos> = [];
   puntuacionesRejilla: Array<Puntuaciones> = [];
   aux: number = 0;
   bMostrarComponente: boolean = false;



   constructor(private puntuacionesService: PuntuacionesService) {
   }



   ngOnInit() {
      //console.log("YI-LOG - MostrarPuntuacionesComponent-ngOnInit() - 1");
      //console.log("YI-LOGthis.idEvaluacion);
      //console.log("YI-LOGthis.polosInicio);
      //console.log("YI-LOGthis.elementosInicio);
      for (var i: number = 0; i < 14; i++) {
         this.puntuaciones[i] = [];
      }
      //this.ordenConstructos = new Array;
      this.getPuntuaciones();
      //console.log("YI-LOG - MostrarPuntuacionesComponent-ngOnInit() - 2");
   }


   getPuntuaciones() {
      this.puntuacionesService.backend_getPuntuaciones(this.idEvaluacion).subscribe(data => {
         console.log("YI-LOG - MostrarPuntuacionesComponent-getPuntuaciones() - 1");
         console.log(data);
         this.puntuacionesRejilla = data;
         for (let i = 0; i < this.puntuacionesRejilla.length; i++) {
         }
         this.aux = 0;
         for (var i: number = 0; i < 14; i++) {
            for (var j: number = 0; j < 12; j++) {
               this.puntuaciones[i][j] = this.puntuacionesRejilla[this.aux].puntuacion;
               this.aux++;
            }
         }
         console.log(this.puntuaciones);
         this.getOrden(this.idEvaluacion);
         this.bMostrarComponente = true;
         //console.log("YI-LOG - MostrarPuntuacionesComponent-getPuntuaciones() - 2");
      });
   }



   getOrden(idEvaluacion: number) {
      this.puntuacionesService.backend_getOrden(idEvaluacion).subscribe(data => {
         //console.log("YI-LOG - MostrarPuntuacionesComponent-getOrden() - 1");
         //console.log(idEvaluacion);
         //console.log(data);
         this.ordenConstructos = data;
         //console.log("YI-LOG - MostrarPuntuacionesComponent-getOrden() - 2");
      });
   }
}
