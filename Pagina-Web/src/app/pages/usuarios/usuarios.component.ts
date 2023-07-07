import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { PagesService } from 'src/app/services/pages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  title="Usuarios"
  @Output() ususario:EventEmitter<Usuario> = new EventEmitter();

  listUsuarios:Usuario[]=[];

  constructor(private pageService:PagesService) {
    this.loadUsuarios();
   }

  ngOnInit(): void {
  }

  loadUsuarios(){
    let param = {"tabla":"usuario","where_nombre":"USR_ESTADO","where_valor": "A"}
    try {
      this.pageService.getData(param).subscribe((data:Usuario[])=>{
        console.log(data);
        this.listUsuarios = data
      })
    } catch (error) {
      console.log(error);
    }    
    return this.listUsuarios;
  }

  deleteUsuario(user:Usuario){
    Swal.fire({
      title: 'Eliminar a ? '+user.USR+ ' '+ user.USR_ID,
      text: "Los datos eliminados no se pueden recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        let param={"tabla": "usuario","nombre": "USR_ID","valor": 517}
        this.pageService.deleteData(param).subscribe(resp=>{
          Swal.fire(
            'Eliminado!',
            'El ususario '+user.USR+' se elimino correctamente',
            'success'
          )
          this.loadUsuarios()
        })

      }
    })    
  }

  buscar(value:string){
    let param ={"tabla": "usuario","campos":["USR_ID", "USR_DNI", "USR", "USR_PSWD", "USR_TIPO","USR_ESTADO", "FECHA_CREACION"],"where_nombre": ["USR_DNI"],
     "where_valor":value}
    this.pageService.getData(param).subscribe(data=>{
      this.listUsuarios = data
    })
  }

  capturar(){
    console.log("hola");
    
  }

}
