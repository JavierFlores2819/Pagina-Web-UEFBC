import { Injectable } from '@angular/core';
import { profesor } from '../modelos/clases/profesor.Model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import * as parametros from '../utils/parametros';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  params = {
    tabla: "profesor",
    campos: ["PRF_ID as id","PRF_DNI","CONCAT(PRF_NOM, ' ', PRF_NOM2, ' ', PRF_APE, ' ', PRF_APE2) AS PRF_NOM","DATE_FORMAT(PRF_FECH_NAC, '%d/%m/%Y')","PRF_GEN","DATE_FORMAT(PRF_FECH_INGR_INST, '%d/%m/%Y')","DATE_FORMAT(PRF_FECH_INGR_MAG, '%d/%m/%Y')","PRF_ESTADO"]
  };

  headers = ['Cédula', 'Nombre', 'Fecha de nacimiento', 'Género','Fecha de ingreso a la institución','Fecha de ingreso al magisterio', 'Estado']

  constructor(private http: HttpClient) { }

  getDocentes(): Observable<{ data: profesor[], headers: string[] }> {
    return this.http.post<profesor[]>(parametros.APIURL + 'get', this.params).pipe(
      map(data => {
        return { data, headers: this.headers };
      })
    );
  }
}
