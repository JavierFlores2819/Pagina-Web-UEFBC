import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/modelos/clases/curso.Model';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
  
  titulo:string = '';
  curso:Curso={CRS_ID:0,CRS_NOM:0,CRS_TIP:"",CRS_ESTADO:"",USR_CREADOR_ID:0,FECHA_CREACION:""}
  id:any;
  chbxValue:boolean=false;
  constructor(private aRoute:ActivatedRoute, private cursoService:CursosService){
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    if (this.id) {
      this.titulo = 'Editar Curso'
    } else {
      this.titulo = 'Nuevo Cursp'
    }
  }

  guardarCurso(){
    if (this.id) {
      this.cursoService.updateCurso().subscribe(data=>{

      })
    } else {
      this.cursoService.addCurso().subscribe(data=>{

      })
    }

  }
}
