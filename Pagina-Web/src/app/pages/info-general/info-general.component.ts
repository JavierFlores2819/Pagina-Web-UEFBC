import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.css']
})
export class InfoGeneralComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  editInfoG(){
    this.router.navigateByUrl('edit-infoG')
  }

}
