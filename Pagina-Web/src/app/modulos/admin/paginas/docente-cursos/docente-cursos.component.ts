import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { DocentesService } from 'src/app/servicios/docentes.service';

@Component({
  selector: 'app-docente-cursos',
  templateUrl: './docente-cursos.component.html',
  styleUrls: ['./docente-cursos.component.scss']
})
export class DocenteCursosComponent {
  data: any[] = [];
  headers: string[] = [];
  titulo = 'Cursos / Paralelos';
  icon = [
    { icono: 'fa-eye', routerLink: '/', id: true, ruta: false }
  ];

  constructor(private docenteService: DocentesService, private authService: AuthService) {
  }

  ngOnInit() {
    const usuario = this.authService.getUser();

    this.docenteService.getParalelosDocentes(usuario.dni).subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }
}
