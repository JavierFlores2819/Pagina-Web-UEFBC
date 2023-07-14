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
  chbxEst:boolean =false

  repre:representante={REP_ID:0,REP_DNI:"",REP_NOM: "",REP_NOM2: "",REP_APE: "",REP_APE2: "",REP_DIR:"",REP_CEL:"",REP_TEL:"",REP_MAIL:"",REP_ESTADO:"D",
    USR_CREADOR_ID: 1}
  constructor(private aRoute:ActivatedRoute, private representanteService:RepresentantesService){
    this.id = this.aRoute.snapshot.paramMap.get('representante')
  }
  ngOnInit(): void {
    if (this.id!='crear') {
      this.titulo = "Editar Representante"
      this.cargarRepresentante()
    }
    
  }

  cargarRepresentante(){
    let param = {
      "tabla": "representante",
      "campos": ["REP_ID", "REP_DNI", "REP_NOM","REP_NOM2", "REP_APE", "REP_APE2", "REP_DIR","REP_CEL","REP_TEL","REP_MAIL", "REP_ESTADO", "USR_CREADOR_ID"
      ], "where": [
          {
              "nombre": "REP_ID", "valor": this.id, "condicion":"=",
              "tipo": "&&"
          }
      ]
      
  }

  this.representanteService.getRepresentante(param).subscribe(data=>{
    this.repre.REP_ID = data.data[0].REP_ID
    this.repre.REP_DNI = data.data[0].REP_DNI
    this.repre.REP_NOM = data.data[0].REP_NOM
    this.repre.REP_NOM2 = data.data[0].REP_NOM2
    this.repre.REP_APE = data.data[0].REP_APE
    this.repre.REP_APE2 = data.data[0].REP_APE2
    this.repre.REP_DIR = data.data[0].REP_DIR
    this.repre.REP_CEL = data.data[0].REP_CEL
    this.repre.REP_TEL = data.data[0].REP_TEL
    this.repre.REP_MAIL = data.data[0].REP_MAIL
    this.repre.REP_ESTADO = data.data[0].REP_ESTADO
    this.repre.USR_CREADOR_ID = data.data[0].USR_CREADOR_ID
    console.log('carga de datos');
    if (this.repre.REP_ESTADO=='A') {
      this.chbxEst = true
      console.log('entro al if');
      
      console.log(this.chbxEst);
      
    }
    
  })
  
  }

  onChangeCheck(event:any){
    if(event.target.checked){ 
    this.repre.REP_ESTADO="A";
    }else{
      this.repre.REP_ESTADO="D";
    }
  }

  guardarRepresentante(){
    if (this.id!='crear') {
      //editar      
      let param ={"tabla": "representante",
        "campos": [
          { "nombre": "REP_ID", "valor":this.repre.REP_ID },
          { "nombre": "REP_DNI", "valor": this.repre.REP_DNI},
          { "nombre": "REP_NOM", "valor": this.repre.REP_NOM },
          { "nombre": "REP_NOM2", "valor": this.repre.REP_NOM2 },
          { "nombre": "REP_APE", "valor": this.repre.REP_APE },
          { "nombre": "REP_APE2", "valor": this.repre.REP_APE2 },
          { "nombre": "REP_DIR", "valor": this.repre.REP_DIR },
          { "nombre": "REP_CEL", "valor": this.repre.REP_CEL },
          { "nombre": "REP_TEL", "valor": this.repre.REP_TEL },
          { "nombre": "REP_MAIL", "valor": this.repre.REP_MAIL },
          { "nombre": "REP_ESTADO", "valor": this.repre.REP_ESTADO },
          { "nombre": "USR_CREADOR_ID", "valor":this.repre.USR_CREADOR_ID }
        ]
      }
      this.representanteService.updateRepresentante(param).subscribe(data=>{
        console.log('repre editado');
        
      })
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
                    this.repre.REP_ESTADO,
                    this.repre.USR_CREADOR_ID]
      }
      this.representanteService.addRepresentante(param).subscribe(data=>{
        console.log('repre creado');
        
      })
    }
  }

}
