import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, authGuardLogin } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modulos/login/login.module').then((m) => m.LoginModule), canActivate: [authGuardLogin] },
  { path: 'dashboard', loadChildren: () => import('./modulos/admin/admin.module').then((m) => m.AdminModule), canActivate: [authGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
