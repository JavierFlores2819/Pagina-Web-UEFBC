import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { estudiante } from 'src/app/modelos/clases/estudiante.Model';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent {

  estudiante:estudiante={EST_ID:0,EST_DNI:"",EST_NOM:"",EST_NOM2:"",EST_APE:"",EST_APE2:"",EST_FECH_NAC:"",EST_GEN:"",EST_ESTADO:"A",REP_ID:0,
    USR_CREADOR_ID: 0, FECHA_CREACION: "" }
  
  id:any
  titulo:string='';  

    constructor(private aRoute:ActivatedRoute,private estService:EstudiantesService){

    }

    ngOnInit(): void {
      if (this.id) {
        this.titulo = 'Editar Estudiante'
      } else {
        this.titulo = 'Nuevo Estudiante'
      }
      
    }
    onChangeCheck(event:any){
      if(event.target.checked){ 
      this.estudiante.EST_ESTADO="A";
      }else{
        this.estudiante.EST_ESTADO="D";
      }
    }
    guardarEstudiante(){
      if (this.id) {
        this.estService.updateEstudiante().subscribe(data=>{

        })
        
      } else {
        this.estService.addEstudiante().subscribe(data=>{

        })
      }
    }

}
