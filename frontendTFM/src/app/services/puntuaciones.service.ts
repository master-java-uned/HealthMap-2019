import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puntuaciones } from '../models/puntuaciones';
import { OrdenConstructos } from '../models/orden-constructos';


const ELEMENTOSUSUARIO = 'ElementosUsuario';
const CONSTRUCTOSUSUARIO = 'ConstructosUsuario';
const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
   providedIn: 'root'
})
export class PuntuacionesService {
   private constructosURL = 'http://localhost:8080/api/';
   constructor(private httpClient: HttpClient) { }


   public backend_insertEvaluacion(idRejilla: number): Observable<any> {
      return this.httpClient.post<any>(this.constructosURL + 'insertEvaluacion', idRejilla, cabecera);
   }


   public backend_getEvaluacionesUsuario(idRejilla: number): Observable<any> {
      return this.httpClient.post<any>(this.constructosURL + 'getEvaluacionesUsuario', idRejilla, cabecera);
   }


   public backend_getPuntuaciones(idEvaluacion: number): Observable<Array<Puntuaciones>> {
      return this.httpClient.post<Array<Puntuaciones>>(this.constructosURL + 'getPuntuaciones', idEvaluacion, cabecera);
   }


   public backend_getOrden(idEvaluacion: number): Observable<any> {
      return this.httpClient.post<any>(this.constructosURL + 'getOrden', idEvaluacion, cabecera);
   }


   public backend_insertPuntuaciones(puntuaciones: Array<Puntuaciones>): Observable<any> {
      return this.httpClient.post<any>(this.constructosURL + 'insertPuntuaciones', puntuaciones, cabecera);
   }


   public backend_insertOrdenConstructos(ordenConstructos: Array<OrdenConstructos>): Observable<any> {
      return this.httpClient.post<any>(this.constructosURL + 'insertOrdenConstructos', ordenConstructos, cabecera);
   }
}
