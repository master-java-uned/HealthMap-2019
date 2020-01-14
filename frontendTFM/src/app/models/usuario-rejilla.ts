import { Constructos } from '../models/constructos';
import { Polos } from '../models/polos';


export class UsuarioRejilla {
   idRejilla: number;
   elementos: any = {};
   elementosUsuario: any = {};
   constructos: Constructos[];
   polos: Array<Polos> = [];
   poloIzquierdo: Array<string> = [];
   poloDerecho: Array<string> = [];


   // constructor(nombre: string, descripcionUsuario: string) {
   //    this.nombre = nombre;
   //    this.descripcionUsuario = descripcionUsuario;
   // }
}