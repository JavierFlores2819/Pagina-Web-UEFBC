import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectIdentificacionComponent } from './select-identificacion/select-identificacion.component';
import { BuscarComponent } from './buscar/buscar.component';


@NgModule({
  declarations: [
    SelectIdentificacionComponent,
    BuscarComponent,    
  ],
  imports: [
    CommonModule
  ],exports: [
    SelectIdentificacionComponent,
  ]
})
export class ComponentsModule { }
