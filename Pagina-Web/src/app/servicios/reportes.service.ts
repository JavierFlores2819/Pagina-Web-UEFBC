import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import * as parametros from '../utils/parametros';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }

  getDataRepre(anio_lectivo: string, representante: string): Observable<{ data: any[], headers: string[] }> {
    let params = {
      tabla: `estudiante as T, matricula as A, paralelo as B, anio_lectivo as C, curso as D, representante as E where T.EST_ID=A.EST_ID and A.PRLL_ID=B.PRLL_ID AND B.AL_ID=C.AL_ID AND B.CRS_ID=D.CRS_ID AND C.AL_ID=${anio_lectivo} AND T.REP_ID=E.REP_ID AND E.REP_DNI='${representante}';`,
      campos: ["T.EST_ID as id", "T.EST_DNI as dni", "CONCAT(T.EST_NOM, ' ', T.EST_NOM2, ' ', T.EST_APE, ' ', T.EST_APE2)as EST_NOM", "B.PRLL_NOM, concat(D.CRS_NOM,' ',D.CRS_TIP) as curso"]
    };

    let headers = ['DNI', 'Nombres', 'Paralelo', 'curso']
    return this.http.post<any[]>(parametros.APIURL + 'get', params).pipe(
      map((data: any) => {
        return { data, headers: headers };
      })
    );
  }
}

