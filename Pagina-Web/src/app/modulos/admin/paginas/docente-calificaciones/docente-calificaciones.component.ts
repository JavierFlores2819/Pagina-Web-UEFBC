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
  auxCali:number=0

  id:any
  
  calificacion:calificacion={CLF_ID:0,CLF_NOTA:0,CLF_ESTADO:"A",SPRD_ID:96,MTRC_ID:0,ASG_PRLL_PRF_ID:0,USR_CREADOR_ID:1}

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

  asignarCalificacion(event:any,mtrcId:string){
    this.calificacion.CLF_NOTA =parseFloat(event.target.value)
    this.calificacion.MTRC_ID = parseInt(mtrcId)
    this.calificacion.ASG_PRLL_PRF_ID = this.id
    console.log(this.calificacion);
    
  }

  guardarCalificacion(){
   
    let param = {
      "tabla": "calificacion",
      "campos": ["CLF_NOTA", "CLF_ESTADO", "SPRD_ID", "MTRC_ID", "ASG_PRLL_PRF_ID", "USR_CREADOR_ID"],
      "valores": [this.calificacion.CLF_NOTA,this.calificacion.CLF_ESTADO,this.calificacion.SPRD_ID, this.calificacion.MTRC_ID,
        this.calificacion.ASG_PRLL_PRF_ID,this.calificacion.USR_CREADOR_ID]
    }
    this.calificacionService.addCalificacion(param).subscribe(data=>{
      console.log('calificacion guardada');
      
    })

  }



}
