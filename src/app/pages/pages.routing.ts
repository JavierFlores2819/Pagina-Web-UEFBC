import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { InfoGeneralComponent } from './info-general/info-general.component';
import { AnioLectivoComponent } from './anio-lectivo/anio-lectivo.component';
import { CursosComponent } from './cursos/cursos.component';
import { ParalelosComponent } from './paralelos/paralelos.component';
import { HabilitarCalificacionesComponent } from './habilitar-calificaciones/habilitar-calificaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormInfoGeneralComponent } from './form-info-general/form-info-general.component';
import { FormAnioLComponent } from './form-anio-l/form-anio-l.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { FormUsusarioComponent } from './form-ususario/form-ususario.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { CalificacionComponent } from './calificacion/calificacion.component';
import { CalificacionCuanComponent } from './calificacion-cuan/calificacion-cuan.component';


const routes: Routes = [
    {
        path: '',
        component:PagesComponent,
        children:[
         // {path: 'dashboard', component: DashboardComponent},
          {path:'',component:InfoGeneralComponent},
          {path: '',redirectTo:'/institucion', pathMatch:'full'},
          {path: 'información-general',component: InfoGeneralComponent},
          {path: 'año-lectivo',component: AnioLectivoComponent},
          {path: 'cursos',component: CursosComponent},
          {path: 'paralelos',component: ParalelosComponent},
          {path: 'habilitar-calificaciones',component: HabilitarCalificacionesComponent},
          {path: 'edit-infoG', component: FormInfoGeneralComponent},
          {path: 'nuevoAnio', component:FormAnioLComponent},
          {path: 'usuarios',component: UsuariosComponent},
          {path: 'nuevoUsuario', component:FormUsusarioComponent},

          //Estudiantes
          {path:'alumnos',component:AlumnosComponent},
          {path:'nuevo_alumno',component:FormAlumnoComponent},
          {path:'calificacion', component:CalificacionComponent},
          {path:'califi-cuan',component:CalificacionCuanComponent},
          {path:'calif-cual',component:CalificacionCuanComponent},
                   
          {path: 'account-settings', component:AccountSettingsComponent},
        ]
      },
     /* {
        path:'estudiantes',component:PagesComponent,
        children:[
          {path:'alumnos',component:AlumnosComponent}
        ]
      },
      {
        path:'docentes',component:PagesComponent
      },
      {
        path:'reportes',component:PagesComponent
      }*/
      
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
