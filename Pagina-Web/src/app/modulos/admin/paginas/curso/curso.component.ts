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
  curso:Curso={CRS_ID:0,CRS_NOM:0,CRS_TIP:"",CRS_ESTADO:"",USR_CREADOR_ID:1,FECHA_CREACION:""}
  id:any;
  chbxValue:boolean=false;
  constructor(private aRoute:ActivatedRoute, private cursoService:CursosService){
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    
    if (this.id) {
      this.titulo = 'Editar Curso'
    } else {
      this.titulo = 'Nuevo Curso'
    }
  }
  
  onChangeCheck(event:any){
    if(event.target.checked){ 
    this.curso.CRS_ESTADO="A";
    }else{
      this.curso.CRS_ESTADO="D";
    }
  }

  cargarCurso(){
    let param = {
      "tabla": "curso",
      "campos": [
    "CRS_ID","CRS_NOM","CRS_TIP","CRS_ESTADO","USR_CREADOR_ID"
      ],
      "where": [
          {
              "nombre": "CRS_ID",
              "valor": this.id,
              "condicion":"=",
              "tipo": "&&"
          }
      ]
  }
  
  
    this.cursoService.getCurso(param).subscribe(data=>{
      console.log(data);
      
    })
  }

  guardarCurso(){
    if (this.id) {
      let  param ={
        tabla: "curso",
        campos: [
          { nombre: "CRS_ID", valor: this.curso.CRS_ID},
          { nombre: "CRS_NOM", valor: this.curso.CRS_NOM },
          { nombre: "CRS_TIP", valor: this.curso.CRS_TIP },
          { nombre: "CRS_ESTADO", valor: this.curso.CRS_ESTADO },
          { nombre: "USR_CREADOR_ID", valor: this.curso.USR_CREADOR_ID },
        ]
      };
      this.cursoService.updateCurso(param).subscribe(data=>{
        console.log('editado');
        
      })
    } else {
      let param ={"tabla": "curso",
        "campos": ["CRS_NOM", "CRS_TIP", "CRS_ESTADO","USR_CREADOR_ID"],
        "valores": [this.curso.CRS_NOM,this.curso.CRS_TIP, this.curso.CRS_ESTADO,this.curso.USR_CREADOR_ID]
      }
      this.cursoService.addCurso(param).subscribe(data=>{
        console.log('creado');
        console.log(data);
      },error=>{
        console.log(error);
        
      })
    }

  }
}

/**
 * conclusion x cada objetivo
 * conclucion aporte a la disciplina que aporta a la ingenieria de software
 * conclusion si ubo limitaciones
 * 
 * / */

 /**
  * recomendaciones
  * oportunidades que queda a implementar o a investigar
  * / */