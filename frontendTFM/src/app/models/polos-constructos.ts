export class PolosConstructos {
    id?: number;
    idRejilla:number;
    idConstructo:number;
    poloIzquierdo:string;
    poloDerecho:string;
    
    constructor(id:number,idRejilla:number,idConstructo:number,poloIzquierdo: string, poloDerecho: string) {
       this.id=id;
        this.idRejilla=idRejilla;
        this.idConstructo=idConstructo;
        this.poloIzquierdo = poloIzquierdo;
        this.poloDerecho = poloDerecho;
        
       
    }

}
