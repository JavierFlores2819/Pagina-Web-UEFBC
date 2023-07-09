import { Component } from '@angular/core';
import { profesor } from 'src/app/modelos/clases/profesor.Model';
import { DocentesService } from 'src/app/servicios/docentes.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent {
  data: profesor[] = [];
  headers: string[] = [];
  titulo = 'Docentes';
  icon = ["fa-edit"];

  constructor(private docenteService: DocentesService) {
  }

  ngOnInit() {
    this.docenteService.getDocentes().subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }
}
