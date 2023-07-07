import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  
  {path: '**' , component: NoPageFoundComponent},
  {path:'login',component: LoginComponent}
]
@NgModule({

  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
