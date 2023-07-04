import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-form-ususario',
  templateUrl: './form-ususario.component.html',
  styleUrls: ['./form-ususario.component.css']
})
export class FormUsusarioComponent implements OnInit {

  usuario:Usuario={id:0,ced:"",nombres:"",apellidos:"",correo:"",pswd:"",rol:"",estado:"",fechaCreacion:"",imgPerfil:""}
  constructor() { }

  ngOnInit(): void {
  }

  addUsuario(){}

}
