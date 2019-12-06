import { Component, OnInit } from '@angular/core';
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


   constructor(private tokenService: TokenService, private router: Router) { }


   ngOnInit() {
      if (!this.tokenService.getToken()) {
         this.router.navigate(['login']);
      }
      else {
         this.roles = [];
         this.roles = this.tokenService.getAuthorities();
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
