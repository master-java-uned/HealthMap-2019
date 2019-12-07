import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puntuaciones } from '../models/puntuaciones';


const ELEMENTOSUSUARIO = 'ElementosUsuario';
const CONSTRUCTOSUSUARIO = 'ConstructosUsuario';
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class PuntuacionesService {
  private constructosURL = 'http://localhost:8080/api/constructos/';
  constructor(private httpClient: HttpClient) { }


  public insertPuntuaciones(puntuaciones:Array<Puntuaciones>):Observable<any> {
    console.log("Entra en el bucle");
    return this.httpClient.post<any>(this.constructosURL + 'insertPuntuaciones',puntuaciones,cabecera);
  }



}
