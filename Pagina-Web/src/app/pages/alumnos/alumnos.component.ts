import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  title:string ="Alumnos"
  constructor() { }

  Alumno:Alumno[]
/*{id:2,ced:"15554789632",nom:"andres jairo",ape:"villacres benitez",gen:"M",fec_nac:"12/12/1997",pro:"Tungurahua",
                  canton:"Salasaca",parroquia:"Salasaca",codUnicoElec:"0215647892",direccion:"Calle principal frente a la Escuela",
                  nacional:"Ecuatorina",etnia:"Mestizo",nacEtnia:"Quichua",comunEtnia:"Salasaca",neceEspecialHabla:"Si",neceNoAsoDisc:"No",
                  enferCatas:"Si",conadis:"No"}*/
                
  ngOnInit(): void {
  }

}
