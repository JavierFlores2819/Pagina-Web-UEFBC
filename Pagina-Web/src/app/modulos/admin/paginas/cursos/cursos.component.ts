import { Component } from '@angular/core';
import { Curso } from 'src/app/modelos/clases/curso.Model';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  data: Curso[] = [];
  headers: string[] = [];
  titulo = 'Cursos';
  icon = [
    { icono: 'fa-eye', routerLink: '/', id: true, ruta: false }
  ];
  rutaCrear = 'crear';


  constructor(private cursoService: CursosService) {
  }

  ngOnInit() {
    this.cursoService.getCursos().subscribe(data => {
      this.data = data.data;
      this.headers = data.headers;
    });
  }

  eliminar(curso:Curso){
    let param=""
    this.cursoService.updateCurso(param).subscribe(data=>{
      console.log('editado eliminado');
      
    })
  }

}
