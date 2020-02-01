import { DatePipe } from '@angular/common';


export class Rejilla {
   idrejilla: number;
   idpaciente: number;
   fechahora: DatePipe;
   fechahorafin: DatePipe;
   comentariopaciente: string;
   comentariopsicologo: string;


   constructor(idrejilla: number, idpaciente: number, fechahora: DatePipe, fechahorafin: DatePipe, comentariopaciente: string, comentariopsicologo: string) {
      this.idrejilla = idrejilla;
      this.idpaciente = idpaciente;
      this.fechahora = fechahora;
      this.fechahorafin = fechahorafin;
      this.comentariopaciente = comentariopaciente;
      this.comentariopsicologo = comentariopsicologo;
   }
}