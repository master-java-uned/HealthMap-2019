import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { Constructos } from '../models/constructos';
import { TokenService } from '../services/token.service';
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';
import{Polos} from '../models/polos'
import{ElementosService} from '../services/elementos.service'
import{InformacionRejilla}from '../models/informacion-rejilla'
import { ElementosUsuario } from '../models/elementos-usuario';
import { PuntuacionesService } from '../services/puntuaciones.service';
import { Evaluacion } from '../models/evaluacion';
import { Rejilla } from '../models/rejilla';
import{MostrarRejillaComponent}from '../mostrar-rejilla/mostrar-rejilla.component'



 
 
@Component({
   selector: 'app-user2',
   templateUrl: './user2.component.html',
   styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
   idUsuario: bigint;
   idRejilla: number;
   bMostrarConstructos = false;
   bMostrarElementos = false;
   elementos: any = {};
   constructos: Constructos[];
   elementosUsuario: any = {};
   usuario: LoginUsuario;
   varAux: number;
   constructosUsuario: any = {};
   parecidos = false;
   preguntas: any = {};
   devuelto: any = {};
   bPuntuarRejilla = false;
   yer_cont_log: number = 0;
   modo_test: boolean = true;
   
   rejillas: Array<Rejilla> = [];
  
   polosInicio:Array<Polos>=[];
   elementosInicio:Array<ElementosUsuario>=[];
   evaluaciones:Array<Evaluacion>=[];
   resultadoRejillas:Array<InformacionRejilla>=[];
   puntuaciones:any={};
   orden:any={};
   aux:number;
   auxEvaluaciones:number=0;
   isShow:Array<boolean>;
   rejillaCompleta: MostrarRejillaComponent;
   mostrarEvaluacion:boolean=false;
  
  

   constructor(private tokenService: TokenService, private router: Router, private rejillaService: RejillaService, private constructosService: ConstructosService,private elementosService:ElementosService,private puntuacionesService:PuntuacionesService) { 
   }

   ngOnInit() {
      console.log("YERAY-LOG - User2Component-ngOnInit() - " + (++this.yer_cont_log).toString());
   
      this.idUsuario = this.tokenService.getUserId();
      this.getRejillasUser();
      
      if (this.rejillaService.getRejillaId() != null) {
         this.bMostrarElementos = true;
         this.elementos = this.rejillaService.getElementosEvaluacion();
         this.idRejilla = this.rejillaService.getRejillaId();
         console.log(this.idRejilla);
      }
      console.log(this.resultadoRejillas);
      

   }
  
   toggleDisplay(idrejilla:number) {
      this.resultadoRejillas.forEach((resultado) => { 
         if(resultado.idrejilla==idrejilla){
            resultado.isShow=!resultado.isShow;
         }
       })
    }
    showElementos(idrejilla:number) {
      this.resultadoRejillas.forEach((resultado) => { 
         if(resultado.idrejilla==idrejilla){
            resultado.isShowElementos=!resultado.isShowElementos;
         }
       })
    }
    showConstructos(idrejilla:number) {
      this.resultadoRejillas.forEach((resultado) => { 
         if(resultado.idrejilla==idrejilla){
            resultado.isShowConstructos=!resultado.isShowConstructos;
         }
       })
    }

   iniciarRejilla(): void {
      this.bMostrarElementos = true;
      console.log("YERAY-LOG - User2Component-iniciarRejilla() - " + (++this.yer_cont_log).toString());
   }


   logOut(): void {
      this.tokenService.logOut();
      this.router.navigate(['login']);
   }


   //Para hacer pruebas, usamos este método que rellena todo de forma automática
   rellenar_modo_test(): void {
      if (this.modo_test) {
         for (var i = 3; i <= 11; i++) {
            this.elementos['nombre' + i] = 'nombre_' + i;
            this.elementos['descripcionUsuario' + i] = 'nombre_' + i;
         }
      }
   }


   obtenerSalidaElementosComponent(event): void {
      console.log("YERAY-LOG - User2Component-obtenerSalidaElementosComponent() - " + (++this.yer_cont_log).toString() + " - " + event.bMostrarConstructos);
      console.log(event.elementosUsuario);
      this.elementosUsuario = event.elementosUsuario;
      this.bMostrarConstructos = event.bMostrarConstructos;
      if (this.bMostrarConstructos) {
         this.bMostrarElementos = false;
      }
   }


   obtenerSalidaConstructosComponent(event): void {
      console.log("YERAY-LOG - User2Component-obtenerSalidaConstructosComponent() - " + (++this.yer_cont_log).toString() + " - " + event.bPuntuarRejilla);
      this.bPuntuarRejilla = event.bPuntuarRejilla;
      if (this.bPuntuarRejilla) {
         this.bMostrarConstructos = false;
      }
   }
   getRejillasUser(){
      this.aux=0;
      this.rejillaService.getRejillasUser(this.idUsuario).subscribe(data => {
         this.rejillas = data; 
         this.getInformacion();
      }, );    
   }
   getInformacion(){
      this.rejillas.forEach((rejilla) => { 
         this.getPolosUsuario(rejilla);
       })
       this.rejillas.forEach((rejilla) => { 
          this.getElementos(rejilla.idrejilla);
        })
   }
   
   getPolosUsuario(rejilla:Rejilla){
      this.puntuacionesService.getEvaluacionesUsuario(rejilla.idrejilla).subscribe(data => {
         if(Object.entries(data).length !== 0){
          this.evaluaciones=data;    
         } 
         else{
            this.evaluaciones=null;
         }    
    },
    );   
      this.constructosService.getPolosUsuario(rejilla.idrejilla).subscribe(data => {
            this.polosInicio=data;  
            console.log(this.polosInicio);
            this.resultadoRejillas[this.aux]=new InformacionRejilla(true,null,rejilla.idrejilla,rejilla.idpaciente,rejilla.fechahora,rejilla.fechahorafin,rejilla.comentariopaciente,rejilla.comentariopsicologo,null,this.polosInicio,this.evaluaciones,true,true); 
            this.aux++;
         },);
   }
   getElementos(idrejilla:number){
      this.elementosService.getElementosByIdRejilla(idrejilla).subscribe(data => {
         this.resultadoRejillas.forEach(resultado=>{
            if(resultado.idrejilla===idrejilla){
               resultado.elementos=data;        
           }
         } )
   },
   );
      
   }
   getEvaluacionesUser(){
      this.rejillas.forEach((rejilla) => { 
         this.puntuacionesService.getEvaluacionesUsuario(rejilla.idrejilla).subscribe(data => {
           if(Object.entries(data).length !== 0){
            this.evaluaciones=data;   
           }     
      },
      );     
      })
      
      
   }

   showRejillaCompleta(idEvaluacion:number){
     this.mostrarEvaluacion=!this.mostrarEvaluacion;
      this.rejillaCompleta=new MostrarRejillaComponent(idEvaluacion);
   }
    
  
}