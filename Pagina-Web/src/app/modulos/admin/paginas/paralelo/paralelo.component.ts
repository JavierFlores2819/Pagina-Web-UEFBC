import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { paralelo } from 'src/app/modelos/clases/paralelo.Model';
import { profesor } from 'src/app/modelos/clases/profesor.Model';
import { ParalelosService } from 'src/app/servicios/paralelos.service';

@Component({
  selector: 'app-paralelo',
  templateUrl: './paralelo.component.html',
  styleUrls: ['./paralelo.component.scss']
})
export class ParaleloComponent implements OnInit {
  paralelo:paralelo = { PRLL_ID:0,PRLL_NOM:"",PRLL_ESTADO: "", CRS_ID: "",PRF_ID:"",AL_ID:0,USR_CREADOR_ID:0,FECHA_CREACION: ""}
  listProfesores:profesor[]=[];
  constructor(private route: ActivatedRoute, private paraleloService:ParalelosService) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID:', id);
    this.cargarProfesores();
  //  this.rutaCrear += '/' + id+'/crear';
    // Aquí puedes realizar las operaciones que necesites con el ID obtenido
  }

  cargarProfesores(){

  }

  guardarParalelo(){

  }
}
