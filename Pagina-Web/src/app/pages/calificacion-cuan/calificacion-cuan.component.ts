import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Matricula } from 'src/app/models/matricula.model';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-calificacion-cuan',
  templateUrl: './calificacion-cuan.component.html',
  styleUrls: ['./calificacion-cuan.component.css']
})
export class CalificacionCuanComponent implements OnInit {
  id:string
  title='Calificaicones'


  listEst:Matricula[]=[]
  notas:any
  constructor(private aroute:ActivatedRoute,private route:Router, private pageServide:PagesService) {
    this.id = this.aroute.snapshot.paramMap.get('id')
    this.loadEstAsig()
   }

  ngOnInit(): void {
  }

  //cargar los estudiantes por asignatura --> matricula
  loadEstAsig(){
    
    let param= {"tabla": "matricula","campos": ["MTRC_ID", "MTRC_PASE", "MTRC_ESTADO", "EST_ID", "PRLL_ID", "USR_CREADOR_ID"],"where_nombre": ["PRLL_ID"],"where_valor": this.id} 
    this.pageServide.getData(param).subscribe(data=>{
      this.listEst = data
      console.log('carga exitosa');
      
    })
  }

  addCalificaciones(){

  }
  controlCalificaciones(){
    
  }

}
