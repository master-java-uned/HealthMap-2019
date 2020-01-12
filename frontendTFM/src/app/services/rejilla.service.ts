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

   public getRejillasUser(idUsuario:bigint):Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'getRejillasUser', idUsuario, cabecera);
   }

   public nuevaRejilla(idUsuario: bigint): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'nueva', idUsuario, cabecera);
   }

   public getElementos(): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'getElementos', cabecera);
   }

   public getConstructos(): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'getConstructos', cabecera);
   }


   public setRejillaId(rejillaId: number): void {
      window.sessionStorage.removeItem(REJILLA_KEY);
      window.sessionStorage.setItem(REJILLA_KEY, JSON.stringify(rejillaId));
   }


   public getRejillaId(): number {
      return JSON.parse(sessionStorage.getItem(REJILLA_KEY));
   }


   public setElementos(elementos: any): void {
      window.sessionStorage.removeItem(ELEMENTOS);
      window.sessionStorage.setItem(ELEMENTOS, JSON.stringify(elementos));
   }


   public getElementosEvaluacion(): any {
      return JSON.parse(sessionStorage.getItem(ELEMENTOS));
   }


   public setConstructos(constructos: any): void {
      window.sessionStorage.removeItem(CONSTRUCTOS);
      window.sessionStorage.setItem(CONSTRUCTOS, JSON.stringify(constructos));
   }


   public getConstructosEvaluacion(): any {
      return JSON.parse(sessionStorage.getItem(CONSTRUCTOS));
   }
}