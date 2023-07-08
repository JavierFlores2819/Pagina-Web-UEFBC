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
}
