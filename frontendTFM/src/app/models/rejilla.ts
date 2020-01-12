import { Puntuaciones } from './puntuaciones';
import { OrdenConstructos } from './orden-constructos';

export class Rejilla {
    idrejilla:number;
    idpaciente:number;
    fechahora:Date;
    fechahorafin:Date;
    comentariopaciente:string;
    comentariopsicologo:string;
    
    
    constructor(idrejilla:number,idpaciente:number,fechahora:Date,fechahorafin:Date,comentariopaciente: string, comentariopsicologo: string) {
        this.idrejilla=idrejilla;
        this.idpaciente=idpaciente;
        this.fechahora=fechahora;
        this.fechahorafin=fechahorafin;
        this.comentariopaciente=comentariopaciente;
        this.comentariopsicologo=comentariopsicologo;
    }   

}