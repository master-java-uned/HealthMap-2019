import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';


@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   form: any = {};
   usuario: LoginUsuario;
   isLogged = false;
   isLoginFail = false;
   roles: string[] = [];


   constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }


   ngOnInit() {
      if (this.tokenService.getToken()) {
         this.isLogged = true;
         this.isLoginFail = false;
         this.roles = this.tokenService.getAuthorities();
         this.router.navigate(['menu']);
      }
   }

   onLogin(): void {
      this.usuario = new LoginUsuario(this.form.nombreUsuario, this.form.password);
      this.authService.login(this.usuario).subscribe(data => {
         this.tokenService.setToken(data.token);
         this.tokenService.setUserName(data.nombreUsuario);
         this.tokenService.setAuthorities(data.authorities);
         this.tokenService.setUserId(data.idUsuario);
         this.isLogged = true;
         this.isLoginFail = false;
         this.roles = this.tokenService.getAuthorities();
         this.router.navigate(['menu']);
      },
         (err: any) => {
            this.isLogged = false;
            this.isLoginFail = true;
         }
      );
   }

}
