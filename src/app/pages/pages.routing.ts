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


const routes: Routes = [
    {
        path: '',
        component:PagesComponent,
        children:[
          {path: 'dashboard', component: DashboardComponent},
          {path: '',redirectTo:'/dashboard', pathMatch:'full'},
          {path: 'información-general',component: InfoGeneralComponent},
          {path: 'año-lectivo',component: AnioLectivoComponent},
          {path: 'cursos',component: CursosComponent},
          {path: 'paralelos',component: ParalelosComponent},
          {path: 'habilitar-calificaciones',component: HabilitarCalificacionesComponent},
          {path: 'usuarios',component: UsuariosComponent},
                   
          {path: 'account-settings', component:AccountSettingsComponent},
        ]
      },
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
