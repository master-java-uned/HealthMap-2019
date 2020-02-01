import { Injectable } from '@angular/core';
import { InformacionEvaluaciones } from '../models/informacion-evaluaciones';


const INFORMACIONEVALUACIONES = 'InformacionEvaluaciones';
const INFORMACIONREJILLAS = 'InformacionRejillas';
@Injectable({
  providedIn: 'root'
})
export class InformacionInicioService {
  rejillasCopia: Array<string>;


  constructor() { }


  public sesion_setInformacionEvaluaciones(evaluaciones: Array<InformacionEvaluaciones>): void {
    window.sessionStorage.removeItem(INFORMACIONEVALUACIONES);
    window.sessionStorage.setItem(INFORMACIONEVALUACIONES, JSON.stringify(evaluaciones));
  }


  public sesion_getEvaluaciones(): any {
    return JSON.parse(sessionStorage.getItem(INFORMACIONEVALUACIONES));
  }


  public sesion_setInformacionRejillas(rejillas: any = {}): void {
    window.sessionStorage.removeItem(INFORMACIONEVALUACIONES);
    window.sessionStorage.setItem(INFORMACIONREJILLAS, JSON.stringify(rejillas));
  }


  public sesion_getRejillas(): any {
    return JSON.parse(sessionStorage.getItem(INFORMACIONREJILLAS));
  }
}