import { Constructos } from '../models/constructos';
import { Polos } from '../models/polos';
import { Elementosrejilla } from './elementosrejilla';
import { Elementos } from '../models/elementos';


export class UsuarioRejilla {
   idrejilla: number;
   //elementos: any = {};
   elementos: Elementos[];
   //elementosUsuario: any = {};
   //elementosUsuario: ElementosUsuario[];
   elementosrejilla: Array<Elementosrejilla> = [];
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