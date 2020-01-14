import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
const REJILLA_KEY = 'RejillaNumber';
const ELEMENTOS = 'ElementosEvaluacion';
const CONSTRUCTOS = 'ConstructosEvaluacion';


@Injectable({
   providedIn: 'root'
})
export class RejillaService {
   private authURL = 'http://localhost:8080/api/rejilla/';

   constructor(private httpClient: HttpClient) { }


   public getRejillasUser(idUsuario: bigint): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'getRejillasUser', idUsuario, cabecera);
   }


   public backend_nuevaRejilla(idUsuario: bigint): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'nueva', idUsuario, cabecera);
   }


   public backend_getElementos(): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'getElementos', cabecera);
   }


   public backend_getConstructos(): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'getConstructos', cabecera);
   }


   public sesion_setRejillaId(rejillaId: number): void {
      window.sessionStorage.removeItem(REJILLA_KEY);
      window.sessionStorage.setItem(REJILLA_KEY, JSON.stringify(rejillaId));
   }


   public sesion_getRejillaId(): number {
      return JSON.parse(sessionStorage.getItem(REJILLA_KEY));
   }


   public sesion_setElementos(elementos: any): void {
      window.sessionStorage.removeItem(ELEMENTOS);
      window.sessionStorage.setItem(ELEMENTOS, JSON.stringify(elementos));
   }


   public sesion_getElementosEvaluacion(): any {
      return JSON.parse(sessionStorage.getItem(ELEMENTOS));
   }


   public sesion_setConstructos(constructos: any): void {
      window.sessionStorage.removeItem(CONSTRUCTOS);
      window.sessionStorage.setItem(CONSTRUCTOS, JSON.stringify(constructos));
   }


   public sesion_getConstructosEvaluacion(): any {
      return JSON.parse(sessionStorage.getItem(CONSTRUCTOS));
   }
}