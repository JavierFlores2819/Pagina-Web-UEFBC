import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente.model';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  title:string='Calificaciones';
  DOCENTE:Docente  = {id:0,ced:'',nom:'',ape:''}
  listParalelos:any
  constructor() {
    this.loadDocenteParalelo();
   }  

  ngOnInit(): void {
  }
  loadDocenteParalelo(){
    this.DOCENTE.nom = 'BAD';
    this.DOCENTE.ape = 'BUNNY';

    return this.DOCENTE
  }

}
