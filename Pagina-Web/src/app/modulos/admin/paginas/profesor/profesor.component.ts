import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { profesor } from 'src/app/modelos/clases/profesor.Model';
import { DocentesService } from 'src/app/servicios/docentes.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent {

  titulo="Nuevo Docente"
  id:any
  docente:profesor ={PRF_ID:0,PRF_DNI:"",PRF_NOM:"",PRF_NOM2:"",PRF_APE:"",PRF_APE2:"",PRF_FECH_NAC:"",PRF_GEN:"",PRF_DIR:"",PRF_CEL:"",
    PRF_TEL:"",PRF_MAIL:"",PRF_FECH_INGR_INST:"",PRF_FECH_INGR_MAG:"",PRF_ESTADO:"D",USR_CREADOR_ID:1,FECHA_CREACION:""}
 
    constructor(private docenteService:DocentesService, private aRoute:ActivatedRoute){
      this.id = this.aRoute.snapshot.paramMap.get('profesor')
    }

  ngOnInit(): void {
    if (this.id) {
      this.titulo = "Editar Docente"
      this.cargarProfesor()
    }
    
  }

  cargarProfesor(){
    let param={"tabla": "profesor",
      "campos": ["PRF_ID","PRF_DNI","PRF_NOM","PRF_NOM2","PRF_APE","PRF_APE2","PRF_FECH_NAC","PRF_GEN","PRF_DIR","PRF_CEL","PRF_TEL","PRF_MAIL","PRF_FECH_INGR_INST", "PRF_FECH_INGR_MAG", "PRF_ESTADO", "USR_CREADOR_ID"
      ], "where": [
          {
              "nombre": "PRF_ID", "valor": this.id, "condicion":"=","tipo": "&&"
          }
      ]
  }
  
    this.docenteService.getDocente(param).subscribe(data=>{
        this.docente.PRF_ID = data.data[0].PRF_ID
        this.docente.PRF_DNI = data.data[0].PRF_DNI
        this.docente.PRF_NOM = data.data[0].PRF_NOM
        this.docente.PRF_NOM2 = data.data[0].PRF_NOM2
        this.docente.PRF_APE = data.data[0].PRF_APE
        this.docente.PRF_APE2 = data.data[0].PRF_APE2
        this.docente.PRF_FECH_NAC = data.data[0].PRF_FECH_NAC
        this.docente.PRF_GEN = data.data[0].PRF_GEN
        this.docente.PRF_DIR = data.data[0].PRF_DIR
        this.docente.PRF_CEL = data.data[0].PRF_CEL
        this.docente.PRF_TEL = data.data[0].PRF_TEL
        this.docente.PRF_MAIL = data.data[0].PRF_MAIL
        this.docente.PRF_FECH_INGR_INST = data.data[0].PRF_FECH_INGR_INST
        this.docente.PRF_FECH_INGR_MAG = data.data[0].PRF_FECH_INGR_MAG
        this.docente.PRF_ESTADO = data.data[0].PRF_ESTADO
        this.docente.USR_CREADOR_ID = data.data[0].USR_CREADOR_ID
    })
  }
  
  onChangeCheck(event:any){
    if(event.target.checked){ 
    this.docente.PRF_ESTADO="A";
    }else{
      this.docente.PRF_ESTADO="D";
    }
  }

  guardarDocente(){
    if (this.id) {
      //editar
    } else {
      // nuevo
      let param ={
        "tabla": "profesor",
        "campos": ["PRF_DNI", "PRF_NOM",  "PRF_NOM2", "PRF_APE", "PRF_APE2", "PRF_FECH_NAC", "PRF_GEN", "PRF_DIR", "PRF_CEL", "PRF_TEL", "PRF_MAIL", "PRF_FECH_INGR_INST", "PRF_FECH_INGR_MAG", "PRF_ESTADO", "USR_CREADOR_ID"],
        "valores": [this.docente.PRF_DNI,
                    this.docente.PRF_NOM,
                    this.docente.PRF_NOM2,
                    this.docente.PRF_APE,
                    this.docente.PRF_APE2,
                    this.docente.PRF_FECH_NAC,
                    this.docente.PRF_GEN,
                    this.docente.PRF_DIR,
                    this.docente.PRF_CEL,
                    this.docente.PRF_TEL,
                    this.docente.PRF_MAIL,
                    this.docente.PRF_FECH_INGR_INST,
                    this.docente.PRF_FECH_INGR_MAG,
                    this.docente.PRF_ESTADO,
                    this.docente.USR_CREADOR_ID]
      }
      this.docenteService.addDocente(param).subscribe(data=>{
        console.log('profesor creado');
        
      },error=>{
        console.log(error);
        
      })
    }
  }

}
