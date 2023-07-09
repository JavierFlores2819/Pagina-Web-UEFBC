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

  getParalelos(id:any): Observable<{ data: paralelo[], headers: string[] }> {
   const params = {
      tabla: `paralelo as A, anio_lectivo as B, curso as C, profesor D WHERE a.AL_ID=B.AL_ID AND B.AL_ESTADO='A' AND A.CRS_ID=C.CRS_ID  and A.PRF_ID=D.PRF_ID AND A.CRS_ID=${id}`,
      campos: ["A.PRLL_ID as id","concat(C.CRS_NOM,' ',C.CRS_TIP) as CRS_ID", "A.PRLL_NOM", "CONCAT(D.PRF_NOM, ' ', D.PRF_NOM2, ' ', D.PRF_APE, ' ', D.PRF_APE2) AS PRF_ID"],
    };
   const headers = ['Curso','Paralelo', 'Tutor',]

    return this.http.post<paralelo[]>(parametros.APIURL + 'get', params).pipe(
      map(data => {
        console.log(data);
        return { data, headers: headers };
      })
    );
  }
}
