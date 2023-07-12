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
    USR_CREADOR_ID: 0,EST_PRO:"",EST_CAN:"",EST_PARR:"",EST_CUE:"",EST_DIR:"",EST_NAC:"",EST_ETN:"",EST_NAC_ETN:"",EST_COM_ETN:"",NEE_DIS:"N", 
    NES_NAD:"N",ENF_CAT:"N",CONADIS:"N",EST_INTE:"N",EST_TV:"N",EST_RAD:"N",EST_PC:"N",EST_CEL:"N" }
  
  id:any
  titulo:string="Crear Estudiante";  
  listEquiposE=[{nombre:'Internet',value:5},{nombre:'TV',value:1},{nombre:'Radio',value:2},{nombre:'Computador',value:3,},{nombre:'Celular',value:4}]
  lisNecEdu=[{nombre:'Tiene necesidad educativa especial asociada a la discapacidad:',value:1},
  {nombre:'Tiene necesidad educativa especial no asociada a la discapacidad:',value:2},
  {nombre:'Posee enfermedad catastrófica:',value:3},
  {nombre:'Tiene carnet de CONADIS:',value:4}]

    constructor(private aRoute:ActivatedRoute,private estService:EstudiantesService){

    }

    ngOnInit(): void {
      if (this.id) {
        this.titulo = 'Editar Estudiante'
      }
      
    }
    onChangeCheck(event:any){
      if(event.target.checked){ 
      this.estudiante.EST_ESTADO="A";
      }else{
        this.estudiante.EST_ESTADO="D";
      }
    }

    onChangeCheckE(event:any){
      //SI=1 NO=2 
      
      let tipo:number = event.target.value;
      console.log(tipo + "value");
      if(tipo==1){
        if(event.target.checked){ 
        this.estudiante.EST_TV="S";
        console.log("op si");
        }
        else{ 
        this.estudiante.EST_TV="N";
        console.log("op no");
        }
      }
      if(tipo==2){
        if(event.target.checked){ 
        this.estudiante.EST_RAD="S";
        console.log("op si");
        }
        else{ 
        this.estudiante.EST_RAD="N";
        console.log("op no");
        }
      }
      if(tipo==3){
        if(event.target.checked){ 
        this.estudiante.EST_PC="S";
        console.log("op si");
        }
        else{ 
        this.estudiante.EST_PC="N";
        console.log("op no");
        }
      }
      if (tipo==4) {
        if (event.target.checked) {
          this.estudiante.EST_CEL="S";
        console.log("op si");
        } else {
          this.estudiante.EST_CEL="N";
          console.log("op no");
        }
      }if (tipo==5) {
        if (event.target.checked) {
          this.estudiante.EST_INTE="S";
        console.log("op si");
        } else {
          this.estudiante.EST_INTE="N";
          console.log("op no");
        }
      }
      
    }

    onChangeCheckN(event:any){
      //SI=1 NO=2 
      
      let tipo:number = event.target.value;
      console.log(tipo + "value");
      if(tipo==1){
        if(event.target.checked){ 
        this.estudiante.EST_TV="S";
        console.log("op si");
        }
        else{ 
        this.estudiante.EST_TV="N";
        console.log("op no");
        }
      }
      if(tipo==2){
        if(event.target.checked){ 
        this.estudiante.EST_RAD="S";
        console.log("op si");
        }
        else{ 
        this.estudiante.EST_RAD="N";
        console.log("op no");
        }
      }
      if(tipo==3){
        if(event.target.checked){ 
        this.estudiante.EST_PC="S";
        console.log("op si");
        }
        else{ 
        this.estudiante.EST_PC="N";
        console.log("op no");
        }
      }
      if (tipo==4) {
        if (event.target.checked) {
          this.estudiante.EST_CEL="S";
        console.log("op si");
        } else {
          this.estudiante.EST_CEL="N";
          console.log("op no");
        }
      }
      
    }
    guardarEstudiante(){
      if (this.id) {
        this.estService.updateEstudiante().subscribe(data=>{

        })
        
      } else {
        let param= {
          "tabla": "estudiante",
          "campos": ["EST_DNI","EST_NOM","EST_NOM2","EST_APE","EST_APE2","EST_FECH_NAC","EST_GEN","EST_ESTADO", 
                     "REP_ID","USR_CREADOR_ID","EST_PRO","EST_CAN","EST_PARR","EST_CUE","EST_DIR","EST_NAC", 
                     "EST_ETN","EST_NAC_ETN","EST_COM_ETN","NEE_DIS","NES_NAD","ENF_CAT","CONADIS","EST_INTE",
                     "EST_TV","EST_RAD","EST_PC","EST_CEL"],
          "valores": [this.estudiante.EST_DNI, this.estudiante.EST_NOM, this.estudiante.EST_NOM2, this.estudiante.EST_APE, 
            this.estudiante.EST_APE2,this.estudiante.EST_FECH_NAC,this.estudiante.EST_GEN, this.estudiante.EST_ESTADO,
            this.estudiante.REP_ID, this.estudiante.USR_CREADOR_ID, this.estudiante.EST_PRO, this.estudiante.EST_CAN,this.estudiante.EST_PARR,
            this.estudiante.EST_CUE, this.estudiante.EST_DIR,this.estudiante.EST_NAC,this.estudiante.EST_ETN,this.estudiante.EST_NAC_ETN,
            this.estudiante.EST_COM_ETN,this.estudiante.NEE_DIS,this.estudiante.NES_NAD,this.estudiante.ENF_CAT,this.estudiante.CONADIS,
            this.estudiante.EST_INTE,this.estudiante.EST_TV,this.estudiante.EST_RAD,this.estudiante.EST_PC,this.estudiante.EST_CEL ]
        }
        this.estService.addEstudiante(param).subscribe(data=>{
          console.log('estu creado');
          
        })
      }
    }

}
