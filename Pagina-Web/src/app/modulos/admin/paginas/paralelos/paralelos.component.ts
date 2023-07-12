import { Component, OnInit } from '@angular/core';
import { paralelo } from 'src/app/modelos/clases/paralelo.Model';
import { ActivatedRoute } from '@angular/router';
import { ParalelosService } from 'src/app/servicios/paralelos.service';

@Component({
  selector: 'app-paralelos',
  templateUrl: './paralelos.component.html',
  styleUrls: ['./paralelos.component.scss']
})
export class ParalelosComponent implements OnInit {
  data: any[] = [];
  headers: string[] = [];
  titulo = '';
  icon = [
    { icono: 'fa-edit', routerLink: 'editar', id: true, ruta: true },
    { icono: 'fa-users', routerLink: 'ver', id: true, ruta: true },
    { icono: 'fa-user-plus', routerLink: 'agregar', id: true, ruta: true }
  ];
  rutaCrear = 'crear';

  constructor(private route: ActivatedRoute, private paraleloService: ParalelosService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('curso');

    this.paraleloService.getParalelos(id).subscribe(data => {
      this.data = data.data;
      //this.titulo += data.data[0].CURSO;
      this.headers = data.headers;
    });
    //  this.rutaCrear += '/' + id+'/crear';
    // Aquí puedes realizar las operaciones que necesites con el ID obtenido
  }

}

