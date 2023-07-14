import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AsignarEstudianteComponent } from './paginas/asignar-estudiante/asignar-estudiante.component';

@NgModule({
  declarations: [
  
    AsignarEstudianteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
