import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { matricula } from 'src/app/modelos/clases/matricula.Model';
import { LoginComponent } from 'src/app/modulos/login/login.component';
import { ParalelosService } from 'src/app/servicios/paralelos.service';

@Component({
  selector: 'app-asignar-estudiante',
  templateUrl: './asignar-estudiante.component.html',
  styleUrls: ['./asignar-estudiante.component.scss']
})
export class AsignarEstudianteComponent {

  id:any
  lisEstudiantes:any[]=[]
  paralelo:any = {idC:0,id:0,PROF:'',PRLL_NOM:'',CURSO:''}
  listEstudiantesParalelo:matricula[]=[]

  app = document.getElementById('newList')

    constructor(private paraleloService:ParalelosService, private aRoute:ActivatedRoute){
    this.id = this.aRoute.snapshot.paramMap.get('paralelo')
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cargarEstCurso()
    this.paraleloService.getParalelos(this.id).subscribe(data=>{
      this.paralelo.idC = data.data[0].idC
      this.paralelo.id = data.data[0].id
      this.paralelo.PROF = data.data[0].PROF
      this.paralelo.CURSO = data.data[0].CURSO
      this.paralelo.PRLL_NOM = data.data[0].PRLL_NOM
      console.log(this.paralelo);
      
    })
  }

  //estudiantes del curso
  cargarEstCurso(){
    let param=   {"tabla": "estudiante as A,matricula AS B, paralelo AS C where A.EST_ID=B.EST_ID and B.MTRC_ESTADO='A' and B.PRLL_ID=C.PRLL_ID AND C.CRS_ID=1",
       "campos":["A.EST_ID, concat(A.EST_NOM,' ',A.EST_NOM2,' ',A.EST_APE,' ',A.EST_APE2) as nombres"] } 
  this.paraleloService.getEstudiantes(param).subscribe(data=>{
    console.log(data.data);
    this.lisEstudiantes = data.data
    
  }) 
  
  }

  onChangeCheck(event:any){
    if (event.target.checked) {
      this.listEstudiantesParalelo.push(new matricula(1,'A','A',event.target.value,this.paralelo.id,1,event.target.name))
      console.log(this.listEstudiantesParalelo);
      
    } else {
      const indexOfObject = this.listEstudiantesParalelo.findIndex((matricula) => {
        return matricula.EST_ID === event.target.value;
      });
      
      console.log(indexOfObject); // 👉️ 1
      
      if (indexOfObject !== -1) {
        this.listEstudiantesParalelo.splice(indexOfObject, 1);
      }
      
      // 👇️ [{id: 1}, {id: 8}]
      console.log(this.listEstudiantesParalelo);
    }
  }

  guardarListaParalelo(){
    console.log('ok');
    
    this.listEstudiantesParalelo.forEach(est => {
      console.log('entra al for');
      
      let param = {
        "tabla": "matricula",
        "campos": ["MTRC_PASE", "MTRC_ESTADO", "EST_ID", "PRLL_ID", "USR_CREADOR_ID"],
        "valores": ["A","A",est.EST_ID,est.PRLL_ID,1]
      }
        this.paraleloService.addMatricula(param).subscribe(data=>{
          console.log('est matriculado a paralelo');
          
        },error=>{
          console.log(error);
          
        })
    });
  }

}
