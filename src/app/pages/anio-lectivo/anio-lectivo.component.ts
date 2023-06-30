import { Component, OnInit } from '@angular/core';
import { AnioLectivo } from 'src/app/models/anioLectivo';

@Component({
  selector: 'app-anio-lectivo',
  templateUrl: './anio-lectivo.component.html',
  styleUrls: ['./anio-lectivo.component.css']
})
export class AnioLectivoComponent implements OnInit {

  title:string = 'Año lectivo'
  listAnios:AnioLectivo[];
  constructor() {
    this.loadAñosLectivo()
   }

  ngOnInit(): void {
  }

  loadAñosLectivo(){
 
    this.listAnios=[{id:1,fecInicio:'1/9/2020',fecFin:'1/7/2021',numPar:2,numQui:2,inicial:true,basica:true,bachiller:true},
                    {id:2,fecInicio:'1/9/2021',fecFin:'1/7/2022',numPar:2,numQui:2,inicial:false,basica:true,bachiller:true},
                    {id:3,fecInicio:'1/9/2022',fecFin:'1/7/2023',numPar:3,numQui:2,inicial:false,basica:true,bachiller:false},
  ]
    return this.listAnios
  }

}
