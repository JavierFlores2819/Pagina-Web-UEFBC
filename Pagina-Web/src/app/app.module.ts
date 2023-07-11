import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './modulos/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './modulos/login/login.component';
import { BodyComponent } from './modulos/admin/dashboard/body/body.component';
import { SidenavComponent } from './modulos/admin/dashboard/sidenav/sidenav.component';
import { DashboardComponent } from './modulos/admin/dashboard/dashboard.component';
import { InicioComponent } from './modulos/admin/paginas/inicio/inicio.component';
import { AnioLectivoComponent } from './modulos/admin/paginas/anio-lectivo/anio-lectivo.component';
import { UsuariosComponent } from './modulos/admin/paginas/usuarios/usuarios.component';
import { CursosComponent } from './modulos/admin/paginas/cursos/cursos.component';
import { SublevelMenuComponent } from './modulos/admin/dashboard/sidenav/sublevel-menu.component';
import { TablaComponent } from './modelos/tabla/tabla.component';
import { RepresentantesComponent } from './modulos/admin/paginas/representantes/representantes.component';
import { ParalelosComponent } from './modulos/admin/paginas/paralelos/paralelos.component';
import { EstudiantesComponent } from './modulos/admin/paginas/estudiantes/estudiantes.component';
import { AniosLectivosComponent } from './modulos/admin/paginas/anios-lectivos/anios-lectivos.component';
import { UsuarioComponent } from './modulos/admin/paginas/usuario/usuario.component';
import { RepresentanteComponent } from './modulos/admin/paginas/representante/representante.component';
import { CursoComponent } from './modulos/admin/paginas/curso/curso.component';
import { EstudianteComponent } from './modulos/admin/paginas/estudiante/estudiante.component';
import { ParaleloComponent } from './modulos/admin/paginas/paralelo/paralelo.component';
import { HeaderComponent } from './modulos/admin/dashboard/header/header.component';
import { ProfesoresComponent } from './modulos/admin/paginas/profesores/profesores.component';
import { ProfesorComponent } from './modulos/admin/paginas/profesor/profesor.component';
import { AlertaComponent } from './modelos/alerta/alerta.component';
import { ReportEstudiantesComponent } from './modulos/admin/paginas/report-estudiantes/report-estudiantes.component';
import { ReportCursosComponent } from './modulos/admin/paginas/report-cursos/report-cursos.component';
import { ReportDocentesComponent } from './modulos/admin/paginas/report-docentes/report-docentes.component';
import { ReportAlumnoCursoComponent } from './modulos/admin/paginas/report-alumno-curso/report-alumno-curso.component';
import { ReportCalificacionesComponent } from './modulos/admin/paginas/report-calificaciones/report-calificaciones.component';
import { ReportMatriculasComponent } from './modulos/admin/paginas/report-matriculas/report-matriculas.component';
import { DocenteCursosComponent } from './modulos/admin/paginas/docente-cursos/docente-cursos.component';
import { DocenteCalificacionesComponent } from './modulos/admin/paginas/docente-calificaciones/docente-calificaciones.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    InicioComponent,
    AnioLectivoComponent,
    UsuariosComponent,
    CursosComponent,
    SublevelMenuComponent,
    TablaComponent,
    RepresentantesComponent,
    ParalelosComponent,
    EstudiantesComponent,
    AniosLectivosComponent,
    UsuarioComponent,
    RepresentanteComponent,
    CursoComponent,
    EstudianteComponent,
    ParaleloComponent,
    HeaderComponent,
    ProfesoresComponent,
    ProfesorComponent,
    AlertaComponent,
    ReportEstudiantesComponent,
    ReportCursosComponent,
    ReportDocentesComponent,
    ReportAlumnoCursoComponent,
    ReportCalificacionesComponent,
    ReportMatriculasComponent,
    DocenteCursosComponent,
    DocenteCalificacionesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
