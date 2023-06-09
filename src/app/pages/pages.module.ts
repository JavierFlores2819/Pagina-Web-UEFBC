import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { appFormsModule } from '../forms/forms.module';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { AnioLectivoComponent } from './anio-lectivo/anio-lectivo.component';
import { CursosComponent } from './cursos/cursos.component';
import { ParalelosComponent } from './paralelos/paralelos.component';
import { HabilitarCalificacionesComponent } from './habilitar-calificaciones/habilitar-calificaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,

    InfoGeneralComponent,
    AnioLectivoComponent,
    CursosComponent,
    ParalelosComponent,
    HabilitarCalificacionesComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    appFormsModule
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
