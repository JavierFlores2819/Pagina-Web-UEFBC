import { Component } from '@angular/core';
import { curso } from 'src/app/modelos/clases/curso.Model';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  data: curso[] = [];
  headers: string[] = [];
  titulo = 'Cursos';
  icon = ["fa-eye","fa-edit"];


  constructor(private cursoService: CursosService) {
  }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }

}
