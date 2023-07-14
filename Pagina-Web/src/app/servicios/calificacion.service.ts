import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import * as parametros from '../utils/parametros';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  constructor(private http: HttpClient) { }

  /*}*/ 

getEstudiantesParalelo(id:any): Observable<{ data: any, headers: string[] }> {
  let params = {
    "tabla": `estudiante as A,matricula AS B, asg_prll_prf AS C where A.EST_ID=B.EST_ID and B.MTRC_ESTADO='A' and B.PRLL_ID=C.PRLL_ID AND C.ASG_PRLL_PRF_ID=${id}`,
	 	"campos":["A.EST_ID, concat(A.EST_NOM,' ',A.EST_NOM2,' ',A.EST_APE,' ',A.EST_APE2) as nombres, B.MTRC_ID"]
      }

  let headers = ['EST_ID', 'NOMS', 'MTRC_ID']

  return this.http.post<any>(parametros.APIURL + 'get', params).pipe(
    map(data => {
      return { data, headers: headers };
    })
  );
}

}
