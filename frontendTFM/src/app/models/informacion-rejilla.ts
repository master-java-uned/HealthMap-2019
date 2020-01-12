
import{ElementosUsuario} from './elementos-usuario'
import { Polos } from './polos';
import { Evaluacion } from './evaluacion';
export class InformacionRejilla {
    isShow:boolean;
    nombrepaciente:string;
    idrejilla:number;
    idpaciente:number;
    fechahora:Date;
    fechahorafin:Date;
    comentariopaciente:string;
    comentariopsicologo:string; 
    elementos:Array<ElementosUsuario>=[];
    constructos:Array<Polos>=[];
    evaluaciones:Array<Evaluacion>=[];
    isShowElementos:boolean;
    isShowConstructos:boolean;
    
    constructor(isShow:boolean,nombrepaciente:string,idrejilla:number,idpaciente:number,fechahora:Date,fechahorafin:Date,comentariopaciente: string, comentariopsicologo: string,elementos:Array<ElementosUsuario>,constructos:Array<Polos>,evaluaciones:Array<Evaluacion>,isShowElementos:boolean,isShowConstructos:boolean) {
        this.isShow=isShow;
        this.nombrepaciente=nombrepaciente;
        this.idrejilla=idrejilla;
        this.idpaciente=idpaciente;
        this.fechahora=fechahora;
        this.fechahorafin=fechahorafin;
        this.comentariopaciente=comentariopaciente;
        this.comentariopsicologo=comentariopsicologo; 
        this.elementos=elementos;
        this.constructos=constructos;
        this.evaluaciones=evaluaciones;
        this.isShowElementos=isShowElementos;
        this.isShowConstructos=isShowConstructos;
    }  
   
}
