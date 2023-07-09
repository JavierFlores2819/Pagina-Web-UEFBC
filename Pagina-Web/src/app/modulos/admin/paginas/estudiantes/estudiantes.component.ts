import { Component } from '@angular/core';
import { estudiante } from 'src/app/modelos/clases/estudiante.Model';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent {
  data: estudiante[] = [];
  headers: string[] = [];
  titulo = 'Estudiantes';
  icon = [
    { icono: 'fa-edit', routerLink: 'cursos', id: true ,ruta:false }
  ]; 
  rutaCrear = 'crear';

  constructor(private estudianteService: EstudiantesService) {
  }

  ngOnInit() {
    this.estudianteService.getEstudiantes().subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }
}
