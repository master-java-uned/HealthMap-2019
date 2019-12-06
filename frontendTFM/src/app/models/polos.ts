export class Polos {
    id?: number;
    idrejilla:number;
    idconstructo:number;
    txtpoloizq:string;
    txtpoloder:string;
    
    constructor(id:number,idrejilla:number,idconstructo:number,txtpoloizq: string, txtpoloder: string) {
        this.id=id;
        this.idrejilla=idrejilla;
        this.idconstructo=idconstructo;
        this.txtpoloizq = txtpoloizq;
        this.txtpoloder = txtpoloder;  
    }

}
