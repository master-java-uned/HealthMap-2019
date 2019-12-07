import { Component, OnInit } from '@angular/core';
import { ElementosUsuario } from '../models/elementos-usuario';
import { Polos } from '../models/polos'
import { ConstructosService } from '../services/constructos.service';
import { Puntuaciones } from '../models/puntuaciones';

@Component({
  selector: 'app-puntuar-rejilla',
  templateUrl: './puntuar-rejilla.component.html',
  styleUrls: ['./puntuar-rejilla.component.css']
})
export class PuntuarRejillaComponent implements OnInit {
  elementosUsuario:Array<ElementosUsuario>=[];
  polosUsuario:Array<Polos>=[];
  puntuaciones:number[][]=[[],[]]; 
  ordenConstructos:Array<number>= new Array; 
  puntuacionesFinales:Array<Puntuaciones>=[];
  constructor(private constructosService: ConstructosService) { }

  ngOnInit() {
    for(var i:number=0;i<14;i++){
      this.puntuaciones[i]=[];
    }
    this.elementosUsuario=this.constructosService.getElementosUsuario();
    this.polosUsuario=this.constructosService.getConstructosUsuario();
   console.log(this.polosUsuario);
    console.log(this.elementosUsuario);
  }
  guardarPuntuaciones(){
    console.log(this.puntuaciones);
    
    /*for(var i:number=0;i<14;i++){
      for(var j:number=0;j<14;j++){
      
      this.puntuacionesFinales=
      
      }
    }*/
  }

}
