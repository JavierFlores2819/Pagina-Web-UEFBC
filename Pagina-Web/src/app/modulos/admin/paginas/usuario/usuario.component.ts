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

  id:string |null ='0';
  titulo: string = '';
  chbxEst:boolean =false
  usuario: usuario = { USR_ID: 0, USR_DNI: "", USR_NOM: "", USR_NOM2: "", USR_APE: "", USR_APE2: "", USR_TEL: "", USR_MAIL: "", USR: "", USR_PSWD: "", USR_ESTADO: "D", USR_TIPO: "" }

  constructor(private usuService: UsuariosService, private aRoute: ActivatedRoute) {
    this.id = this.aRoute.snapshot.paramMap.get('usuario')
  }

  ngOnInit(): void {
    if (this.id!='crear') {
      this.titulo = 'Editar Usuario'
      this.cargarUsuario()
      console.log(this.chbxEst);
      
    } else {
      this.titulo = 'Nuevo Usuario'
    }

  }
  cargarUsuario() {
    let param = {
      "tabla": "usuario",
      "campos": ["USR_ID", "USR_DNI", "USR_NOM", "USR_NOM2", "USR_APE", "USR_APE2", "USR_TEL", "USR_MAIL", "USR", "USR_PSWD", "USR_ESTADO", "USR_TIPO"
      ],
      "where": [
        {
          "nombre": "USR_ID",
          "valor": this.id,
          "condicion": "=",
          "tipo": "&&"
        }
      ]
    }
    this.usuService.getUsuario(param).subscribe(data => {
      this.usuario.USR_ID = data.data[0].USR_ID
      this.usuario.USR_DNI = data.data[0].USR_DNI
      this.usuario.USR_NOM = data.data[0].USR_NOM
      this.usuario.USR_NOM2 = data.data[0].USR_NOM2
      this.usuario.USR_APE = data.data[0].USR_APE
      this.usuario.USR_APE2 = data.data[0].USR_APE2
      this.usuario.USR_TEL = data.data[0].USR_TEL
      this.usuario.USR_MAIL = data.data[0].USR_MAIL
      this.usuario.USR = data.data[0].USR
      this.usuario.USR_PSWD = data.data[0].USR_PSWD
      this.usuario.USR_ESTADO = data.data[0].USR_ESTADO
      this.usuario.USR_TIPO = data.data[0].USR_TIPO

      if (this.usuario.USR_ESTADO=='A') {
        this.chbxEst = true
        console.log('entro al if');
        
        console.log(this.chbxEst);
        
      }
    })
  }
  onChangeCheck(event: any) {
    if (event.target.checked) {
      this.usuario.USR_ESTADO = "A";
    } else {
      this.usuario.USR_ESTADO = "D";
    }
  }

  guardarUsuario() {
    if (this.id) {
      //editar

      let param = {
        "tabla": "usuario",
        "campos": [
          { "nombre": "USR_ID", "valor": this.usuario.USR_ID},
          { "nombre": "USR_DNI", "valor": this.usuario.USR_DNI },
          { "nombre": "USR_NOM", "valor": this.usuario.USR_NOM },
              { "nombre": "USR_NOM2", "valor": this.usuario.USR_NOM2 },
              { "nombre": "USR_APE", "valor": this.usuario.USR_APE },
          { "nombre": "USR_APE2", "valor": this.usuario.USR_APE2 },
          { "nombre": "USR_TEL", "valor": this.usuario.USR_TEL },
          { "nombre": "USR_MAIL", "valor": this.usuario.USR_MAIL },
          { "nombre": "USR", "valor": this.usuario.USR },
          { "nombre": "USR_PSWD", "valor": this.usuario.USR_PSWD },
          { "nombre": "USR_ESTADO", "valor": this.usuario.USR_ESTADO},
          { "nombre": "USR_TIPO", "valor": this.usuario.USR_TIPO }
        ]
      }
      this.usuService.updateUsusario(param).subscribe(data=>{
        console.log('usu editado');
        
      })



    } else {
      //nuevo
      let param = {
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
      this.usuService.addUsuario(param).subscribe(data => {
        console.log('usu creado');

      }, error => {
        console.log(error);

      })
    }
  }
}
