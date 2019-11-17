import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Elementos}from '../models/elementos'

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
const REJILLA_KEY = 'RejillaNumber';
const ELEMENTOS = 'ElementosEvaluacion';
@Injectable({
  providedIn: 'root'
})
export class RejillaService {

  private authURL = 'http://localhost:8080/api/rejilla/';
  constructor(private httpClient: HttpClient) { }


  public nuevaRejilla(idUsuario: bigint): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nueva', idUsuario, cabecera);
  }
  public getElementos():Observable<Elementos> {
    return this.httpClient.post<Elementos>(this.authURL + 'getElementos', cabecera);
  }
  
  
  public setRejillaId(rejillaId: number): void {
    window.sessionStorage.removeItem(REJILLA_KEY);
    window.sessionStorage.setItem(REJILLA_KEY, JSON.stringify(rejillaId));
  }

  public getRejillaId(): number {
    return  JSON.parse(sessionStorage.getItem(REJILLA_KEY));
  }
  public setElementos(elementos: any): void {
    window.sessionStorage.removeItem(ELEMENTOS);
    window.sessionStorage.setItem(ELEMENTOS, JSON.stringify(elementos));
  }

  public getElementosEvaluacion(): any {
    return  JSON.parse(sessionStorage.getItem(ELEMENTOS));
  }


}
