import { Component, OnInit, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnioLectivo } from 'src/app/models/anioLectivo';
import { Curso } from 'src/app/models/curso.model';
import { Paralelo } from 'src/app/models/paralelo.model';
import { Profesor } from 'src/app/models/profesor.interface';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-paralelos',
  templateUrl: './paralelos.component.html',
  styleUrls: ['./paralelos.component.css']
})
export class ParalelosComponent implements OnInit {

  //@Output() curso1:EventEmitter<Curso> = new EventEmitter();
  curso:Curso={CRS_ID:0,CRS_NOM:0,CRS_TIP:"",CRS_ESTADO:""}
  profeor:Profesor={PRF_ID:0,PRF_DNI:"",PRF_NOM:"",PRF_NOM2:"",PRF_APE:"",PRF_APE2:""}
  anioL:AnioLectivo ={"AL_ID":0,"AL_INI":"","AL_FIN": "","AL_PRD": 0,"AL_SUB_PRD": 0,"AL_ESTADO":""}

  paralelo:Paralelo = {PRLL_ID:0,PRLL_NOM:"",PRLL_ESTADO:"A",CRS_ID:0,PRF_ID:0,AL_ID:0,USR_CREADOR_ID:0}
  listParalelos:any[]=[];
  listProfesores:Profesor[] =[]
  id:string
  
  constructor(private aRoute:ActivatedRoute,
    private pageService:PagesService) {
    this.id =  this.aRoute.snapshot.paramMap.get('id')
    this.loadCurso()
   }

  ngOnInit(): void {
    
    this.loadParalelosCurso();
    this.loadProfesroes();
  }

  loadCurso(){
      console.log(this.id);
    
      let param = {"tabla": "curso","campos":["CRS_ID","CRS_NOM","CRS_TIP","CRS_ESTADO"],
                  "where_nombre":["CRS_ID"],"where_valor":this.id}
      this.pageService.getData(param).subscribe((data:Curso)=>{
        console.log(data);
       //this.curso = data[0]
        this.curso.CRS_ID = data[0].CRS_ID;
        this.curso.CRS_NOM = data[0].CRS_NOM
        this.curso.CRS_TIP = data[0].CRS_TIP
        this.curso.CRS_ESTADO = data[0].CRS_ESTADO
        console.log(this.curso);
        
      })
    
  }
  loadParalelosCurso(){
    let params={"tabla": "paralelo","campos":["PRLL_ID","PRLL_NOM","PRLL_ESTADO","CRS_ID","PRF_ID","AL_ID","USR_CREADOR_ID"],
     "where_nombre": ["CRS_ID"],
      "where_valor": this.id
    }
    this.pageService.getData(params).subscribe(data=>{
      this.listParalelos = data
      console.log('ok'); 
    },error=>{
      console.log(error);
      
    })
  }
    //cargar profesores activos
  loadProfesroes(){
      let params =  {"tabla": "profesor","campos": ["PRF_ID","PRF_NOM","PRF_NOM2","PRF_APE","PRF_APE2"],"where_nombre": ["PRF_ESTADO"],"where_valor": "A"} 
      this.pageService.getData(params).subscribe(data=>{
        this.listProfesores = data
      })
  }
  loadAnioLectivoA(){
    let param = {"tabla": "anio_lectivo","campos": ["AL_ID","AL_INI","AL_FIN","AL_PRD","AL_SUB_PRD","AL_ESTADO"],"where_nombre": ["AL_ESTADO"],"where_valor": "A"}
    this.pageService.getData(param).subscribe(data=>{
      this.anioL = data
    })
  }
  //crear nuevo paralelo
  addParalelo(){
    this.paralelo.CRS_ID = parseInt(this.id);
    this.paralelo.AL_ID = this.anioL.AL_ID
    console.log(this.paralelo);
    
    this.loadCurso()
  }

  //capturar paralelo
  capturar(){
    
  }

}
