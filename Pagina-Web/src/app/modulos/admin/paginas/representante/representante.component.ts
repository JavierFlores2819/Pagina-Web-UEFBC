import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { representante } from 'src/app/modelos/clases/representante.Model';
import { RepresentantesService } from 'src/app/servicios/representantes.service';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.scss']
})
export class RepresentanteComponent {
  titulo="Crear representante"
  id:any
  repre:representante={REP_ID:0,REP_DNI:"",REP_NOM: "",REP_NOM2: "",REP_APE: "",REP_APE2: "",REP_DIR:"",REP_CEL:"",REP_TEL:"",REP_MAIL:"",REP_REL_FAM:"",REP_ESTADO:"D",
    USR_CREADOR_ID: 1}
  constructor(private aRoute:ActivatedRoute, private representanteService:RepresentantesService){
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    if (this.id) {
      this.titulo = "Editar Representante"
    }
    
  }

  

  onChangeCheck(event:any){
    if(event.target.checked){ 
    this.repre.REP_ESTADO="A";
    }else{
      this.repre.REP_ESTADO="D";
    }
  }

  guardarRepresentante(){
    if (this.id) {
      //editar
      let param =""
      /*this.representanteService.updateRepresntante(param).suscribe(data=>{

      })*/
    } else {
      //nuevo
      let param = {
        "tabla": "representante",
        "campos": ["REP_DNI", "REP_NOM","REP_NOM2", "REP_APE", "REP_APE2", "REP_DIR","REP_CEL","REP_TEL","REP_MAIL","REP_REL_FAM", "REP_ESTADO",
          "USR_CREADOR_ID"],
        "valores": [this.repre.REP_DNI,
                    this.repre.REP_NOM,
                    this.repre.REP_NOM2,
                    this.repre.REP_APE,
                    this.repre.REP_APE2,
                    this.repre.REP_DIR,
                    this.repre.REP_CEL,
                    this.repre.REP_TEL,
                    this.repre.REP_MAIL,
                    this.repre.REP_REL_FAM,
                    this.repre.REP_ESTADO,
                    this.repre.USR_CREADOR_ID]
      }
      this.representanteService.addRepresentante(param).subscribe(data=>{
        console.log('repre creado');
        
      })
    }
  }

}
