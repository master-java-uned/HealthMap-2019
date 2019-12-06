import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Polos} from '../models/polos';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class ConstructosService {

  private constructosURL = 'http://localhost:8080/api/constructos/';
  constructor(private httpClient: HttpClient) { }


 
  public insertConstructos(polos:Array<Polos>):Observable<any> {
    console.log("Entra en el bucle");
    //console.log(polos);
    return this.httpClient.post<any>(this.constructosURL + 'insertPolos',polos,cabecera);
  }

}
