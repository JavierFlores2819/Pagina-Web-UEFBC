import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { calificacion } from 'src/app/modelos/clases/calificacion.Model';
import { CalificacionService } from 'src/app/servicios/calificacion.service';

@Component({
  selector: 'app-docente-calificaciones',
  templateUrl: './docente-calificaciones.component.html',
  styleUrls: ['./docente-calificaciones.component.scss']
})
export class DocenteCalificacionesComponent {

  estudiantes:any[]=[]
  calificaciones:calificacion[]=[]
  id:string|null=''
  
  //{CLF_ID:0,CLF_PRD:"",CLF_SPRD:"",CLF_NOTA:0,CLF_ESTADO:"",MTRC_ID:0,ASG_PRLL_PRF_ID:0}

  constructor(private aRoute:ActivatedRoute, private calificacionService:CalificacionService){
    this.id = this.aRoute.snapshot.paramMap.get('id')
    this.calificacionService.getEstudiantesParalelo(this.id).subscribe(data=>{
      this.estudiantes = data.data
      console.log(this.estudiantes);
      
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }



}
