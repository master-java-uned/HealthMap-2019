import { Constructos } from '../models/constructos';
import { Polos } from '../models/polos';
import { Elementosrejilla } from './elementosrejilla';
import { Elementos } from '../models/elementos';


export class UsuarioRejilla {
   idrejilla: number;
   elementos: Elementos[];
   elementosrejilla: Array<Elementosrejilla> = [];
   constructos: Constructos[];
   polos: Array<Polos> = [];
   poloIzquierdo: Array<string> = [];
   poloDerecho: Array<string> = [];
}