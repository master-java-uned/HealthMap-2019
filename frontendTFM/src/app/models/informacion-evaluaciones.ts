import { Evaluacion } from './evaluacion';
import {Puntuaciones} from './puntuaciones'
import {OrdenConstructos} from './orden-constructos'

export class InformacionEvaluaciones {
    idevaluacion:number;
    idrejilla:number;
    comentariopaciente:string;
    comentariopsicologo:string;
    puntuaciones:Array<Puntuaciones> = [];   
    orden:Array<OrdenConstructos>= [];

    constructor(idevaluacion:number,idrejilla:number,comentariopaciente: string, comentariopsicologo: string,puntuaciones:Array<Puntuaciones> ,orden:Array<OrdenConstructos>){
       // super(idevaluacion,idrejilla,comentariopaciente,comentariopsicologo);
       this.idevaluacion=idevaluacion;
       this.idrejilla=idrejilla; 
       this.comentariopaciente=comentariopaciente;
       this.comentariopsicologo=comentariopsicologo;
       this.puntuaciones=puntuaciones;
        this.orden=orden;
    }


}
