import { Component, OnInit } from '@angular/core';
import{TokenService} from '../services/token.service'
import { Router } from '@angular/router';
import{RejillaService} from '../services/rejilla.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  idUsuario:bigint;
  idRejilla:number;
  rejillaIniciada=false;
  elementos: any = {};
  constructor(private tokenService: TokenService,private router: Router,private rejillaService:RejillaService) { }

  ngOnInit() {
    this.idUsuario=this.tokenService.getUserId();
    if(this.rejillaService.getRejillaId!=null){
      this.rejillaIniciada=true;
    }
    this.elementos=this.rejillaService.getElementosEvaluacion();
    console.log(this.elementos);
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

  logOut(): void {
  this.tokenService.logOut();
  this.router.navigate(['login']);
}

}
