import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnioLectivoComponent } from './paginas/anio-lectivo/anio-lectivo.component';
import { CursosComponent } from './paginas/cursos/cursos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { ReportesComponent } from './paginas/reportes/reportes.component';
import { RepresentantesComponent } from './paginas/representantes/representantes.component';
import { ParalelosComponent } from './paginas/paralelos/paralelos.component';
import { EstudiantesComponent } from './paginas/estudiantes/estudiantes.component';
import { DocentesComponent } from './paginas/docentes/docentes.component';
import { AniosLectivosComponent } from './paginas/anios-lectivos/anios-lectivos.component';
import { EstudianteComponent } from './paginas/estudiante/estudiante.component';
import { DocenteComponent } from './paginas/docente/docente.component';
import { RepresentanteComponent } from './paginas/representante/representante.component';
import { ParaleloComponent } from './paginas/paralelo/paralelo.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { CursoComponent } from './paginas/curso/curso.component';
import { ProfesoresComponent } from './paginas/profesores/profesores.component';
import { ProfesorComponent } from './paginas/profesor/profesor.component';


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
          { path: 'cursos', component: CursosComponent },
        ]
      },
      { path: 'estudiantes', component: EstudiantesComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'reportes', component: ReportesComponent },
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
