import { Injectable } from '@angular/core';
import { representante } from '../modelos/clases/representante.Model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import * as parametros from '../utils/parametros';

@Injectable({
  providedIn: 'root'
})
export class RepresentantesService {

  params = {
    tabla: "representante",
    campos: ["REP_ID as id","REP_DNI","CONCAT(REP_NOM, ' ', REP_NOM2, ' ', REP_APE, ' ', REP_APE2) AS REP_NOM","REP_DIR","REP_CEL","REP_TEL","REP_MAIL","REP_ESTADO"]
  };

  headers = ['Cédula', 'Nombre','Dirección','Celular','Teléfono','Correo','Estado']

  constructor(private http: HttpClient) { }

  getRepresentantes(): Observable<{ data: representante[], headers: string[] }> {
    return this.http.post<representante[]>(parametros.APIURL + 'get', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );
  }
  getRepresentante(soli:any): Observable<{ data: representante[], headers: string[] }> {
    let headers = ["REP_ID", "REP_DNI", "REP_NOM","REP_NOM2", "REP_APE", "REP_APE2", "REP_DIR","REP_CEL","REP_TEL","REP_MAIL","REP_ESTADO", "USR_CREADOR_ID"]

    return this.http.post<representante[]>(parametros.APIURL + 'get', soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );

  }

  addRepresentante(soli:any): Observable<any>{
    const headers = ['Cedula', 'Primer N', 'Segundo N', 'Primer A','Segundo A','Direccion','Celular','Telefono','Email','Relacion Fam', 'Estado','Usuario']
    
    return this.http.post<representante>(parametros.APIURL + 'create', soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }

  updateRepresentante(soli:any):Observable<any>{
    const headers = ["REP_DNI", "REP_NOM","REP_NOM2", "REP_APE", "REP_APE2", "REP_DIR","REP_CEL","REP_TEL","REP_MAIL","REP_REL_FAM", "REP_ESTADO",
    "USR_CREADOR_ID"]
    
    return this.http.put<representante>(parametros.APIURL + 'update', soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }
}
