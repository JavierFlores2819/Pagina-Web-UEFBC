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


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Ruta hija por defecto
      { path: 'inicio', component: InicioComponent },
      {
        path: 'docentes',
        children: [
          { path: 'cursos/:id', component: CursosComponent },
        ]
      },

      { path: 'usuarios', component: UsuariosComponent },
      { path: 'reportes', component: ReportesComponent },
      {
        path: 'institucion',
        children: [
          { path: 'cursos', component: CursosComponent },
          { path: 'cursos/:id', component: CursoComponent },
          { path: 'anio-lectivo', component: AniosLectivosComponent },
          { path: 'anio-lectivo/:id', component: AnioLectivoComponent },
          { path: 'estudiantes', component: EstudiantesComponent },
          { path: 'estudiante/:id', component: EstudianteComponent },
          { path: 'profesores', component: DocentesComponent },
          { path: 'profesores/:id', component: DocenteComponent },
          { path: 'representantes', component: RepresentantesComponent },
          { path: 'representantes/:id', component: RepresentanteComponent },
          { path: 'paralelos', component: ParalelosComponent },
          { path: 'paralelos:id', component: ParaleloComponent },
          { path: 'usuarios', component: UsuariosComponent },
          { path: 'usuarios:id', component: UsuarioComponent },
        ]
      },
      { path: '**', redirectTo: 'inicio' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
