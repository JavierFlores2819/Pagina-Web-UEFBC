import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  title:string ="Alumnos"
  constructor(private pageService:PagesService) { }

  listAlumno:Alumno[]
/*{id:2,ced:"15554789632",nom:"andres jairo",ape:"villacres benitez",gen:"M",fec_nac:"12/12/1997",pro:"Tungurahua",
                  canton:"Salasaca",parroquia:"Salasaca",codUnicoElec:"0215647892",direccion:"Calle principal frente a la Escuela",
                  nacional:"Ecuatorina",etnia:"Mestizo",nacEtnia:"Quichua",comunEtnia:"Salasaca",neceEspecialHabla:"Si",neceNoAsoDisc:"No",
                  enferCatas:"Si",conadis:"No"}*/
                
  ngOnInit(): void {
  }
  //EST_ID:  EST_DNI:   EST_NOM:string   EST_NOM2:string  EST_APE:string  EST_APE2:string  EST_FECH_NAC:string  EST_GEN:string  EST_ESTADO:string
  buscar(value:string){
    let param ={"tabla": "estudiante","campos":["EST_ID","EST_DNI","EST_NOM","EST_NOM2","EST_APE","EST_APE","EST_FECH_NAC","EST_GEN","EST_ESTADO"],"where_nombre": ["EST_DNI"],"where_valor":value}
    this.pageService.getData(param).subscribe(data=>{
      this.listAlumno = data
    })
  }

}
