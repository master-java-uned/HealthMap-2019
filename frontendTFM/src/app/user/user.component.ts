import { Component, OnInit } from '@angular/core';
import{TokenService} from '../services/token.service'
import { Router } from '@angular/router';
import{RejillaService} from '../services/rejilla.service'
import { Elementos } from '../models/elementos';
import { LoginUsuario } from '../models/login-usuario';
import{ElementosUsuario} from'../models/elementos-usuario';
import{Constructos} from '../models/constructos';
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
  newConstructos:any={};
  elementosUsuario:any={};
  usuario:LoginUsuario;
  constructor(private tokenService: TokenService,private router: Router,private rejillaService:RejillaService) { }

  ngOnInit() {
    this.idUsuario=this.tokenService.getUserId();
    if(this.rejillaService.getRejillaId()!=null){
      this.rejillaIniciada=true;
      this.elementos=this.rejillaService.getElementosEvaluacion();
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
      this.elementosUsuario[0]=new ElementosUsuario(this.elementos.nombre1,this.elementos.descripcionUsuario1);
      this.elementosUsuario[1]=new ElementosUsuario(this.elementos.nombre2,this.elementos.descripcionUsuario2); 
      this.elementosUsuario[2]=new ElementosUsuario(this.elementos.nombre3,this.elementos.descripcionUsuario3);
      this.elementosUsuario[3]=new ElementosUsuario(this.elementos.nombre4,this.elementos.descripcionUsuario4);
      this.elementosUsuario[4]=new ElementosUsuario(this.elementos.nombre5,this.elementos.descripcionUsuario5);
      this.elementosUsuario[5]=new ElementosUsuario(this.elementos.nombre6,this.elementos.descripcionUsuario6);
      this.elementosUsuario[6]=new ElementosUsuario(this.elementos.nombre7,this.elementos.descripcionUsuario7); 
      this.elementosUsuario[7]=new ElementosUsuario(this.elementos.nombre8,this.elementos.descripcionUsuario8);
      this.elementosUsuario[8]=new ElementosUsuario(this.elementos.nombre9,this.elementos.descripcionUsuario9);
      this.elementosUsuario[9]=new ElementosUsuario(this.elementos.nombre10,this.elementos.descripcionUsuario10);
      this.elementosUsuario[10]=new ElementosUsuario(this.elementos.nombre11,this.elementos.descripcionUsuario11);
      this.elementosUsuario[11]=new ElementosUsuario(this.elementos.nombre12,this.elementos.descripcionUsuario12);
      
   this.rejillaService.getConstructos().subscribe(data => {
    this.constructos=data;
    this.rejillaService.setConstructos(this.constructos);
    this.mostrarContructos();
  },
  (err: any) => {
       
  }
);
  }

  mostrarContructos() {
    this.rejillaIniciada = false;
    this.mostrarConstructos = true;
    for (var i=0; i < 14; i++) {
        //reemplazar los numeros por elementousuario           
    }
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['login']);
  }

}
