import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calificacion-cual',
  templateUrl: './calificacion-cual.component.html',
  styleUrls: ['./calificacion-cual.component.css']
})
export class CalificacionCualComponent implements OnInit {
  title:string = 'Disciplina'

  constructor() {
    this.loadDatosGene();
   }

  ngOnInit(): void {
  }

  loadDatosGene(){

  }

}
