import { UsuarioRejilla } from '../models/usuario-rejilla';

export class UsuarioDatos {
   idusuario: bigint;
   nombreUsuario: string;
   rejilla: UsuarioRejilla;


   constructor() {
      this.rejilla = new UsuarioRejilla;
   }
}