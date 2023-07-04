import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  title:string='Cursos';
  listCursosA:Curso[]=[]
  constructor() { 
    this.loadCursos();
  }

  ngOnInit(): void {
  }

  loadCursos(){
    this.listCursosA = [{id:1,nombre:'1ro - Primero',numero:1,descrip:'Basica'},{id:2,nombre:'2do - Segundo',numero:2,descrip:'Basica'},
                        {id:3,nombre:'3ro - Tercero',numero:3,descrip:'Basica'},{id:4,nombre:'4to - Cuarto',numero:4,descrip:'Basica'},
                        {id:5,nombre:'5to - Quinto',numero:5,descrip:'Basica'},{id:6,nombre:'6to - Sexto',numero:1,descrip:'Basica'},
                        {id:7,nombre:'7mo - Septimo',numero:7,descrip:'Basica'},{id:11,nombre:'1ro - Primero',numero:1,descrip:'Bachillerato'},
                        {id:12,nombre:'2do - Segundo',numero:2,descrip:'Bachillerato'},{id:13,nombre:'3ro - Tercero',numero:3,descrip:'Bachillerato'}]
    return this.listCursosA;
  }

}
