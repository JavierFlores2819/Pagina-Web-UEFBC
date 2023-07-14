import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import * as parametros from '../utils/parametros';
import { asignatura } from '../modelos/clases/asignatura.Model';


@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private http: HttpClient) { }

  getAsignaturas(): Observable<{ data: any[], headers: string[] }> {
    let params =  {
      "tabla": "asignatura",
       "campos":["ASG_ID","ASG_NOM","ASG_TIP","ASG_ESTADO","USR_CREADOR_ID"],    
       "where_nombre": ["ASG_ESTADO"],
      "where_valor": "A"
  } 
    const headers = ["ASG_ID","ASG_NOM","ASG_TIP","ASG_ESTADO","USR_CREADOR_ID"]
 
     return this.http.post<any[]>(parametros.APIURL + 'get', params).pipe(
       map(data => {
         return { data, headers: headers };
       })
     );
   }


   addAsignatura(soli:any):Observable<any>{
    const headers = ["ASG_ID","ASG_NOM","ASG_TIP","ASG_ESTADO","USR_CREADOR_ID"]
     
      return this.http.post<asignatura>(parametros.APIURL+'create',soli).pipe(map(data =>{
      return {data,headers:headers}
    }))
  }
}
