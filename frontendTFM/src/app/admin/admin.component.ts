import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service'
import { Router } from '@angular/router';


@Component({
   selector: 'app-admin',
   templateUrl: './admin.component.html',
   styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   constructor(private tokenService: TokenService, private router: Router) { }


   ngOnInit() { }


   logOut(): void {
      this.tokenService.sesion_logOut();
      this.router.navigate(['login']);
   }
}