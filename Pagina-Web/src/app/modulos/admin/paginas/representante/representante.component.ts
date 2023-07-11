import { Component } from '@angular/core';
import { representante } from 'src/app/modelos/clases/representante.Model';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html',
  styleUrls: ['./representante.component.scss']
})
export class RepresentanteComponent {
  titulo="Crear representante"
  repre:representante={REP_ID:0,REP_DNI:"",REP_NOM: "",REP_DIR:"",REP_CEL:"",REP_TEL:"",REP_MAIL:"",REP_REL_FAM:"",REP_ESTADO:"",
    USR_CREADOR_ID: 0, FECHA_CREACION:""}
  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  onChangeCheck(event:any){
    if(event.target.checked){ 
    this.repre.REP_ESTADO="A";
    }else{
      this.repre.REP_ESTADO="D";
    }
  }

}
