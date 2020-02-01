export class Puntuaciones {
   idevaluacion: number;
   idconstructo: number;
   idelemento: number;
   puntuacion: number;


   constructor(idevaluacion: number, idconstructo: number, idelemento: number, puntuacion: number) {
      this.idevaluacion = idevaluacion;
      this.idconstructo = idconstructo;
      this.idelemento = idelemento;
      this.puntuacion = puntuacion;
   }
}