import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Polos } from '../models/polos';
import { ElementosUsuario } from '../models/elementos-usuario';

const ELEMENTOSUSUARIO = 'ElementosUsuario';
const CONSTRUCTOSUSUARIO = 'ConstructosUsuario';
const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class ConstructosService {
  private constructosURL = 'http://localhost:8080/api/constructos/';
  constructor(private httpClient: HttpClient) { }



  public insertConstructos(polos: Array<Polos>): Observable<any> {
    console.log("Entra en el bucle");
    //console.log(polos);
    return this.httpClient.post<any>(this.constructosURL + 'insertPolos', polos, cabecera);
  }
  public setElementosUsuario(elementosUsuario: Array<ElementosUsuario>): void {
    window.sessionStorage.removeItem(ELEMENTOSUSUARIO);
    window.sessionStorage.setItem(ELEMENTOSUSUARIO, JSON.stringify(elementosUsuario));
  }
  public getElementosUsuario(): Array<ElementosUsuario> {
    return JSON.parse(sessionStorage.getItem(ELEMENTOSUSUARIO));
  }

  public getConstructosUsuario(): Array<Polos> {
    return JSON.parse(sessionStorage.getItem(CONSTRUCTOSUSUARIO));
  }
  public setConstructosUsuario(constructosUsuario: Array<Polos>): void {
    window.sessionStorage.removeItem(CONSTRUCTOSUSUARIO);
    window.sessionStorage.setItem(CONSTRUCTOSUSUARIO, JSON.stringify(constructosUsuario));
  }


}
