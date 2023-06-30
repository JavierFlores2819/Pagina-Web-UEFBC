import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-form-ususario',
  templateUrl: './form-ususario.component.html',
  styleUrls: ['./form-ususario.component.css']
})
export class FormUsusarioComponent implements OnInit {

  usuario:Usuario={id:0,nombres:"",apellidos:"",correo:"",rol:0,imgPerfil:""}
  constructor() { }

  ngOnInit(): void {
  }

  addUsuario(){}

}
