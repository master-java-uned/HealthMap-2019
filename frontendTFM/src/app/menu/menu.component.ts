import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service'

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
