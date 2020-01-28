import { Injectable } from '@angular/core';
import { InformacionEvaluaciones } from '../models/informacion-evaluaciones';
import { InformacionRejilla } from '../models/informacion-rejilla';


const INFORMACIONEVALUACIONES = 'InformacionEvaluaciones';
const INFORMACIONREJILLAS = 'InformacionRejillas';
@Injectable({
  providedIn: 'root'
})
export class InformacionInicioService {
  rejillasCopia: Array<string>;

  constructor() { }


  public setInformacionEvaluaciones(evaluaciones: Array<InformacionEvaluaciones>): void {
    window.sessionStorage.removeItem(INFORMACIONEVALUACIONES);
    window.sessionStorage.setItem(INFORMACIONEVALUACIONES, JSON.stringify(evaluaciones));
  }


  public getEvaluaciones(): any {
    return JSON.parse(sessionStorage.getItem(INFORMACIONEVALUACIONES));
  }

  public setInformacionRejillas(rejillas: any = {}): void {
    //console.log(rejillas);
    //console.log(JSON.stringify( rejillas));
    window.sessionStorage.removeItem(INFORMACIONEVALUACIONES);
    window.sessionStorage.setItem(INFORMACIONREJILLAS, JSON.stringify(rejillas));
  }


  public getRejillas(): any {
    return JSON.parse(sessionStorage.getItem(INFORMACIONREJILLAS));

  }
}
