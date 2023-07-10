import { INavBarData } from "./helper";

export const navbarData: INavBarData[] = [
    {
        routelink: 'inicio',
        icon: 'fa fa-home',
        label: 'Inicio',
        rol:'T'
    },
    {
        routelink: 'docentes',
        icon: 'fa fa-chalkboard-teacher',
        label: 'Docentes',
        rol:'P',
        items: [
            {
                routelink: 'docentes/cursos',
                label: 'Mis cursos',
            }
        ]
    },
    {
        routelink: 'estudiantes',
        icon: 'fa fa-users',
        label: 'Estudiantes',
        rol:'R',

    },
    {
        routelink: 'institucion',
        icon: 'fa fa-school',
        label: 'Institución',
        rol:'A',
        items: [
            {
                routelink: 'institucion/anio-lectivo',
                label: 'Año lectivo',
            },
            {
                routelink: 'institucion/cursos',
                label: 'Cursos',
            },
            {
                routelink: 'institucion/profesores',
                label: 'Docentes',
            },
            {
                routelink: 'institucion/representantes',
                label: 'Representantes',
            },
            {
                routelink: 'institucion/estudiantes',
                label: 'Estudiantes',
            },
            {
                routelink: 'institucion/matriculas',
                label: 'Matriculas',
            },
            {
                routelink: 'institucion/usuarios',
                label: 'Usuarios',
            },
        ]
    },
    {
        routelink: 'reportes',
        icon: 'fa fa-file-pdf',
        label: 'Reportes',
        rol:'A',

    }

];