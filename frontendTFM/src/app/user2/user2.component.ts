import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { Constructos } from '../models/constructos';
import { TokenService } from '../services/token.service';
import { RejillaService } from '../services/rejilla.service';
import { ConstructosService } from '../services/constructos.service';


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


   constructor(private tokenService: TokenService, private router: Router, private rejillaService: RejillaService, private constructosService: ConstructosService) { }


   ngOnInit() {
      console.log("YERAY-LOG - User2Component-ngOnInit() - " + (++this.yer_cont_log).toString());
      this.idUsuario = this.tokenService.getUserId();
      if (this.rejillaService.getRejillaId() != null) {
         this.bMostrarElementos = true;
         this.elementos = this.rejillaService.getElementosEvaluacion();
         this.idRejilla = this.rejillaService.getRejillaId();
         console.log(this.idRejilla);
      }
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
}