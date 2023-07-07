import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.interface';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  title:string='Calificar asignaturas';
  id=3
  PROFESOR:Profesor  = {PRF_ID: 0,PRF_DNI: '', PRF_NOM: "", PRF_NOM2: "", PRF_APE: "", PRF_APE2: ""}
  listParalelos:any
  constructor(private pageService:PagesService) {
    this.loadProfesorParalelo();
    this.loadParalelosAsignados();
   }  

  ngOnInit(): void {
  }
  loadProfesorParalelo(){
    let param =  {"tabla": "profesor","campos": ["PRF_ID","PRF_NOM","PRF_NOM2","PRF_APE","PRF_APE2"],"where_nombre": ["PRF_ID"],"where_valor": this.id} 
    this.pageService.getData(param).subscribe(data=>{
      this.PROFESOR.PRF_ID = data[0].PRF_ID
      this.PROFESOR.PRF_NOM = data[0].PRF_NOM
      this.PROFESOR.PRF_NOM2 = data[0].PRF_NOM2
      this.PROFESOR.PRF_APE = data[0].PRF_APE
      this.PROFESOR.PRF_APE2 = data[0].PRF_APE2
    })
  }
  loadParalelosAsignados(){
    let param ={"tabla": "asg_prll_prf","campos":["ASG_PRLL_PRF_ID","ASG_PRL_PRF_ESTADO","ASG_ID","PRF_ID","PRLL_ID","USR_CREADOR_ID","FECHA_CREACION"],
     "where_nombre": ["PRF_ID"],"where_valor": this.id}
    
    this.pageService.getData(param).subscribe(data=>{
      this.listParalelos = data
    },error=>{
      console.log(error);
      
    })
  }

}
