import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [{
    titulo: 'Principal',
    icono: 'menu-icon fa fa-dashboard',
    submenu: [
      {titulo:'Settings', url:'/account-settings',icono:'menu-icon fa-cog'},
      {titulo:'Dashboard', url:'/',icono:'menu-icon fa fa-sign-in'}
      
    ]
  },
  {
    titulo: 'Institución',
    icono:'fa fa-institution',
    submenu: [
      {titulo:'Información general',url:'información-general',icono:'menu-icon fa fa-sign-in'},
      {titulo:'Año lectivo',url:'año-lectivo',icono:'menu-icon fa fa-laptop'},
      {titulo:'Cursos',url:'cursos',icono:'menu-icon ti-check'},
      {titulo:'Paralelos',url:'paralelos',icono:'menu-icon ti-check'},
      {titulo:'Habilitar calificaciones',url:'habilitar-calificaciones',icono:'menu-icon ti-check'},
      {titulo:'Usuarios',url:'usuarios',icono:'menu-icon ti-check'},
    ]
  },
  {
    titulo: 'Estudiantes',
    icono:'fa-graduation-cap',
    submenu: [
      {titulo:'Alumnos',url:'alumnos',icono:'menu-icon fa fa-sign-in'},
      {titulo:'Calificaciones',url:'calificacion',icono:'menu-icon fa fa-laptop'},
      {titulo:'Matrícula',url:'matricula',icono:'menu-icon ti-check'},
      {titulo:'Representantes',url:'representantes',icono:'menu-icon ti-check'}
    ]
  },
  {
    titulo: 'Docentes',
    icono:'fa-briefcase',
    submenu: [
      {titulo:'Datos personales',url:'datos-personales',icono:'menu-icon fa fa-sign-in'},
      {titulo:'Mis cursos',url:'mis-cursos',icono:'menu-icon fa fa-laptop'},
    ]
  },
  {
    titulo: 'Reportes',
    icono:'fa-file-text-o',
    submenu: [
      {titulo:'Cursos',url:'rep-cursos',icono:'menu-icon fa fa-sign-in'},
      {titulo:'Docentes',url:'rep-docentes',icono:'menu-icon fa fa-laptop'},
      {titulo:'Alumnos por curso',url:'rep-alumnosporcurso',icono:'menu-icon ti-check'},
      {titulo:'Calificaciones',url:'rep-calificaciones',icono:'menu-icon ti-check'},
      {titulo:'Matrícula',url:'rep-matricula',icono:'menu-icon ti-check'}
    ]
  },
];


  constructor() { }
}
