import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import * as parametros from '../utils/parametros';
import { anio_lectivo } from '../modelos/clases/anio_lectivo.Model';


@Injectable({
  providedIn: 'root'
})
export class AnioLectivoService {


  constructor(private http: HttpClient) { }

  get(): Observable<{ data: anio_lectivo[], headers: string[] }> {
    const params = {
      tabla: "anio_lectivo",
      campos: ['AL_ID as id', "DATE_FORMAT(AL_INI, '%d/%m/%Y')", "DATE_FORMAT(AL_FIN, '%d/%m/%Y')", 'AL_PRD', 'AL_SUB_PRD', 'AL_ESTADO'],
      where: [
        { "nombre": "AL_ESTADO", "valor": "A", "condicion": "=", "tipo": "" },
      ]
    };
  
    const headers = ['Fecha inicio', 'Fecha fin', 'Periodo', 'Subperiodo', 'Estado']

    return this.http.post<anio_lectivo[]>(parametros.APIURL + 'get', params).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }
  getAll(): Observable< anio_lectivo[]> {
    const params = {
      tabla: "anio_lectivo ORDER BY AL_ESTADO ASC",
      campos: ["AL_ID as value","concat(DATE_FORMAT(AL_INI, '%d/%m/%Y'),' - ',DATE_FORMAT(AL_FIN, '%d/%m/%Y')) as name"]
    };

    return this.http.post<anio_lectivo[]>(parametros.APIURL + 'get', params);
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
