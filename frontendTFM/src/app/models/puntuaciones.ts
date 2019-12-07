export class Puntuaciones {
    id?: number;
    idevaluacion:number;
    idconstructo:number;
    idelemento:number;
    puntuacion:number;

    constructor(id:number,idevaluacion:number,idconstructo:number,idelemento: number, puntuacion: number) {
        this.id=id;
        this.idevaluacion=idevaluacion;
        this.idconstructo=idconstructo;
        this.idelemento = idelemento;
        this.puntuacion = puntuacion;  
    }
}
