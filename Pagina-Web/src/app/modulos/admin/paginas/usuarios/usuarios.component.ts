import { Component } from '@angular/core';
import { usuario } from 'src/app/modelos/clases/usuario.Model';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  data: usuario[] = [];
  headers: string[] = [];
  titulo = 'Usuarios';
  icon = [
    { icono: 'fa-edit', routerLink: 'cursos', id: true ,ruta:false}
  ]; 
  rutaCrear = 'crear';

  constructor(private usuarioService: UsuariosService) {
  }

  ngOnInit() {
    this.usuarioService.get().subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }
}
