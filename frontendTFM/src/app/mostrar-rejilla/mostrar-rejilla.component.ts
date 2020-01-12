import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-mostrar-rejilla',
   templateUrl: './mostrar-rejilla.component.html',
   styleUrls: ['./mostrar-rejilla.component.css']
})
export class MostrarRejillaComponent implements OnInit {
   idEvaluacion:number;
   constructor(idEvaluacion:number) { 
      this.idEvaluacion=idEvaluacion;
   }

   ngOnInit() {
   }
 /*  getEvaluacionesUser(){
      this.rejillas.forEach((rejilla) => { 
         this.puntuacionesService.getEvaluacionesUsuario(rejilla.idrejilla).subscribe(data => {
           if(Object.entries(data).length !== 0){
            this.evaluaciones=data;   
            this.getPuntuaciones();  
           }     
      },
      );     
      })
      
      
   }
   getPuntuaciones(){ 
      this.evaluaciones.forEach((evaluacion) => {    
       this.puntuacionesService.getPuntuaciones(evaluacion.idevaluacion).subscribe(data => {
         this.puntuaciones=data;
         this.getOrden(evaluacion);
    },
    );
          
     
       
         
      })
      

   }
   getOrden(evaluacion:Evaluacion){
      this.puntuacionesService.getOrden(evaluacion.idevaluacion).subscribe(data => {  
       this.orden=data;
       this.resultadoEvaluaciones[this.auxEvaluaciones]=new InformacionEvaluaciones( evaluacion.idevaluacion, evaluacion.idrejilla, evaluacion.comentariopaciente, evaluacion.comentariopsicologo, this.puntuaciones, this.orden);
       
       console.log("resultado evaluaciones"); 
       console.log(this.resultadoEvaluaciones[this.auxEvaluaciones]);
       this.auxEvaluaciones++;
       },)
   }*/
}
