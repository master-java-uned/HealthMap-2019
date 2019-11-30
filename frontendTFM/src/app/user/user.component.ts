import { Component, OnInit } from '@angular/core';
import{TokenService} from '../services/token.service'
import { Router } from '@angular/router';
import{RejillaService} from '../services/rejilla.service'
import { Elementos } from '../models/elementos';
import { LoginUsuario } from '../models/login-usuario';
import{ElementosUsuario} from'../models/elementos-usuario';
import{Constructos} from '../models/constructos';
import { TouchSequence } from 'selenium-webdriver';
import{PreguntasPolos} from '../models/preguntas-polos'
import{PolosConstructos} from '../models/polos-constructos'
import { ConstructosService } from '../services/constructos.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  idUsuario:bigint;
  idRejilla:number;
  mostrarConstructos=false;
  rejillaIniciada=false;
  elementos: any={};
  constructos:Constructos[];
  elementosUsuario:any={};
  usuario:LoginUsuario;
  varAux:number;
  constructosUsuario:any={};
  polosUsuario:Array<PolosConstructos>=[];
  
  parecidos=false;
  diferencias=false;
  preguntas:any={};
  segundaPregunta=false;
  poloDerecho:Array<string> = [];
  poloIzquierdo:Array<string> = [];
  preguntasPolos:any={};
  devuelto:any={};
  pruebapolos:Array<string> = [];
  

  constructor(private tokenService: TokenService,private router: Router,private rejillaService:RejillaService,private constructosService:ConstructosService) { }

  ngOnInit() {
    this.idUsuario=this.tokenService.getUserId();
    if(this.rejillaService.getRejillaId()!=null){
      this.rejillaIniciada=true;
      this.elementos=this.rejillaService.getElementosEvaluacion();
    this.idRejilla=this.rejillaService.getRejillaId();
    console.log(this.idRejilla);
    } 
  }
  
  iniciarRejilla():void{
    this.rejillaService.nuevaRejilla(this.idUsuario).subscribe(data => {
      this.idRejilla=data;
      this.rejillaService.setRejillaId(this.idRejilla);
      this.rejillaIniciada=true;  
    },
      (err: any) => {
       
      }
    );
    this.rejillaService.getElementos().subscribe(data => {
      this.elementos=data;
      console.log(this.elementos);
      this.rejillaService.setElementos(this.elementos);
    },
      (err: any) => {
       
      }
    );
  }
  guardar():void{
      this.elementosUsuario[0]=new ElementosUsuario("Yo actual",null);
      this.elementosUsuario[1]=new ElementosUsuario("Yo dentro de dos años",null); 
      this.elementosUsuario[2]=new ElementosUsuario(this.elementos.nombre3,this.elementos.descripcionUsuario3);
      this.elementosUsuario[3]=new ElementosUsuario(this.elementos.nombre4,this.elementos.descripcionUsuario4);
      this.elementosUsuario[4]=new ElementosUsuario(this.elementos.nombre5,this.elementos.descripcionUsuario5);
      this.elementosUsuario[5]=new ElementosUsuario(this.elementos.nombre6,this.elementos.descripcionUsuario6);
      this.elementosUsuario[6]=new ElementosUsuario(this.elementos.nombre7,this.elementos.descripcionUsuario7); 
      this.elementosUsuario[7]=new ElementosUsuario(this.elementos.nombre8,this.elementos.descripcionUsuario8);
      this.elementosUsuario[8]=new ElementosUsuario(this.elementos.nombre9,this.elementos.descripcionUsuario9);
      this.elementosUsuario[9]=new ElementosUsuario(this.elementos.nombre10,this.elementos.descripcionUsuario10);
      this.elementosUsuario[10]=new ElementosUsuario(this.elementos.nombre11,this.elementos.descripcionUsuario11);
      this.elementosUsuario[11]=new ElementosUsuario("Yo ideal",null);
      
   this.rejillaService.getConstructos().subscribe(data => {
    this.constructos=data;
    this.rejillaService.setConstructos(this.constructos);
    this.mostrarContructos();
  
  },
  (err: any) => {
       
  }
);
  }

    mostrarContructos(){
      for (var i=0; i < 14; i++) {
            for(var u=0;u<12;u++){
               var r="#"+(u+1);
               var re = new RegExp(r);
               this.constructos[i].txtpregunta=this.constructos[i].txtpregunta.replace(re,this.elementosUsuario[u].nombre);
              } 
         }
          //reemplazar los numeros por elementousuario
      this.rejillaIniciada=false;
      this.mostrarConstructos=true;
      this.varAux=0;
      this.parecidos=true;
    }

 
   incrementarVar(){
    
     if(this.segundaPregunta){
      this.polosUsuario[this.varAux]=new PolosConstructos(1,this.idRejilla,this.varAux+1,this.poloIzquierdo[this.varAux],this.poloDerecho[this.varAux]);
      this.varAux++;
      this.segundaPregunta=false; 
      if(this.constructos[this.varAux].tipopregunta==='Parecidos'){
        this.parecidos=true;
        this.diferencias=false; 
      }
      else{
        this.parecidos=false;
        this.diferencias=true;
      }
      //console.log(this.polosUsuario);
     }
     else{
       if(this.parecidos){
        this.preguntasPolos[this.varAux]=new PreguntasPolos("Que es para ti lo opuesto a"+this.poloIzquierdo[this.varAux],null);
      }
      else{
         this.preguntasPolos[this.varAux]=new PreguntasPolos("Nos diferenciamos en que yo soy:","y el/ella es:");
      }
      this.segundaPregunta=true;
    }
   }


   guardarConstructos(){
   
  //  this.pruebapolos[0]="hola";
   // this.pruebapolos[1]="hola";
   
   //this.constructosService.insertConstructos(this.polosUsuario).subscribe(data => {
    this.constructosService.insertConstructos(this.polosUsuario).subscribe(data => {
    this.devuelto=data;
     
  },
    (err: any) => {
     
    }
  );
   }
  

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['login']);
  }

}
