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
      if (this.tokenService.sesion_getToken()) {
         this.isLogged = true;
         this.isLoginFail = false;
         this.roles = this.tokenService.sesion_getAuthorities();
         this.router.navigate(['menu']);
      }
   }


   onLogin(): void {
      this.usuario = new LoginUsuario(this.form.nombreUsuario, this.form.password);
      this.authService.backend_login(this.usuario).subscribe(data => {
         //Al loguearnos limpiamos las variables de sesión para asegurarnos que no se queda basura en memoria
         window.sessionStorage.clear()
         this.tokenService.sesion_setToken(data.token);
         this.tokenService.sesion_setUserName(data.nombreUsuario);
         this.tokenService.sesion_setAuthorities(data.authorities);
         this.tokenService.sesion_setUserId(data.idUsuario);
         this.isLogged = true;
         this.isLoginFail = false;
         this.roles = this.tokenService.sesion_getAuthorities();
         this.router.navigate(['menu']);
      },
         (err: any) => {
            this.isLogged = false;
            this.isLoginFail = true;
         }
      );
   }
}