import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//import { appFormsModule } from '../forms/forms.module';

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
import { FormInfoGeneralComponent } from './form-info-general/form-info-general.component';
import { FormsModule } from '@angular/forms';
import { FormAnioLComponent } from './form-anio-l/form-anio-l.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { FormUsusarioComponent } from './form-ususario/form-ususario.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { AsignarParaleloEstComponent } from './asignar-paralelo-est/asignar-paralelo-est.component';

import { MatListModule } from '@angular/material/list';
import { CalificacionComponent } from './calificacion/calificacion.component';
import { CalificacionCualComponent } from './calificacion-cual/calificacion-cual.component';
import { CalificacionCuanComponent } from './calificacion-cuan/calificacion-cuan.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



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
    UsuariosComponent,
    FormInfoGeneralComponent,
    FormAnioLComponent,
    AlumnosComponent,
    FormUsusarioComponent,
    FormAlumnoComponent,
    AsignarParaleloEstComponent,
    CalificacionComponent,
    CalificacionCualComponent,
    CalificacionCuanComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
   // appFormsModule,
    FormsModule,
    MatListModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
