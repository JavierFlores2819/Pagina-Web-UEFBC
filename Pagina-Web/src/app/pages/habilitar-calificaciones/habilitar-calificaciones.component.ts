import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilitar-calificaciones',
  templateUrl: './habilitar-calificaciones.component.html',
  styleUrls: ['./habilitar-calificaciones.component.css']
})
export class HabilitarCalificacionesComponent implements OnInit {

  tittle="Habilitar calificaciones"
  anioL = ""
  parcial = ""
  quimestre = ""

  tiempoCalif={fecIni:'',fecFin:'',periodo:0,subPer:0 }
  constructor() {
    this.loadFechasHabilitadas()

   
   }

  ngOnInit(): void {
    this.loadAnioActual()
    this.loadQuiActual()
    this.loadParActual()
  }

  //carga de datos iniciales
  loadAnioActual(){
    this.anioL="01/07/2022" + " al " + "01/09/2023"
    return this.anioL
  }
  loadParActual(){
    this.parcial="1ero"
    return this.parcial
  }
  loadQuiActual(){
    this.quimestre = "2do"
    return this.quimestre
  }

  //carga de calificaciones habilitadas
  loadFechasHabilitadas(){
    let Calif={fecIni:'',fechFin:''}
    return Calif
  }

  //agregar nuevas fechas
  addFechasCalificaciones(){

  }

  //editar fechas actuales para calificar
  editFechasCalificaciones(){

  }

}
