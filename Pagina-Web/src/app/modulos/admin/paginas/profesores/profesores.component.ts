import { Component } from '@angular/core';
import { profesor } from 'src/app/modelos/clases/profesor.Model';
import { DocentesService } from 'src/app/servicios/docentes.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent {
  data: profesor[] = [];
  headers: string[] = [];
  titulo = 'Profesor';
  icon = [
    { icono: 'fa-edit', routerLink: 'cursos', id: true ,ruta:false }
  ]; 
  rutaCrear = 'crear';

  constructor(private docenteService: DocentesService) {
  }

  ngOnInit() {
    this.docenteService.getDocentes().subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }
}
