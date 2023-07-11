import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { anio_lectivo } from 'src/app/modelos/clases/anio_lectivo.Model';
import { AnioLectivoService } from 'src/app/servicios/anio-lectivo.service';

@Component({
  selector: 'app-anio-lectivo',
  templateUrl: './anio-lectivo.component.html',
  styleUrls: ['./anio-lectivo.component.scss']
})
export class AnioLectivoComponent {

  anioL:anio_lectivo={AL_ID:0,AL_INI:new Date(),AL_FIN:new Date(),AL_PRD:1,AL_SUB_PRD:1,AL_EXM:1,AL_EXT:1,AL_POR_PRD:1,AL_POR_EXM:1,AL_ESTADO:'',USR_CREADOR_AL_ID:1,FECHA_CREACION:''}
  id:any;
  title:string='';
  inputEst:boolean = false;

  enteredValue:any;

  constructor(private alService:AnioLectivoService, private aRoute:ActivatedRoute){
    this.id = this.aRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
      if (this.id) {
        this.title = 'Editar Anio Lectivo'
      }else{
        this.title = 'Crear nuevo Anio Lectivo'
      }

    }

    onInputChange(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      const inputValue = Number(inputElement.value);
  
      if (isNaN(inputValue) || inputValue < 1) {
        this.enteredValue = 1;
      }
    }
    onChangeCheck(event:any){
      if(event.target.checked){ 
      this.anioL.AL_ESTADO="A";
      }else{
        this.anioL.AL_ESTADO="D";
      }
    }
  onDateChangeI(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.anioL.AL_INI = new Date(inputElement.value);
  }
  onDateChangeF(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.anioL.AL_FIN= new Date(inputElement.value);
  }
  crearAnioL(){
    this.alService.addAnioLectivo().subscribe(data=>{
      
    })
  }
}
