import { Component } from '@angular/core';
import { Curso } from 'src/app/modelos/clases/curso.Model';
import { paralelo } from 'src/app/modelos/clases/paralelo.Model';
import { profesor } from 'src/app/modelos/clases/profesor.Model';
import { Asignacion } from 'src/app/modelos/interface/asignacion.interface';
import { Asignatura } from 'src/app/modelos/interface/asignatura.interface';
import { AsignaturaService } from 'src/app/servicios/asignatura.service';
import { CursosService } from 'src/app/servicios/cursos.service';
import { DocentesService } from 'src/app/servicios/docentes.service';
import { ParalelosService } from 'src/app/servicios/paralelos.service';

@Component({
  selector: 'app-asignar-paralelo-profesor',
  templateUrl: './asignar-paralelo-profesor.component.html',
  styleUrls: ['./asignar-paralelo-profesor.component.scss']
})
export class AsignarParaleloProfesorComponent {

  chbxEst: boolean = false
  id:number = 0

  listAsignaturas:Asignatura[]=[]
  listDocentes:profesor[]=[]
  listCursos:Curso[]=[]
  listParalelos:paralelo[]=[]
  asignacion:Asignacion={ASG_PRLL_PRF_ID:0, ASG_PRLL_PRF_ESTADO:'',ASG_ID:0, PRF_ID:0, PRLL_ID:0, USR_CREADOR_ID:1}

  auxCursoId:number=0
  constructor(private cursoService:CursosService, 
    private profesorService:DocentesService, 
    private paraleloService: ParalelosService,
    private asignaturaService:AsignaturaService){

  }
  ngOnInit(): void {
    this.cargarCursos()
    this.cargarAsignaturas()
    this.cargaDocentes()
    
  }

  onChangeCheck(event: any) {
    if (event.target.checked) {
      this.asignacion.ASG_PRLL_PRF_ESTADO = "A";
    } else {
      this.asignacion.ASG_PRLL_PRF_ESTADO = "D";
    }
  }

  cargaDocentes(){
    this.profesorService.getDocentesA().subscribe(data=>{
      this.listDocentes = data.data
    })
  }
  cargarAsignaturas(){
    this.asignaturaService.getAsignaturas().subscribe(data=>{
      this.listAsignaturas = data.data
    })
  }

  cargarCursos(){
    this.cursoService.getCursosA().subscribe(data=>{
      this.listCursos = data.data
      console.log(this.listCursos);
      
    })
  }

  onSelectChange(event:any){

    let idC = event.target.value
    console.log(idC);
    
    this.paraleloService.getParalelosA(idC).subscribe(data=>{
      this.listParalelos= data.data
      console.log(this.listParalelos);
      
    })
  }

  guardarAsignacion(){
    if (this.id>0) {
      //editar
    } else {
      //nuevo
      let param = {"tabla": "asg_prll_prf","campos": ["ASG_PRLL_PRF_ESTADO", "ASG_ID", "PRF_ID", "PRLL_ID", "USR_CREADOR_ID"],
        "valores": [this.asignacion.ASG_PRLL_PRF_ESTADO,this.asignacion.ASG_ID,this.asignacion.PRF_ID,this.asignacion.PRLL_ID,this.asignacion.USR_CREADOR_ID]
      }
      this.asignaturaService.addAsignatura(param).subscribe(data=>{
        console.log('asignacion creada');
        
      })
    }
  }

}
