import { Component } from '@angular/core';
import { representante } from 'src/app/modelos/clases/representante.Model';
import { RepresentantesService } from 'src/app/servicios/representantes.service';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.scss']
})
export class RepresentantesComponent {
  data: representante[] = [];
  headers: string[] = [];
  titulo = 'Representante';
  icon = [
    { icono: 'fa-edit', routerLink: 'cursos', id: true ,ruta:false }
  ];
  rutaCrear = 'crear';

  constructor(private representanteService: RepresentantesService) {
  }

  ngOnInit() {
    this.representanteService.getRepresentantes().subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }
}
