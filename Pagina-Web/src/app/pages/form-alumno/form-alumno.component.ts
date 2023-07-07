import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  title:string="Nuevo alumno"
  id:any
  listEquiposE=[{nombre:'TV',value:1},{nombre:'Radio',value:2},{nombre:'Computador',value:3,},{nombre:'Celular',value:4}]
  alumno:Alumno={EST_ID:0,EST_DNI:"",EST_NOM:"",EST_NOM2:"",EST_APE:"",EST_APE2:"",EST_FECH_NAC:"",EST_GEN:"",EST_ESTADO:""}
  /*{id:0,ced:"",nom1:"",nom2:"",apeP:"",apeM:"",gen:"",fec_nac:"",img:"",pro:"",canton:"",parroquia:"",codUnicoElec:"",
  direccion:"",nacional:"",etnia:"",nacEtnia:"",comunEtnia:"",neceEspecialHabla:"",neceNoAsoDisc:"",enferCatas:"",conadis:"",
  tv:0,radio:0,pc:0,celular:0,internet:0,obs:""}*/

  constructor(private aRoute:ActivatedRoute,private pageService:PagesService) { 
    this.id =  this.aRoute.snapshot.paramMap.get('id')
    
  }

  ngOnInit(): void {
    if (this.id) {
      this.title = 'Editar aluno'
      this.loadAlumno()      
    }

  }
 
  onChangeCheck(event:any){
    //SI=1 NO=2 
    /*
    let tipo:number = event.target.value;
    console.log(tipo + "value");
    if(tipo==1){
      if(event.target.checked){ 
      this.alumno.tv=1;
      console.log("op si");
      }
      else{ 
      this.alumno.tv=2;
      console.log("op no");
      }
    }
    if(tipo==2){
      if(event.target.checked){ 
      this.alumno.radio=1;
      console.log("op si");
      }
      else{ 
      this.alumno.radio=2;
      console.log("op no");
      }
    }
    if(tipo==3){
      if(event.target.checked){ 
      this.alumno.pc=1;
      console.log("op si");
      }
      else{ 
      this.alumno.pc=2;
      console.log("op no");
      }
    }
    */
  }
  

  addAlumno(){

  }

  loadAlumno() {
    let param = {"tabla": "estudiante","campos":[ "EST_ID","EST_DNI","EST_NOM","EST_NOM2","EST_APE","EST_APE2","EST_FECH_NAC","EST_GEN","EST_ESTADO"],
     "where_nombre": ["EST_ID"],"where_valor":this.id}
    this.pageService.getData(param).subscribe(data=>{
      this.alumno.EST_ID = data[0].EST_ID
      this.alumno.EST_DNI = data[0].EST_DNI
      this.alumno.EST_APE = data[0].EST_APE
      this.alumno.EST_APE2 = data[0].EST_APE2
      this.alumno.EST_NOM = data[0].EST_NOM
      this.alumno.EST_NOM2 = data[0].EST_NOM2
      this.alumno.EST_GEN = data[0].EST_GEN
      this.alumno.EST_FECH_NAC = data[0].EST_FECH_NAC
      this.alumno.EST_ESTADO = data[0].EST_ESTADO
    },error=>{

    })

    }

  }


