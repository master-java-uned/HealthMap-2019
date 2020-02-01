export class Evaluacion {
   idevaluacion: number;
   idrejilla: number;
   comentariopaciente: string;
   comentariopsicologo: string;


   constructor(idevaluacion: number, idrejilla: number, comentariopaciente: string, comentariopsicologo: string) {
      this.idevaluacion = idevaluacion;
      this.idrejilla = idrejilla;
      this.comentariopaciente = comentariopaciente;
      this.comentariopsicologo = comentariopsicologo;
   }
}