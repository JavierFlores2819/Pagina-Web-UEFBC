import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { curso } from '../modelos/clases/curso.Model';
import * as parametros from '../utils/parametros';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  params = {
    tabla: "curso",
    campos: ['CRS_ID as id', "CRS_NOM", "CRS_TIP","CRS_ESTADO"]
  };

  headers = ['Nombre', 'Tipo', 'Estado']

  constructor(private http: HttpClient) { }

  getCursos(): Observable<{ data: curso[], headers: string[] }> {
    return this.http.post<curso[]>(parametros.APIURL + 'get', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );
  }
}
