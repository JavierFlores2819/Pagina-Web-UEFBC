import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
import { Curso } from 'src/app/models/curso.model';
import { Paralelo } from 'src/app/models/paralelo.model';
import { PagesService } from 'src/app/services/pages.service';


@Component({
  selector: 'app-asignar-paralelo-est',
  templateUrl: './asignar-paralelo-est.component.html',
  styleUrls: ['./asignar-paralelo-est.component.css'],
  
})
export class AsignarParaleloEstComponent implements OnInit {

  @Input() curso:Curso={CRS_ID:0,CRS_NOM:0,CRS_TIP:"",CRS_ESTADO:""}
  @Input() paralelo:Paralelo
  //cambiar de any a su respectivo model
  listParalelos:Paralelo[]=[];

  listEstCurso:Alumno[]= []
  listEstParal:number[]=[]
  
  constructor(private pageService:PagesService,private route:Router) { 
    this.loadParalelosCurso();
    this.generarLista();
  }

  ngOnInit(): void {
    
  }



  //estudiantes aprobados del anio lectivo actual, segun curso
  generarLista(){
    let param= {"tabla": "matricula","campos": ["MTRC_ID", "MTRC_PASE", "MTRC_ESTADO", "EST_ID", "PRLL_ID", "USR_CREADOR_ID"],"where_nombre": ["PRLL_ID"],
      "where_valor": this.curso.CRS_ID
  } 
    try {
      this.pageService.getData(param).subscribe(data=>{
        this.listEstCurso = data
        console.log('ok');
        
      },error=>{
        console.log(error);
        
      })
    } catch (error) {
      console.log(error);
      
    }

    /*this.listEstCurso=[{id:1,ced:"0123",nom1:"CARLOS",nom2:"ANDRES",apeP:"VILLACRES",apeM:"VILLACIS",gen:"",fec_nac:"",img:"",pro:"",canton:"",parroquia:"",codUnicoElec:"",
    direccion:"",nacional:"",etnia:"",nacEtnia:"",comunEtnia:"",neceEspecialHabla:"",neceNoAsoDisc:"",enferCatas:"",conadis:"",
    tv:0,radio:0,pc:0,celular:0,internet:0,obs:""}, 
    {id:2,ced:"12553456",nom1:"MARIA",nom2:"MERCEDES",apeP:"ARIAS",apeM:"BARRERA",gen:"",fec_nac:"",img:"",pro:"",canton:"",parroquia:"",codUnicoElec:"",
    direccion:"",nacional:"",etnia:"",nacEtnia:"",comunEtnia:"",neceEspecialHabla:"",neceNoAsoDisc:"",enferCatas:"",conadis:"",
    tv:0,radio:0,pc:0,celular:0,internet:0,obs:""}, 
    {id:3,ced:"1231231",nom1:"JUAN",nom2:"ANDRES",apeP:"PEREZ",apeM:"PEREZ",gen:"",fec_nac:"",img:"",pro:"",canton:"",parroquia:"",codUnicoElec:"",
    direccion:"",nacional:"",etnia:"",nacEtnia:"",comunEtnia:"",neceEspecialHabla:"",neceNoAsoDisc:"",enferCatas:"",conadis:"",
    tv:0,radio:0,pc:0,celular:0,internet:0,obs:""}, 
    {id:4,ced:"12321312",nom1:"MARIA",nom2:"ARIANA",apeP:"VILLAFUERTE",apeM:"PEREZ",gen:"",fec_nac:"",img:"",pro:"",canton:"",parroquia:"",codUnicoElec:"",
    direccion:"",nacional:"",etnia:"",nacEtnia:"",comunEtnia:"",neceEspecialHabla:"",neceNoAsoDisc:"",enferCatas:"",conadis:"",
    tv:0,radio:0,pc:0,celular:0,internet:0,obs:""}]
    return this.listEstCurso*/
  }

  //Paralelos creados a ese curso
  loadParalelosCurso(){
    let param ={"tabla": "paralelo","campos":["PRLL_ID","PRLL_NOM","PRLL_ESTADO","CRS_ID","PRF_ID","AL_ID","USR_CREADOR_ID"],"where_nombre": ["CRS_ID"],"where_valor": this.curso.CRS_ID}
    try {
      this.pageService.getData(param).subscribe(data=>{
        this.listParalelos = data
        console.log(this.listParalelos);
        
      },error=>{
        console.log(error);
        
      })
    } catch (error) {
      console.log(error);
      
    }
  }
  //negerar lista estudiantes por paralelo
  generarListaParalelo(object:any):boolean{
    try {
      for (let i = 0; i < object.length; i++) {
        let est:number = object[i].value;
        this.listEstParal.push(est)
        console.log(est);
      }    
      console.log(this.listEstParal);
      return true;

    } catch (error) {
      console.log(error);
      return false;
      
    }
    
  }
  //guarda en bae de datos la lista generada
  addListaParalelo(){
    let param=``
      this.pageService.addData(param).subscribe(data=>{
        console.log('ok');
        this.route.navigate(["cursos"])
      },error=>{
        console.log(error);
        
      })
    
  }
  limpiarSeleccion(){

  }

}
