import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service'
import { Rejilla } from '../models/rejilla';
import { RejillaService } from '../services/rejilla.service'
import { ConstructosService } from '../services/constructos.service'
import { Polos } from '../models/polos'
import { ElementosService } from '../services/elementos.service'
import { InformacionRejilla } from '../models/informacion-rejilla'
import { ElementosUsuario } from '../models/elementos-usuario';
import { PuntuacionesService } from '../services/puntuaciones.service';
import { Evaluacion } from '../models/evaluacion';
import { InformacionEvaluaciones } from '../models/informacion-evaluaciones';
import { Puntuaciones } from '../models/puntuaciones';
import { OrdenConstructos } from '../models/orden-constructos';
import { InformacionInicioService } from '../services/informacion-inicio.service';


@Component({
   selector: 'app-menu',
   templateUrl: './menu.component.html',
   styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   info: any = {};
   roles: string[];
   authority: string;
   idUsuario: bigint;


   constructor(private tokenService: TokenService, private router: Router) { }


   ngOnInit() {
      if (!this.tokenService.sesion_getToken()) {
         this.router.navigate(['login']);
      }
      else {
         this.roles = [];
         this.roles = this.tokenService.sesion_getAuthorities();
         this.idUsuario = this.tokenService.sesion_getUserId();
         this.roles.every(rol => {
            if (rol === 'ROLE_ADMIN') {
               this.authority = 'admin';
               return false;
            }
            this.authority = 'user';
            return true;
         });
      }
   }
}
