import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  title:string="Alumno nuevo"
  listEquiposE=[{nombre:'TV',value:1},{nombre:'Radio',value:2},{nombre:'Computador',value:3,},{nombre:'Celular',value:4}]
  alumno:Alumno={id:0,ced:"",nom1:"",nom2:"",apeP:"",apeM:"",gen:"",fec_nac:"",img:"",pro:"",canton:"",parroquia:"",codUnicoElec:"",
  direccion:"",nacional:"",etnia:"",nacEtnia:"",comunEtnia:"",neceEspecialHabla:"",neceNoAsoDisc:"",enferCatas:"",conadis:"",
  tv:0,radio:0,pc:0,celular:0,internet:0,obs:""}

  constructor() { }

  ngOnInit(): void {
  }
  onChangeCheck(event:any){
    //SI=1 NO=2 
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

  }
  

  addAlumno(){

  }
}
