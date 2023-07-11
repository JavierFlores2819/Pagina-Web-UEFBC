import { Component } from '@angular/core';
import { profesor } from 'src/app/modelos/clases/profesor.Model';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent {

  titulo="Nuevo Docente"
  docente:profesor ={PRF_ID:0,PRF_DNI:"",PRF_NOM:"",PRF_NOM2:"",PRF_APE:"",PRF_APE2:"",PRF_FECH_NAC:"",PRF_GEN:"",PRF_DIR:"",PRF_CEL:"",
    PRF_TEL:"",PRF_MAIL:"",PRF_FECH_INGR_INST:"",PRF_FECH_INGR_MAG:"",PRF_ESTADO:"",USR_CREADOR_ID:0,FECHA_CREACION:""}
  constructor(){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  
  onChangeCheck(event:any){
    if(event.target.checked){ 
    this.docente.PRF_ESTADO="A";
    }else{
      this.docente.PRF_ESTADO="D";
    }
  }

}
