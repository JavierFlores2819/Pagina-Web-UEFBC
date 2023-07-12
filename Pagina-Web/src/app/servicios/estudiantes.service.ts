import { Injectable } from '@angular/core';
import { estudiante } from '../modelos/clases/estudiante.Model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import * as parametros from '../utils/parametros';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  params = {
    tabla: "estudiante as t, representante as a where t.REP_ID=a.REP_ID;",
    campos: ["EST_ID AS id","EST_DNI","CONCAT(t.EST_NOM, ' ', t.EST_NOM2, ' ', t.EST_APE, ' ', t.EST_APE2)as EST_NOM","DATE_FORMAT(EST_FECH_NAC, '%d/%m/%Y')","EST_GEN","EST_ESTADO","CONCAT(a.REP_NOM, ' ',a.REP_NOM2, ' ', a.REP_APE, ' ', a.REP_APE2) AS REP_NOM"]
  };

  headers = ['Cédula', 'Nombre', 'Fecha de nacimiento', 'Género', 'Estado','Representante']

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<{ data: estudiante[], headers: string[] }> {
    return this.http.post<estudiante[]>(parametros.APIURL + 'get', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );
  }

  addEstudiante(soli:any): Observable<any> {
    let headers:any
    return this.http.post<estudiante>(parametros.APIURL + 'create', soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );

  }

  updateEstudiante():Observable<{ data: estudiante, headers: string[] }> {
    return this.http.post<estudiante>(parametros.APIURL + 'update', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );

  }

 /* deleteEstudiante():Observable<any>{
    return this.http.delete<estudiante>(parametros.APIURL + 'delete', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );
  }*/
}
