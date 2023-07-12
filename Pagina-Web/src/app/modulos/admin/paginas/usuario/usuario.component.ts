import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usuario } from 'src/app/modelos/clases/usuario.Model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  id:any;
  titulo:string = '';
  usuario:usuario={USR_ID:0,USR_DNI:"",USR_NOM:"",USR_NOM2:"",USR_APE:"",USR_APE2:"",USR_TEL:"",USR_MAIL:"",USR:"",USR_PSWD:"",USR_ESTADO:"D",USR_TIPO:""}

  constructor(private usuService:UsuariosService, private aRoute:ActivatedRoute){
    this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if (this.id) {
      this.titulo = 'Editar Usuario'
    } else {
      this.titulo = 'Nuevo Usuario'
    }
    
  }

  onChangeCheck(event:any){
    if(event.target.checked){ 
    this.usuario.USR_ESTADO="A";
    }else{
      this.usuario.USR_ESTADO="D";
    }
  }

  guardarUsuario(){
    if (this.id) {
      //editar
      let param=""
    } else {
      //nuevo
      let param ={
        "tabla": "usuario",
        "campos": ["USR_DNI", "USR_NOM", "USR_NOM2", "USR_APE", "USR_APE2", "USR_TEL", "USR_MAIL", "USR", "USR_PSWD", "USR_ESTADO", "USR_TIPO"],
        "valores": [this.usuario.USR_DNI,
                    this.usuario.USR_NOM,
                    this.usuario.USR_NOM2,
                    this.usuario.USR_APE,
                    this.usuario.USR_APE2,
                    this.usuario.USR_TEL,
                    this.usuario.USR_MAIL,
                    this.usuario.USR,
                    this.usuario.USR_PSWD,
                    this.usuario.USR_ESTADO,
                    this.usuario.USR_TIPO]
      }
      this.usuService.addUsuario(param).subscribe(data=>{
        console.log('usu creado');
        
      },error=>{
        console.log(error);
        
      })
    }
  }
}
