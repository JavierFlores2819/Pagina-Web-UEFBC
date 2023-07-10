import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Curso } from '../modelos/clases/curso.Model';
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

  getCursos(): Observable<{ data: Curso[], headers: string[] }> {
    return this.http.post<Curso[]>(parametros.APIURL + 'get', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );
  }

  addCurso():Observable<any>{
    return this.http.post<Curso>(parametros.APIURL+'create',this.params).pipe(map(data =>{
      return {data,headers:this.headers}
    }))
  }

  updateCurso():Observable<any>{
    return this.http.put<Curso>(parametros.APIURL+'update',this.params).pipe(map(data =>{
      return {data,headers:this.headers}
    }))
  }

  deleteCurso(){}
}