import { Constructos } from '../models/constructos';
import { Polos } from '../models/polos';
import { ElementosUsuario } from '../models/elementos-usuario';
import { Elementos } from '../models/elementos';


export class UsuarioRejilla {
   idRejilla: number;
   //elementos: any = {};
   elementos: Elementos[];
   //elementosUsuario: any = {};
   //elementosUsuario: ElementosUsuario[];
   elementosUsuario: Array<ElementosUsuario> = [];
   constructos: Constructos[];
   polos: Array<Polos> = [];
   //polos: Polos[];
   poloIzquierdo: Array<string> = [];
   poloDerecho: Array<string> = [];


   // constructor(nombre: string, descripcionUsuario: string) {
   //    this.nombre = nombre;
   //    this.descripcionUsuario = descripcionUsuario;
   // }
}