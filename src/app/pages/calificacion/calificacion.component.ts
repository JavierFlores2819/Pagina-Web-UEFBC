import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente.model';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  title:string='Calificaciones';
  DOCENTE:Docente  
  listParalelos:any
  constructor() {
    this.loadInfoDocente();
   }

  ngOnInit(): void {
  }
  loadInfoDocente(){

  }

}
