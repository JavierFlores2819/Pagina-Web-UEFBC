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
  usuario:usuario={USR_ID:0,USR_DNI:"",USR:"",USR_NOM:"",USR_MAIL:"",USR_TEL:"",USR_PSWD:"",USR_ESTADO:"A",USR_TIPO:"",FECHA_CREACION:""}

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

  guardarUsuario(){

  }
}
