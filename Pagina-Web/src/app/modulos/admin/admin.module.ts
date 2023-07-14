import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { AsignarEstudianteComponent } from './paginas/asignar-estudiante/asignar-estudiante.component';
import { AsignarParaleloProfesorComponent } from './paginas/asignar-paralelo-profesor/asignar-paralelo-profesor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    AsignarEstudianteComponent,
       AsignarParaleloProfesorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
