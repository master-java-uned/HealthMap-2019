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
export class ElementosService {
   private constructosURL = 'http://localhost:8080/api/elementos/';


   constructor(private httpClient: HttpClient) { }


   public backend_getElementosByIdRejilla(idRejilla: number): Observable<any> {
      return this.httpClient.post<any>(this.constructosURL + 'getElementosUsuario', idRejilla, cabecera);
   }
}
