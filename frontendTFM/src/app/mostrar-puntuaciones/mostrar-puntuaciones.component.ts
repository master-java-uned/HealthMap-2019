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
   //Id de la evaluación a mostrar
   @Input() idEvaluacion: number;
   //Polos de la evaluación a mostrar
   @Input() polosInicio: Array<Polos> = [];
   //Elementos de la evaluación a mostrar
   @Input() elementosInicio: Array<Elementosrejilla> = [];
   puntuaciones: number[][] = [[], []];
   ordenConstructos: Array<OrdenConstructos> = [];
   puntuacionesRejilla: Array<Puntuaciones> = [];
   aux: number = 0;
   bMostrarComponente: boolean = false;


   constructor(private puntuacionesService: PuntuacionesService) {
   }


   ngOnInit() {
      for (var i: number = 0; i < 14; i++) {
         this.puntuaciones[i] = [];
      }
      this.getPuntuaciones();
   }


   getPuntuaciones() {
      //Obtenemos las puntuaciones de la evaluación concreta del backend
      this.puntuacionesService.backend_getPuntuaciones(this.idEvaluacion).subscribe(data => {
         this.puntuacionesRejilla = data;
         this.aux = 0;
         //Volcamos las puntuaciones del paciente en las estructuras usadas en el front
         for (var i: number = 0; i < 14; i++) {
            for (var j: number = 0; j < 12; j++) {
               this.puntuaciones[i][j] = this.puntuacionesRejilla[this.aux].puntuacion;
               this.aux++;
            }
         }
         //Obtenemos el orden de los constructos que indicó el paciente
         this.getOrden(this.idEvaluacion);
         this.bMostrarComponente = true;
      });
   }


   getOrden(idEvaluacion: number) {
      //Obtenemos del backend el orden de los constructos que indicó el paciente
      this.puntuacionesService.backend_getOrden(idEvaluacion).subscribe(data => {
         this.ordenConstructos = data;
      });
   }
}