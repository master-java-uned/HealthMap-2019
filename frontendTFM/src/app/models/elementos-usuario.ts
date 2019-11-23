export class ElementosUsuario {
    id: number;
    nombre:string;
    elementoDescripcion: string;
    descripcionUsuario:string;
    constructor(nombre: string, descripcionUsuario: string) {
        this.nombre = nombre;
        this.descripcionUsuario = descripcionUsuario;
    }
}
