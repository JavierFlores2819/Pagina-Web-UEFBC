import { Component, OnInit } from '@angular/core';
import { AnioLectivo } from 'src/app/models/anioLectivo';

@Component({
  selector: 'app-form-anio-l',
  templateUrl: './form-anio-l.component.html',
  styleUrls: ['./form-anio-l.component.css']
})
export class FormAnioLComponent implements OnInit {

  /*listSeccion=[{nombre:"Inicial",value:1},
              {nombre:"Básica",value:2},
              {nombre:"Bachiller",value:3}]*/
  anioL:AnioLectivo={"AL_ID":0,"AL_INI":"","AL_FIN": "","AL_PRD": 0,"AL_SUB_PRD": 0,"AL_ESTADO":"A"}
 
  constructor() { }

  ngOnInit(): void {
  }

/*  onChangeCheck(event:any){
    let tipo:number = event.target.value;
    console.log(tipo + "value");
    if(tipo==1){
      if(event.target.checked){ 
      this.anioL.inicial=true;
      console.log("op si");
      }
      else{ 
      this.anioL.inicial=false;
      console.log("op no");
      }
    }
    if(tipo==2){
      if(event.target.checked){ 
      this.anioL.basica=true;
      console.log("op si");
      }
      else{ 
      this.anioL.basica=false;
      console.log("op no");
      }
    }
    if(tipo==3){
      if(event.target.checked){ 
      this.anioL.bachiller=true;
      console.log("op si");
      }
      else{ 
      this.anioL.bachiller=false;
      console.log("op no");
      }
    }

  }*/

  addAnio(){
    
  }

}
