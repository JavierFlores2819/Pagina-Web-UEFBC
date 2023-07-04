import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Alumno } from 'src/app/models/alumno.model';


@Component({
  selector: 'app-asignar-paralelo-est',
  templateUrl: './asignar-paralelo-est.component.html',
  styleUrls: ['./asignar-paralelo-est.component.css'],
  
})
export class AsignarParaleloEstComponent implements OnInit {

  //cambiar de any a su respectivo model
  listCursos:any[]=[];
  listParalelos:any[]=[];

  typesOfShoes:Alumno[]= []
  listEstParal:number[]=[]
  
  constructor() { 
    this.loadCursos();

  }

  ngOnInit(): void {
    
  }

  loadCursos(){
    return this.listCursos
  }
  generarLista(){
    this.typesOfShoes=[{id:1,ced:"0123",nom1:"CARLOS",nom2:"ANDRES",apeP:"VILLACRES",apeM:"VILLACIS",gen:"",fec_nac:"",img:"",pro:"",canton:"",parroquia:"",codUnicoElec:"",
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
    return this.typesOfShoes
  }
  save(object:any){
    try {
      for (let i = 0; i < object.length; i++) {
        let est:number = object[i].value;
        this.listEstParal.push(est)
        console.log(est);
      }    
      console.log(this.listEstParal);
    } catch (error) {
      console.log(error);
      
    }

  }
  undo(){

  }

}
