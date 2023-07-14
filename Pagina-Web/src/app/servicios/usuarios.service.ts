import { Injectable } from '@angular/core';
import { usuario } from '../modelos/clases/usuario.Model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import * as parametros from '../utils/parametros';
import { EncryptionService } from './encryption.service';
import { LoginRequest } from '../modelos/clases/Login.Model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {



  constructor(private http: HttpClient, private encryptionService: EncryptionService) { }

  get(): Observable<{ data: usuario[], headers: string[] }> {
    const params = {
      tabla: "usuario",
      campos: ["USR_ID as id", "USR_DNI", "USR", "USR_TIPO", "USR_ESTADO"]
    };

    const headers = ['Cédula', 'usuario', 'Tipo', 'Estado']

    return this.http.post<usuario[]>(parametros.APIURL + 'get', params,).pipe(
      map(data => {
        return { data, headers: headers };
      }),
      catchError(this.handleError)
    );
  }

  public update(): Observable<any> {
    const params = {
      tabla: "usuario",
      campos: [
        { "nombre": "USR_ID", "valor": "0" },
        { "nombre": "USR_PSWD", "valor": this.encryptionService.encrypt("admin") },
      ]
    };
    return this.http.put<any>(parametros.APIURL + "update", params);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error("Se ha producido un error", error.error);
    } else {
      console.error("El servidor respondio con codigo de estado", error.status, error.error);
    }
    return throwError(() => new Error('Algo fallo, por favor intente nuevamente.'))
  }

  addUsuario(soli:any):Observable<any>{
    const headers = ['Cedula', 'Primer N', 'Segundo N', 'Primer A','Segundo A','Telefono','Email','Usr','pswd', 'estado','tipo']
    
    return this.http.post<usuario>(parametros.APIURL + 'create', soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }

  getUsuario(soli:any): Observable<{ data: usuario[], headers: string[] }> {


    const headers = ['Cédula', 'usuario', 'Tipo', 'Estado']

    return this.http.post<usuario[]>(parametros.APIURL + 'get', soli,).pipe(
      map(data => {
        return { data, headers: headers };
      }),
      catchError(this.handleError)
    );
  }

  updateUsusario(soli:any):Observable<any>{
    const headers = ['Cedula', 'Primer N', 'Segundo N', 'Primer A','Segundo A','Telefono','Email','Usr','pswd', 'estado','tipo']
    
    return this.http.put<usuario>(parametros.APIURL + 'update', soli).pipe(
      map(data => {
        return { data, headers: headers };
      })
    );
  }

}
