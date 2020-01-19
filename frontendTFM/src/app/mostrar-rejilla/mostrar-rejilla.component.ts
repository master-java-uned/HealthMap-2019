import { Component, OnInit, Input } from '@angular/core';
import{PuntuacionesService} from '../services/puntuaciones.service'
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { Puntuaciones } from '../models/puntuaciones';
import { Polos } from '../models/polos';
import { ElementosUsuario } from '../models/elementos-usuario';
import { OrdenConstructos } from '../models/orden-constructos';
@Component({
   selector: 'app-mostrar-rejilla',
   templateUrl: './mostrar-rejilla.component.html',
   styleUrls: ['./mostrar-rejilla.component.css']
})
export class MostrarRejillaComponent implements OnInit {
  @Input() idEvaluacion:number;
  @Input() polosInicio: Array<Polos> = [];
   @Input() elementosInicio: Array<ElementosUsuario> = [];
   puntuaciones: number[][] = [[], []];
  ordenConstructos: Array<number> = [];
  puntuacionesRejilla: Array<Puntuaciones> = [];
  aux:number=0;
   constructor(private tokenService: TokenService, private router: Router, private puntuacionesService: PuntuacionesService) { 
     
   }

   ngOnInit() {
      console.log("evaluacion");
      console.log(this.idEvaluacion);
      console.log(this.polosInicio);
      console.log(this.elementosInicio);
      for (var i: number = 0; i < 14; i++) {
         this.puntuaciones[i] = [];
       }
      this.getPuntuaciones();
   }
 
   getPuntuaciones(){ 
       this.puntuacionesService.backend_getPuntuaciones(this.idEvaluacion).subscribe(data => {
         this.puntuacionesRejilla=data;
        console.log(this.puntuacionesRejilla);
         for(let i=0;i<this.puntuacionesRejilla.length;i++){
            console.log(this.puntuacionesRejilla[i]);
         }
          this.aux=0;
         
          for(var i: number = 0; i < 3; i++){
            for(var j: number = 0; j < 12; j++){
             this.puntuaciones[i][j]=this.puntuacionesRejilla[this.aux].puntuacion;
            this.aux++;
         }}
         console.log(this.puntuaciones);
         this.getOrden(this.idEvaluacion);
    },
    );    
      }
 
   getOrden(idEvaluacion:number){
      this.puntuacionesService.backend_getOrden(idEvaluacion).subscribe(data => {  
       this.ordenConstructos=data;
       console.log(this.ordenConstructos);
      
       },)
   }
  
}
