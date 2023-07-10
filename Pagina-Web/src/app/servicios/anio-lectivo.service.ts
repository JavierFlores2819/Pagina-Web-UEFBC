import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import * as parametros from '../utils/parametros';

import { anio_lectivo } from '../modelos/clases/anio_lectivo.Model';


@Injectable({
  providedIn: 'root'
})
export class AnioLectivoService {

  params = {
    tabla: "anio_lectivo",
    campos: ['AL_ID as id', "DATE_FORMAT(AL_INI, '%d/%m/%Y')", "DATE_FORMAT(AL_FIN, '%d/%m/%Y')", 'AL_PRD', 'AL_SUB_PRD', 'AL_ESTADO'],
    where: [
      { "nombre": "AL_ESTADO", "valor": "A", "condicion": "=", "tipo": "" },
    ]

  };

  headers = ['Fecha inicio', 'Fecha fin', 'Periodo', 'Subperiodo', 'Estado']

  constructor(private http: HttpClient) { }

  getAnioLectivo(): Observable<{ data: anio_lectivo[], headers: string[] }> {
    return this.http.post<anio_lectivo[]>(parametros.APIURL + 'get', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );
  }

   updateAnioLectivo(): Observable<{ data: anio_lectivo[], headers: string[] }> {
    return this.http.put<anio_lectivo[]>(parametros.APIURL + 'update', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );
  }

  addAnioLectivo(): Observable<{ data: anio_lectivo, headers: string[] }> {
    return this.http.post<anio_lectivo>(parametros.APIURL + 'create', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );
  }

  deleteAnioLectivo(){}
}
