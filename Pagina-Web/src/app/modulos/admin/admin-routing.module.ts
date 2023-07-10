import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnioLectivoComponent } from './paginas/anio-lectivo/anio-lectivo.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { RepresentantesComponent } from './paginas/representantes/representantes.component';
import { ParalelosComponent } from './paginas/paralelos/paralelos.component';
import { EstudiantesComponent } from './paginas/estudiantes/estudiantes.component';
import { AniosLectivosComponent } from './paginas/anios-lectivos/anios-lectivos.component';
import { EstudianteComponent } from './paginas/estudiante/estudiante.component';
import { RepresentanteComponent } from './paginas/representante/representante.component';
import { ParaleloComponent } from './paginas/paralelo/paralelo.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { CursoComponent } from './paginas/curso/curso.component';
import { ProfesoresComponent } from './paginas/profesores/profesores.component';
import { ProfesorComponent } from './paginas/profesor/profesor.component';
import { ReportEstudiantesComponent } from './paginas/report-estudiantes/report-estudiantes.component';
import { ReportCursosComponent } from './paginas/report-cursos/report-cursos.component';
import { ReportDocentesComponent } from './paginas/report-docentes/report-docentes.component';
import { ReportAlumnoCursoComponent } from './paginas/report-alumno-curso/report-alumno-curso.component';
import { ReportCalificacionesComponent } from './paginas/report-calificaciones/report-calificaciones.component';
import { ReportMatriculasComponent } from './paginas/report-matriculas/report-matriculas.component';
import { DocenteCursosComponent } from './paginas/docente-cursos/docente-cursos.component';
import { DocenteCalificacionesComponent } from './paginas/docente-calificaciones/docente-calificaciones.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      {
        path: 'docentes',
        children: [
          { path: 'cursos', component: DocenteCursosComponent },
          { path: 'cursos/:id', component: DocenteCalificacionesComponent },

        ]
      },
      { path: 'estudiantes', component: ReportEstudiantesComponent },
      { path: 'usuarios', component: UsuariosComponent },
      {
        path: 'reportes',
        children: [
          { path: 'cursos', component: ReportCursosComponent },
          { path: 'docentes', component: ReportDocentesComponent },
          { path: 'alumnocurso', component: ReportAlumnoCursoComponent },
          { path: 'calificaciones', component: ReportCalificacionesComponent },
          { path: 'matriculas', component: ReportMatriculasComponent },
        ]
      },
      {
        path: 'institucion',
        children: [
          {
            path: 'cursos',
            children: [
              { path: '', component: CursosComponent },
              { path: 'crear', component: CursoComponent },
              { path: ':curso', component: ParalelosComponent },
              { path: ':curso/crear', component: ParaleloComponent },
              { path: ':curso/editar/:paralelo', component: ParaleloComponent },
              { path: ':curso/ver/:paralelo', component: EstudiantesComponent },
              { path: ':curso/agregar/:paralelo', component: ParaleloComponent },
            ]
          },
          {
            path: 'anio-lectivo',
            children: [
              { path: '', component: AniosLectivosComponent },
              { path: 'crear', component: AnioLectivoComponent },
            ]
          },
          {
            path: 'estudiantes',
            children: [
              { path: '', component: EstudiantesComponent },
              { path: ':estudiante', component: EstudianteComponent },
              { path: 'crear', component: EstudianteComponent },

            ]
          },
          {
            path: 'profesores',
            children: [
              { path: '', component: ProfesoresComponent },
              { path: ':profesor', component: ProfesorComponent },
              { path: 'crear', component: ProfesorComponent },

            ]
          },
          {
            path: 'representantes',
            children: [
              { path: '', component: RepresentantesComponent },
              { path: ':representante', component: RepresentanteComponent },
              { path: 'crear', component: RepresentanteComponent },

            ]
          },
          {
            path: 'usuarios',
            children: [
              { path: '', component: UsuariosComponent },
              { path: ':usuario', component: UsuarioComponent },
              { path: 'crear', component: UsuarioComponent },

            ]
          },
          { path: 'paralelos', component: ParalelosComponent },
          { path: 'paralelos/:id', component: ParaleloComponent }]
      },
      { path: '**', redirectTo: 'inicio' }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
