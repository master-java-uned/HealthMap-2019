
import { Elementosrejilla } from './elementosrejilla'
import { Polos } from './polos';
import { Evaluacion } from './evaluacion';
import { DatePipe } from '@angular/common';
export class InformacionRejilla {
    isShow: boolean;
    nombrepaciente: string;
    idrejilla: number;
    idpaciente: number;
    fechahora: DatePipe;
    fechahorafin: DatePipe;
    comentariopaciente: string;
    comentariopsicologo: string;
    elementos: Array<Elementosrejilla> = [];
    constructos: Array<Polos> = [];
    evaluaciones: Array<Evaluacion> = [];
    isShowElementos: boolean;
    isShowConstructos: boolean;
    isShowEvaluaciones: Array<boolean> = [];

    constructor(isShow: boolean, nombrepaciente: string, idrejilla: number, idpaciente: number, fechahora: DatePipe, fechahorafin: DatePipe, comentariopaciente: string, comentariopsicologo: string, elementos: Array<Elementosrejilla>, constructos: Array<Polos>, evaluaciones: Array<Evaluacion>, isShowElementos: boolean, isShowConstructos: boolean, isShowEvaluaciones: Array<boolean>) {
        this.isShow = isShow;
        this.nombrepaciente = nombrepaciente;
        this.idrejilla = idrejilla;
        this.idpaciente = idpaciente;
        this.fechahora = fechahora;
        this.fechahorafin = fechahorafin;
        this.comentariopaciente = comentariopaciente;
        this.comentariopsicologo = comentariopsicologo;
        this.elementos = elementos;
        this.constructos = constructos;
        this.evaluaciones = evaluaciones;
        this.isShowElementos = isShowElementos;
        this.isShowConstructos = isShowConstructos;
        this.isShowEvaluaciones = isShowEvaluaciones;
    }

}
