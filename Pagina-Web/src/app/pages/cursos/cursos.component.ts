import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  title:string='Cursos';
  listCursosA:Curso[]=[]
  curso:Curso
  constructor(private route:Router,
    private pageService:PagesService) { 
    this.loadCursos();
  }

  ngOnInit(): void {
  }

  loadCursos(){
    let param={"tabla": "curso",
    "campos":["CRS_ID","CRS_NOM","CRS_TIP","CRS_ESTADO"],
      "where_nombre": ["CRS_ESTADO"],
      "where_valor": "A"
  }
    try {
      this.pageService.getData(param).subscribe(data=>{
        this.listCursosA = data
        console.log(data);
        
      })
    } catch (error) {
      console.log(error);
      
    }
    return this.listCursosA;

  }

  buscar(value:string){
    let param ={"tabla": "curso","campos":["CRS_ID","CRS_NOM","CRS_TIP","CRS_ESTADO"],"where_nombre": ["CRS_NOM"],"where_valor":value}
    this.pageService.getData(param).subscribe(data=>{
      this.listCursosA = data
    })
  }

  /*editPage(curso:Curso){
    //this.curso = {CRS_ID:1,CRS_NOM:1,CRS_TIP:'1ro - Primero',CRS_ESTADO:'Basica'}
    this.route.navigate(['/curso',curso.CRS_ID])
  }*/

}
