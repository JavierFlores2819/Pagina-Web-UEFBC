import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paralelo',
  templateUrl: './paralelo.component.html',
  styleUrls: ['./paralelo.component.scss']
})
export class ParaleloComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID:', id);
  //  this.rutaCrear += '/' + id+'/crear';
    // Aquí puedes realizar las operaciones que necesites con el ID obtenido
  }
}
