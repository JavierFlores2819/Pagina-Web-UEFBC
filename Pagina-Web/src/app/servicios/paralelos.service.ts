import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { paralelo } from '../modelos/clases/paralelo.Model';
import * as parametros from '../utils/parametros';

@Injectable({
  providedIn: 'root'
})
export class ParalelosService {
 
  constructor(private http: HttpClient) { }

  getParalelos(id:any): Observable<{ data: any[], headers: string[] }> {
    console.log(id);
    
   const params = {
      tabla: `paralelo AS A INNER JOIN curso AS B ON A.CRS_ID = B.CRS_ID INNER JOIN anio_lectivo AS C ON A.AL_ID = C.AL_ID AND C.AL_ESTADO = 'A' INNER JOIN asg_prll_prf AS D ON D.PRLL_ID = A.PRLL_ID INNER JOIN asignatura AS E ON D.ASG_ID = E.ASG_ID INNER JOIN paralelo AS F ON F.PRLL_ID = D.PRLL_ID INNER JOIN profesor AS G ON G.PRF_ID = D.PRF_ID WHERE E.ASG_NOM = 'Tutoría' AND B.CRS_ID=${id}`,
      campos: ["A.PRLL_ID AS id", "A.PRLL_NOM", "concat(B.CRS_NOM,' ',B.CRS_TIP) as CURSO","CONCAT(G.PRF_NOM, ' ', G.PRF_APE) AS PROF"],
    };
   const headers = ['Curso','Paralelo', 'Tutor',]

    return this.http.post<any[]>(parametros.APIURL + 'get', params).pipe(
      map(data => {
        console.log(data);
        return { data, headers: headers };
      })
    );
  }
}
