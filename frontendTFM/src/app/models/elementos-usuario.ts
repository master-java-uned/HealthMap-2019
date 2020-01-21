export class ElementosUsuario {
   idElemento: number;
   idRejilla: number;
   nombreElemento: string;
   rolElemento: string;


   constructor(idElemento: number, idRejilla: number, nombreElemento: string, rolElemento: string) {
      this.idElemento = idElemento;
      this.idRejilla = idRejilla;
      this.nombreElemento = nombreElemento;
      this.rolElemento = rolElemento;
   }
}
