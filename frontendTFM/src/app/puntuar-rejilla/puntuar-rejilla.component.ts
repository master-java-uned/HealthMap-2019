import { Component, OnInit } from '@angular/core';
import { ElementosUsuario } from '../models/elementos-usuario';
import { Polos } from '../models/polos'
import { ConstructosService } from '../services/constructos.service';
import { Puntuaciones } from '../models/puntuaciones';
import { PuntuacionesService } from '../services/puntuaciones.service';
import { RejillaService } from '../services/rejilla.service';
import { OrdenConstructos } from '../models/orden-constructos';
const modo_test: boolean = true;
@Component({
  selector: 'app-puntuar-rejilla',
  templateUrl: './puntuar-rejilla.component.html',
  styleUrls: ['./puntuar-rejilla.component.css']
})
export class PuntuarRejillaComponent implements OnInit {
  elementosUsuario: Array<ElementosUsuario> = [];
  polosUsuario: Array<Polos> = [];
  puntuaciones: number[][] = [[], []];
  ordenConstructos: Array<number> = new Array;
  ordenConstructosFinales: Array<OrdenConstructos> = new Array;
  puntuacionesFinales: Array<Puntuaciones> = new Array;
  idEvaluacion: number;
  idRejilla: number;
  k: number = 0;
  constructor(private constructosService: ConstructosService, private puntuacionesService: PuntuacionesService, private rejillaService: RejillaService) { }

  ngOnInit() {
    for (var i: number = 0; i < 14; i++) {
      this.puntuaciones[i] = [];
    }
    this.elementosUsuario = this.constructosService.sesion_getElementosUsuario();
    this.polosUsuario = this.constructosService.sesion_getConstructosUsuario();
    this.idRejilla = this.rejillaService.sesion_getRejillaId();
    if (modo_test) {
      for (var i: number = 0; i < 14; i++) {
        this.ordenConstructos[i] = i;
        for (var j: number = 0; j < 12; j++) {
          this.puntuaciones[i][j] = j;
        }
      }
    }
  }

  guardarPuntuaciones(): void {
    this.puntuacionesService.backend_insertEvaluacion(this.idRejilla).subscribe(data => {
      this.idEvaluacion = data
      console.log(this.idEvaluacion);
      for (var i: number = 0; i < 14; i++) {
        this.ordenConstructosFinales[i] = new OrdenConstructos(0, this.idEvaluacion, i + 1, this.ordenConstructos[i]);
        //console.log(this.ordenConstructosFinales[i]);
        for (var j: number = 0; j < 12; j++) {

          this.puntuacionesFinales[this.k] = new Puntuaciones(this.idEvaluacion, i + 1, j + 1, this.puntuaciones[i][j]);
          this.k++;
        }
      }
      this.insertPuntuaciones();
    },
      (err: any) => {
      }
    );

  }
  insertPuntuaciones(): void {
    this.puntuacionesService.backend_insertPuntuaciones(this.puntuacionesFinales).subscribe(data => {
      this.idEvaluacion = data;

    },
      (err: any) => {
      }
    );
    this.insertOrdenConstructos();
  }
  insertOrdenConstructos(): void {
    this.puntuacionesService.backend_insertOrdenConstructos(this.ordenConstructosFinales).subscribe(data => {
      this.idEvaluacion = data;
    },
      (err: any) => {
      }
    );
  }

}
