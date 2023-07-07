import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-form-ususario',
  templateUrl: './form-ususario.component.html',
  styleUrls: ['./form-ususario.component.css']
})
export class FormUsusarioComponent implements OnInit {

  id:string
  title = 'Crear usuario'
  usuario:Usuario={USR_ID:0,USR_DNI:"",USR:"",USR_PSWD:"",USR_TIPO:"",USR_ESTADO:"A"}
  date:Date = new Date()

  constructor(private aRoute:ActivatedRoute, private pageService:PagesService,private router:Router){
    this.id =  this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(this.id){
      this.title = 'Editar usuario'
      this.loadUsuario()
    }
  }

  loadUsuario(){
    let param = {"tabla": "usuario","campos":["USR_ID","USR_DNI","USR","USR_PSWD","USR_TIPO","USR_ESTADO"],"where_nombre": ["USR_ID"],"where_valor":this.id} 
    this.pageService.getData(param).subscribe(data=>{
      this.usuario.USR_ID = data[0].USR_ID
      this.usuario.USR_DNI = data[0].USR_DNI
      this.usuario.USR = data[0].USR_USR
      this.usuario.USR_PSWD = data[0].USR_PSWD
      this.usuario.USR_TIPO = data[0].USR_TIPO
      this.usuario.USR_ESTADO = data[0].USR_ESTADO
      console.log('load usu');
      
    },error=>{
      console.log(error);
      
    })
  }
  addUsuario(){
    //editar
    if (this.id) {  
      let param ={"tabla": "usuario","campos": [
          { "nombre": "USR_ID", "valor": this.id},
          { "nombre": "USR_DNI", "valor": this.usuario.USR_DNI },
          { "nombre": "USR", "valor": this.usuario.USR },
          { "nombre": "USR_PSWD", "valor": this.usuario.USR_PSWD },
          { "nombre": "USR_ESTADO", "valor":this.usuario.USR_ESTADO },
          { "nombre": "USR_TIPO", "valor": this.usuario.USR_TIPO }
        ]
      }
      this.pageService.updateData(param).subscribe(data=>{
        console.log('editado');
        this.router.navigate(["usuarios"])
      },error=>{
        console.log(error);
        
      })
    } else {
      //crear
      let paramJson={"tabla": "usuario",
      "campos": ["USR_DNI", "USR", "USR_PSWD","USR_ESTADO","USR_TIPO"],
      "valores": [this.usuario.USR_DNI,this.usuario.USR,this.usuario.USR_PSWD,this.usuario.USR_ESTADO,this.usuario.USR_TIPO]
      }
      console.log(paramJson);
      try {
        this.pageService.addData(paramJson).subscribe(data=>{
          this.router.navigate(["usuarios"])
          console.log(data);
          
        },error=>{
          console.log("algo salio mal");
          console.log(error);
          
        })
      } catch (error) {
        console.log(error);
        
      }
    }



  }


}
