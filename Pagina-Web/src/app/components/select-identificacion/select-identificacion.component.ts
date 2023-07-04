import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-identificacion',
  templateUrl: './select-identificacion.component.html',
  styleUrls: ['./select-identificacion.component.css']
})
export class SelectIdentificacionComponent implements OnInit {
  titulo:string = 'Identifiación';
  constructor() { }

  ngOnInit(): void {
  }

}
