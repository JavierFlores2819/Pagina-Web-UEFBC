import { Component } from '@angular/core';
import { anio_lectivo } from 'src/app/modelos/clases/anio_lectivo.Model';
import { AnioLectivoService } from 'src/app/servicios/anio-lectivo.service';

@Component({
  selector: 'app-anios-lectivos',
  templateUrl: './anios-lectivos.component.html',
  styleUrls: ['./anios-lectivos.component.scss']
})
export class AniosLectivosComponent {
  data: anio_lectivo[] = [];
  headers: string[] = [];
  titulo = 'Año lectivo';
  icon =[ "fa-edit"];
  
  constructor(private anioLectivoService: AnioLectivoService) {
  }

  ngOnInit() {
    this.anioLectivoService.getAnioLectivo().subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }

}
