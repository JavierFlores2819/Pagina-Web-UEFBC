import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  title="Usuarios"

  listUsuarios:Usuario[]=[];

  constructor(private userService:PagesService) {
    this.loadUsuarios();
   }

  ngOnInit(): void {
  }

  loadUsuarios(){
    //let param = {"tabla":"usuario","where_nombre":"USR_ESTADO","where_valor": "A"}
    let param =   {
      "tabla": "usuario"
  } 
    try {
      this.userService.getData(param).subscribe(data=>{
        let list:any
   
        this.listUsuarios = data
        console.log(this.listUsuarios);
      })
    } catch (error) {
      console.log(error);
    }    
    return this.listUsuarios;
  }

}
