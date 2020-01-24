import { UsuarioRejilla } from '../models/usuario-rejilla';

export class UsuarioDatos {
   idusuario: bigint;
   rejilla: UsuarioRejilla;
   // idRejilla: number;
   // elementos: any = {};
   // elementosUsuario: any = {};


   constructor() {
      this.rejilla = new UsuarioRejilla;
   }
}