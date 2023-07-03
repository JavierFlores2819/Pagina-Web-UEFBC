import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  title="Usuarios"

  constructor(private userService:PagesService) {
    this.loadUsuarios();
   }

  ngOnInit(): void {
  }

  loadUsuarios(){
    let param:any = `{  
      "tabla": "usuario",
      "where_nombre": "USR_ESTADO",
      "where_valor": "A"
        }
      }`
      console.log(param);
      
    try {
      this.userService.getData(param).subscribe(data=>{
        //let jsnData:any;
        //jsnData = data
        console.log(data);
        
      })
    } catch (error) {
      console.log(error);
      console.log(error.error);
      
      
    }
  }

}
