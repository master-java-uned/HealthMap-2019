export class OrdenConstructos {
    id?: number;
    idevaluacion:number;
    idconstructo:number;
    ordenconstructo:number;
   

    constructor(id:number,idevaluacion:number,idconstructo:number,ordenconstructo: number) {
        this.id=id;
        this.idevaluacion=idevaluacion;
        this.idconstructo=idconstructo;
        this.ordenconstructo = ordenconstructo;
    }
}
