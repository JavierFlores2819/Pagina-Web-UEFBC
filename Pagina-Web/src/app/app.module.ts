import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { LoginComponent } from './modulos/login/login.component';
import { BodyComponent } from './modulos/dashboard/body/body.component';
import { SidenavComponent } from './modulos/dashboard/sidenav/sidenav.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { InicioComponent } from './modulos/dashboard/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
