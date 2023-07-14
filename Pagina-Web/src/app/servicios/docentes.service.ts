import { Injectable } from '@angular/core';
import { profesor } from '../modelos/clases/profesor.Model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import * as parametros from '../utils/parametros';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {


  constructor(private http: HttpClient) { }

  getDocentes(): Observable<{ data: profesor[], headers: string[] }> {
    let params = {
      tabla: "profesor",
      campos: ["PRF_ID as id", "PRF_DNI", "CONCAT(PRF_NOM, ' ', PRF_NOM2, ' ', PRF_APE, ' ', PRF_APE2) AS PRF_NOM", "DATE_FORMAT(PRF_FECH_NAC, '%d/%m/%Y')", "PRF_GEN", "DATE_FORMAT(PRF_FECH_INGR_INST, '%d/%m/%Y')", "DATE_FORMAT(PRF_FECH_INGR_MAG, '%d/%m/%Y')", "PRF_ESTADO"]
    };

    let headers = ['Cédula', 'Nombre', 'Fecha de nacimiento', 'Género', 'Fecha de ingreso a la institución', 'Fecha de ingreso al magisterio', 'Estado']

    return this.http.post<profesor[]>(parametros.APIURL + 'get', params).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }
  getDocentesA(): Observable<{ data: profesor[], headers: string[] }> {
    let params = {
      tabla: "profesor",
      campos: ["PRF_ID", "PRF_DNI", "CONCAT(PRF_NOM, ' ', PRF_NOM2, ' ', PRF_APE, ' ', PRF_APE2) AS PRF_NOM", "DATE_FORMAT(PRF_FECH_NAC, '%d/%m/%Y')", "PRF_GEN", "DATE_FORMAT(PRF_FECH_INGR_INST, '%d/%m/%Y')", "DATE_FORMAT(PRF_FECH_INGR_MAG, '%d/%m/%Y')", "PRF_ESTADO"]
    };

    let headers = ['Cédula', 'Nombre', 'Fecha de nacimiento', 'Género', 'Fecha de ingreso a la institución', 'Fecha de ingreso al magisterio', 'Estado']

    return this.http.post<profesor[]>(parametros.APIURL + 'get', params).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }

  getParalelosDocentes(docente_dni: string): Observable<{ data: profesor[], headers: string[] }> {
    let params = {
      tabla: `asg_prll_prf AS A, asignatura AS B, paralelo AS C, curso AS D, profesor AS E WHERE A.PRF_ID = E.PRF_ID AND A.ASG_ID = B.ASG_ID AND A.PRLL_ID = C.PRLL_ID AND C.CRS_ID = D.CRS_ID AND E.PRF_DNI =${docente_dni}`,
      campos: ["A.ASG_PRLL_PRF_ID as id", " B.ASG_NOM", "C.PRLL_NOM", "CONCAT( D.CRS_NOM,' ', D.CRS_TIP) AS CURSO"]
    };

    let headers = ['Asignatura', 'Paralelo', 'Curso']

    return this.http.post<profesor[]>(parametros.APIURL + 'get', params).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }

  addDocente(soli:any):Observable<any>{
    const headers = ['Cedula', 'Primer N', 'Segundo N', 'Primer A','Segundo A','Fecha nacimiento','Genero','Direccion', 'Celular','Telefono','Mail','Fecha Ingreso','Fecha Magist','Estado','Usuario']
     
      return this.http.post<profesor>(parametros.APIURL+'create',soli).pipe(map(data =>{
      return {data,headers:headers}
    }))
  }

  getDocente(soli:any): Observable<{ data: profesor[], headers: string[] }> {

    let headers = ["PRF_DNI", "PRF_NOM",  "PRF_NOM2", "PRF_APE", "PRF_APE2", "PRF_FECH_NAC", "PRF_GEN", "PRF_DIR", "PRF_CEL", "PRF_TEL", "PRF_MAIL", "PRF_FECH_INGR_INST", "PRF_FECH_INGR_MAG", "PRF_ESTADO", "USR_CREADOR_ID"]

    return this.http.post<profesor[]>(parametros.APIURL + 'get',soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }

  updateDocente(soli:any):Observable<any>{
    const headers = ["PRF_DNI", "PRF_NOM",  "PRF_NOM2", "PRF_APE", "PRF_APE2", "PRF_FECH_NAC", "PRF_GEN", "PRF_DIR", "PRF_CEL", "PRF_TEL", "PRF_MAIL", "PRF_FECH_INGR_INST", "PRF_FECH_INGR_MAG", "PRF_ESTADO", "USR_CREADOR_ID"]
    
    return this.http.put<profesor>(parametros.APIURL + 'update', soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }
}
