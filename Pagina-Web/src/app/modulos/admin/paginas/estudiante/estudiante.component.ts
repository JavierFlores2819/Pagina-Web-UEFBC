import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { estudiante } from 'src/app/modelos/clases/estudiante.Model';
import { representante } from 'src/app/modelos/clases/representante.Model';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';
import { RepresentantesService } from 'src/app/servicios/representantes.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent {

  repre:representante={REP_ID:0,REP_DNI:"",REP_NOM: "",REP_NOM2: "",REP_APE: "",REP_APE2: "",REP_DIR:"",REP_CEL:"",REP_TEL:"",REP_MAIL:"",REP_REL_FAM:"",REP_ESTADO:"D",
    USR_CREADOR_ID: 1}
  estudiante:estudiante={EST_ID:0,EST_DNI:"",EST_NOM:"",EST_NOM2:"",EST_APE:"",EST_APE2:"",EST_FECH_NAC:"",EST_GEN:"",EST_ESTADO:"A",REP_ID:0,REL_EST_REP:"PAPA",
    USR_CREADOR_ID: 1,EST_PRO:"1",EST_CAN:"1",EST_PARR:"1",EST_CUE:"",EST_DIR:"",EST_NAC:"",EST_ETN:"1",EST_NAC_ETN:"",EST_COM_ETN:"",NEE_DIS:"N", 
    NES_NAD:"N",ENF_CAT:"N",CONADIS:"N",EST_INTE:"N",EST_TV:"N",EST_RAD:"N",EST_PC:"N",EST_CEL:"N" }
  
    //nomR:string = `${this.repre.REP_APE} ${this.repre.REP_APE2} ${this.repre.REP_NOM} ${this.repre.REP_NOM2}`
  id:string | null = '0'
  titulo:string="Crear Estudiante";  
  listEquiposE=[{nombre:'Internet',value:5},{nombre:'TV',value:1},{nombre:'Radio',value:2},{nombre:'Computador',value:3,},{nombre:'Celular',value:4}]
  lisNecEdu=[{nombre:'Tiene necesidad educativa especial asociada a la discapacidad:',value:1},
  {nombre:'Tiene necesidad educativa especial no asociada a la discapacidad:',value:2},
  {nombre:'Posee enfermedad catastrófica:',value:3},
  {nombre:'Tiene carnet de CONADIS:',value:4}]

    constructor(private aRoute:ActivatedRoute,private estService:EstudiantesService, private repService:RepresentantesService){
     this.id =  this.aRoute.snapshot.paramMap.get('estudiante')
    }

    ngOnInit(): void {
      console.log(this.id);
      
      if (this.id!='crear') {
        this.titulo = 'Editar Estudiante'
        this.cargarEstudiante()       
        
      }
      
    }

    buscarR(value:string){
      if (this.id!='crear') {
       // let nombre  = "REP_ID"

        let param ={
          "tabla": "representante",
          "campos": ["REP_ID", "REP_DNI", "REP_NOM","REP_NOM2", "REP_APE", "REP_APE2"
          ],"where": [
              {
                  "nombre": "REP_ID",
                  "valor": value,
                  "condicion":"=",
                  "tipo": "&&"
              }
          ]
      }
        this.repService.getRepresentante(param).subscribe(data=>{
          this.repre.REP_ID = data.data[0].REP_ID
          this.repre.REP_DNI = data.data[0].REP_DNI
          this.repre.REP_NOM = data.data[0].REP_NOM
          this.repre.REP_NOM2 = data.data[0].REP_NOM2
          this.repre.REP_APE = data.data[0].REP_APE
          this.repre.REP_APE2 = data.data[0].REP_APE2
        })

      } else {
              
      let param ={
        "tabla": "representante",
        "campos": ["REP_ID", "REP_DNI", "REP_NOM","REP_NOM2", "REP_APE", "REP_APE2"
        ],"where": [
            {
                "nombre": "REP_DNI",
                "valor": value,
                "condicion":"=",
                "tipo": "&&"
            }
        ]
    }
      this.repService.getRepresentante(param).subscribe(data=>{
        this.repre.REP_ID = data.data[0].REP_ID
        this.repre.REP_DNI = data.data[0].REP_DNI
        this.repre.REP_NOM = data.data[0].REP_NOM
        this.repre.REP_NOM2 = data.data[0].REP_NOM2
        this.repre.REP_APE = data.data[0].REP_APE
        this.repre.REP_APE2 = data.data[0].REP_APE2
      })
        
      }
      console.log(value);

    }

    addRepresentante(){
      this.estudiante.REP_ID = this.repre.REP_ID 
      console.log(this.estudiante.REP_ID);
      
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
      if (this.id!='crear') {
        this.estService.updateEstudiante().subscribe(data=>{

        })
        
      } else {
        let param= {
          "tabla": "estudiante",
          "campos": ["EST_DNI","EST_NOM","EST_NOM2","EST_APE","EST_APE2","EST_FECH_NAC","EST_GEN","EST_ESTADO", 
                     "REP_ID","REL_EST_REP","USR_CREADOR_ID","EST_PRO","EST_CAN","EST_PARR","EST_CUE","EST_DIR","EST_NAC", 
                     "EST_ETN","EST_NAC_ETN","EST_COM_ETN","NEE_DIS","NES_NAD","ENF_CAT","CONADIS","EST_INTE",
                     "EST_TV","EST_RAD","EST_PC","EST_CEL"],
          "valores": [this.estudiante.EST_DNI, this.estudiante.EST_NOM, this.estudiante.EST_NOM2, this.estudiante.EST_APE, 
            this.estudiante.EST_APE2,this.estudiante.EST_FECH_NAC,this.estudiante.EST_GEN, this.estudiante.EST_ESTADO,
            this.estudiante.REP_ID,this.estudiante.REL_EST_REP, this.estudiante.USR_CREADOR_ID, this.estudiante.EST_PRO, this.estudiante.EST_CAN,this.estudiante.EST_PARR,
            this.estudiante.EST_CUE, this.estudiante.EST_DIR,this.estudiante.EST_NAC,this.estudiante.EST_ETN,this.estudiante.EST_NAC_ETN,
            this.estudiante.EST_COM_ETN,this.estudiante.NEE_DIS,this.estudiante.NES_NAD,this.estudiante.ENF_CAT,this.estudiante.CONADIS,
            this.estudiante.EST_INTE,this.estudiante.EST_TV,this.estudiante.EST_RAD,this.estudiante.EST_PC,this.estudiante.EST_CEL ]
        }
        this.estService.addEstudiante(param).subscribe(data=>{
          console.log('estu creado');
          
        })
      }
    }

    cargarEstudiante(){
      let param={
        "tabla": "estudiante",
        "campos": ["EST_ID","EST_DNI","EST_NOM","EST_NOM2","EST_APE","EST_APE2","EST_FECH_NAC","EST_GEN","EST_ESTADO","REP_ID","REL_EST_REP","USR_CREADOR_ID", 
                 "EST_PRO", "EST_CAN", "EST_PARR", "EST_CUE", "EST_DIR", "EST_NAC", "EST_ETN", "EST_NAC_ETN", "EST_COM_ETN", "NEE_DIS", "NES_NAD", "ENF_CAT", 
                 "CONADIS", "EST_INTE", "EST_TV", "EST_RAD", "EST_PC", "EST_CEL"],
        "where": [
            {
                "nombre": "EST_ID",
                "valor": this.id,
                "condicion":"=",
                "tipo": "&&"
            }
        ]
    }
      this.estService.getEstudiante(param).subscribe(data=>{
        this.estudiante.EST_DNI=data.data[0].EST_DNI
        this.estudiante.EST_NOM=data.data[0].EST_NOM
        this.estudiante.EST_NOM2= data.data[0].EST_NOM2
        this.estudiante.EST_APE=data.data[0].EST_APE
        this.estudiante.EST_APE2=data.data[0].EST_APE2
        this.estudiante.EST_FECH_NAC=data.data[0].EST_FECH_NAC
        this.estudiante.EST_GEN=data.data[0].EST_GEN
        this.estudiante.EST_ESTADO=data.data[0].EST_ESTADO
        this.estudiante.REP_ID=data.data[0].REP_ID
        this.estudiante.REL_EST_REP=data.data[0].REL_EST_REP
        this.estudiante.USR_CREADOR_ID=data.data[0].USR_CREADOR_ID
        this.estudiante.EST_PRO=data.data[0].EST_PRO
        this.estudiante.EST_CAN=data.data[0].EST_CAN
        this.estudiante.EST_PARR=data.data[0].EST_PARR
        this.estudiante.EST_CUE=data.data[0].EST_CUE
        this.estudiante.EST_DIR=data.data[0].EST_DIR
        this.estudiante.EST_NAC=data.data[0].EST_NAC
        this.estudiante.EST_ETN=data.data[0].EST_ETN
        this.estudiante.EST_NAC_ETN=data.data[0].EST_NAC_ETN
        this.estudiante.EST_COM_ETN=data.data[0].EST_COM_ETN
        this.estudiante.NEE_DIS=data.data[0].NEE_DIS
        this.estudiante.NES_NAD=data.data[0].NES_NAD
        this.estudiante.ENF_CAT=data.data[0].ENF_CAT
        this.estudiante.CONADIS=data.data[0].CONADIS
        this.estudiante.EST_INTE=data.data[0].EST_INTE
        this.estudiante.EST_TV=data.data[0].EST_TV
        this.estudiante.EST_RAD=data.data[0].EST_RAD
        this.estudiante.EST_PC=data.data[0].EST_PC
        this.estudiante.EST_CEL=data.data[0].EST_CEL
        this.buscarR(data.data[0].REP_ID.toString())
      })
      console.log(this.estudiante.REP_ID);
      
      
    }

}
