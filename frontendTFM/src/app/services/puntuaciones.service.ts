import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puntuaciones } from '../models/puntuaciones';
import { OrdenConstructos } from '../models/orden-constructos';


const ELEMENTOSUSUARIO = 'ElementosUsuario';
const CONSTRUCTOSUSUARIO = 'ConstructosUsuario';
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class PuntuacionesService {
  private constructosURL = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }


  public insertEvaluacion(idRejilla: number): Observable<any> {
    return this.httpClient.post<any>(this.constructosURL + 'insertEvaluacion', idRejilla, cabecera);
 }
 public getEvaluacionesUsuario(idRejilla:number): Observable<any> {
  return this.httpClient.post<any>(this.constructosURL + 'getEvaluacionesUsuario',idRejilla, cabecera);
}
 public insertPuntuaciones(puntuaciones:Array<Puntuaciones> ): Observable<any> {
  return this.httpClient.post<any>(this.constructosURL + 'insertPuntuaciones', puntuaciones, cabecera);
}
public getPuntuaciones(idEvaluacion:number): Observable<Array<Puntuaciones>>{
  return this.httpClient.post<Array<Puntuaciones>>(this.constructosURL + 'getPuntuaciones', idEvaluacion, cabecera);
}
public insertOrdenConstructos(ordenConstructos:Array<OrdenConstructos> ): Observable<any> {
  return this.httpClient.post<any>(this.constructosURL + 'insertOrdenConstructos', ordenConstructos, cabecera);
}
public getOrden(idEvaluacion:number): Observable<any> {
  return this.httpClient.post<any>(this.constructosURL + 'getOrden', idEvaluacion, cabecera);
}



}
