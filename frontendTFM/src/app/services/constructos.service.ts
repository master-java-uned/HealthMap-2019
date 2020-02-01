import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Polos } from '../models/polos';
import { Elementosrejilla } from '../models/elementosrejilla';


const ELEMENTOSUSUARIO = 'ElementosUsuario';
const CONSTRUCTOSUSUARIO = 'ConstructosUsuario';
const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
   providedIn: 'root'
})
export class ConstructosService {
   private constructosURL = 'http://localhost:8080/api/constructos/';
   constructor(private httpClient: HttpClient) { }


   public backend_insertConstructos(polos: Array<Polos>): Observable<any> {
      return this.httpClient.post<any>(this.constructosURL + 'insertPolos', polos, cabecera);
   }


   public backend_getElementosUser(idRejilla: number): Observable<any> {
      return this.httpClient.post<any>(this.constructosURL + 'getElementosUsuario', idRejilla, cabecera);
   }


   public backend_getPolosUsuario(idRejilla: number): Observable<any> {
      return this.httpClient.post<any>(this.constructosURL + 'getPolos', idRejilla, cabecera);
   }


   public sesion_setElementosUsuario(elementosUsuario: Array<Elementosrejilla>): void {
      window.sessionStorage.removeItem(ELEMENTOSUSUARIO);
      window.sessionStorage.setItem(ELEMENTOSUSUARIO, JSON.stringify(elementosUsuario));
   }


   public sesion_getElementosUsuario(): Array<Elementosrejilla> {
      return JSON.parse(sessionStorage.getItem(ELEMENTOSUSUARIO));
   }


   public sesion_getConstructosUsuario(): Array<Polos> {
      return JSON.parse(sessionStorage.getItem(CONSTRUCTOSUSUARIO));
   }


   public sesion_setConstructosUsuario(constructosUsuario: Array<Polos>): void {
      window.sessionStorage.removeItem(CONSTRUCTOSUSUARIO);
      window.sessionStorage.setItem(CONSTRUCTOSUSUARIO, JSON.stringify(constructosUsuario));
   }
}