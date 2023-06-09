import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectIdentificacionComponent } from './select-identificacion/select-identificacion.component';


@NgModule({
  declarations: [
    SelectIdentificacionComponent,    
  ],
  imports: [
    CommonModule
  ],exports: [
    SelectIdentificacionComponent,
  ]
})
export class ComponentsModule { }
