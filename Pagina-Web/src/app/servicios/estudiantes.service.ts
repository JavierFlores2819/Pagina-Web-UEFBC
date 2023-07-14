import { Injectable } from '@angular/core';
import { estudiante } from '../modelos/clases/estudiante.Model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
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
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error("Se ha producido un error", error.error);
    } else {
      console.error("El servidor respondio con codigo de estado", error.status, error.error);
    }
    return throwError(() => new Error('Algo fallo, por favor intente nuevamente.'))
  }

  addEstudiante(soli:any): Observable<any> {
    let headers:any
    return this.http.post<estudiante>(parametros.APIURL + 'create', soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );

  }

  updateEstudiante(soli:any):Observable<any>{
    const headers = ["REP_DNI", "REP_NOM","REP_NOM2", "REP_APE", "REP_APE2", "REP_DIR","REP_CEL","REP_TEL","REP_MAIL","REP_REL_FAM", "REP_ESTADO",
    "USR_CREADOR_ID"]
    
    return this.http.put<estudiante>(parametros.APIURL + 'update', soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );

  }

  getEstudiante(soli:any): Observable<{ data: estudiante[], headers: string[] }> {
    const headers = ["EST_DNI","EST_NOM","EST_NOM2","EST_APE","EST_APE2","EST_FECH_NAC","EST_GEN","EST_ESTADO", 
    "REP_ID","REL_EST_REP","USR_CREADOR_ID","EST_PRO","EST_CAN","EST_PARR","EST_CUE","EST_DIR","EST_NAC", 
    "EST_ETN","EST_NAC_ETN","EST_COM_ETN","NEE_DIS","NES_NAD","ENF_CAT","CONADIS","EST_INTE",
    "EST_TV","EST_RAD","EST_PC","EST_CEL"]

    return this.http.post<estudiante[]>(parametros.APIURL + 'get', soli,).pipe(
      map(data => {
        return { data, headers: headers };
      }),
      catchError(this.handleError)
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
