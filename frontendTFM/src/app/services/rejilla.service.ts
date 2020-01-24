import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Elementosrejilla } from '../models/elementosrejilla';
import { Polos } from '../models/polos'


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


   public backend_getRejillasUser(idUsuario: bigint): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'getRejillasUser', idUsuario, cabecera);
   }


   public backend_nuevaRejilla(idUsuario: bigint): Observable<any> {
      //var resultado: Observable<number>;
      var resultado: Observable<any>;
      resultado = this.httpClient.post<any>(this.authURL + 'nueva', idUsuario, cabecera);
      console.log("YI-LOG - RejillaService-backend_nuevaRejilla()");
      console.log(resultado);
      return resultado;
   }


   public backend_nuevaRejilla2(idusuario: bigint, elementosrejilla: Array<Elementosrejilla>, polos: Array<Polos>): Observable<any> {
      console.log("YI-LOG - RejillaService-backend_nuevaRejilla2()");
      console.log(idusuario);
      console.log(elementosrejilla);
      console.log(polos);
      //var resultado: Observable<number>;
      var resultado: Observable<any>;
      resultado = this.httpClient.post<any>(this.authURL + 'nuevaRejilla', { "idusuario": idusuario, "elementosrejilla": elementosrejilla, "polos": polos }, cabecera);
      console.log(resultado);
      return resultado;
   }


   public backend_getElementos(): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'getElementos', cabecera);
   }


   public backend_getConstructos(): Observable<any> {
      return this.httpClient.post<any>(this.authURL + 'getConstructos', cabecera);
   }


   public sesion_setRejillaId(rejillaId: any): void {
      window.sessionStorage.removeItem(REJILLA_KEY);
      window.sessionStorage.setItem(REJILLA_KEY, JSON.stringify(rejillaId));
   }


   public sesion_getRejillaId(): any {
      console.log(sessionStorage.getItem(REJILLA_KEY));
      return JSON.parse(sessionStorage.getItem(REJILLA_KEY));
   }


   public sesion_setElementos(elementos: any): void {
      window.sessionStorage.removeItem(ELEMENTOS);
      window.sessionStorage.setItem(ELEMENTOS, JSON.stringify(elementos));
   }


   public sesion_getElementos(): any {
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