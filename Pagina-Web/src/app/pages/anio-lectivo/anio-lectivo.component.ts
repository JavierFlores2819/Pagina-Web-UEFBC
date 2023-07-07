import { Component, OnInit } from '@angular/core';
import { AnioLectivo } from 'src/app/models/anioLectivo';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-anio-lectivo',
  templateUrl: './anio-lectivo.component.html',
  styleUrls: ['./anio-lectivo.component.css']
})
export class AnioLectivoComponent implements OnInit {

  title:string = 'Año lectivo'
  listAnios:AnioLectivo[];
  constructor(private pageService:PagesService) {
    this.loadAñosLectivo()
   }

  ngOnInit(): void {
  }

  loadAñosLectivo(){
    let param = {"tabla": "anio_lectivo","campos": ["AL_ID","AL_INI","AL_FIN","AL_PRD","AL_SUB_PRD","AL_ESTADO"],"where_nombre": ["AL_ESTADO"],"where_valor": "A"} 
    this.pageService.getData(param).subscribe(data=>{
      this.listAnios=data
    })
   /* this.listAnios=[{id:1,fecInicio:'2020/9/01',fecFin:'2021/07/01',periodo:2,subPer:2,estado:"l",user:1,fecC:"2021/12/12"},
                    {id:2,fecInicio:'1/9/2021',fecFin:'1/7/2022',periodo:2,subPer:2,estado:"l",user:1,fecC:"2021/12/12"},
                    {id:3,fecInicio:'1/9/2022',fecFin:'1/7/2023',periodo:3,subPer:2,estado:"A",user:1,fecC:"2021/12/12"}, ]*/
    return this.listAnios
  }

  buscar(value:string){
    let param ={"tabla": "anio_lectivo","campos": ["AL_ID","AL_INI","AL_FIN","AL_PRD","AL_SUB_PRD","AL_ESTADO"],"where_nombre": ["AL_ID"],"where_valor":value}
    this.pageService.getData(param).subscribe(data=>{
      this.listAnios = data
    })
  }

}
