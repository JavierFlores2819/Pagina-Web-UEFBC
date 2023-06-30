import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-info-general',
  templateUrl: './form-info-general.component.html',
  styleUrls: ['./form-info-general.component.css']
})
export class FormInfoGeneralComponent implements OnInit {

  title:string ='Edición de la información General';

  infoG={id:0,mision:'',vision:'',escudoImg:''}
  constructor() { }

  ngOnInit(): void {
  }
  editInfo(){}

}
