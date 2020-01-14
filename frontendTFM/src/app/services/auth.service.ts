import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';
import { JwtModel } from '../models/jwt-model';


const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };


@Injectable({
   providedIn: 'root'
})
export class AuthService {
   private authURL = 'http://localhost:8080/api/auth/';


   constructor(private httpClient: HttpClient) { }


   public backend_login(usuario: LoginUsuario): Observable<JwtModel> {
      return this.httpClient.post<JwtModel>(this.authURL + 'login', usuario, cabecera);
   }
}