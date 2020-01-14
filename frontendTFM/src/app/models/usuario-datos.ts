import { UsuarioRejilla } from '../models/usuario-rejilla';

export class UsuarioDatos {
   idUsuario: bigint;
   rejilla: UsuarioRejilla;
   // idRejilla: number;
   // elementos: any = {};
   // elementosUsuario: any = {};


   constructor() {
      this.rejilla = new UsuarioRejilla;
   }
}