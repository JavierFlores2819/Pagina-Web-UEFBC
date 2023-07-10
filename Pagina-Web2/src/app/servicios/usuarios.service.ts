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

  login(data: LoginRequest): Observable<string> {
    const params = {
      tabla: 'usuario',
      campos: ['USR_ID as id', 'USR_PSWD', 'USR_DNI', 'USR', 'USR_TIPO', 'USR_ESTADO'],
      where: [
        { nombre: 'USR', valor: data.user, condicion: '=', tipo: '&&' },
        { nombre: 'USR_ESTADO', valor: 'A', condicion: '=', tipo: '' }
      ]
    };
    console.log(params)

    return this.http.post<usuario[]>(parametros.APIURL + 'get', params).pipe(
      catchError(this.handleError),
      map(usuarios => {
        const usuario = usuarios[0]; // Tomar el primer usuario de la lista

        if (usuario) {
          // Desencriptar la contraseña del usuario almacenada en la base de datos
          const decryptedPassword = this.encryptionService.decrypt(usuario.USR_PSWD);
          // Comparar la contraseña desencriptada con la contraseña proporcionada
          if (decryptedPassword === data.pswd) {
            // Generar el token JWT con la información necesaria (por ejemplo, usando una biblioteca como jsonwebtoken)
            const user = {
              user: data.user,
              dni: usuario.USR_DNI,
              roles:[ usuario.USR_TIPO,'T'] 
            };
            localStorage.setItem(parametros.USER_KEY, this.encryptionService.encrypt(JSON.stringify(user)));
            return 'OK';
          } else {
            throw new Error('Credenciales inválidas');
          }
        }
        throw new Error('Credenciales inválidas');
      })
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
       console.error("Se ha producido un error", error.error);
    } else {
       console.error("El servidor respondio con codigo de estado",error.status, error.error);
    }
    return throwError(() => new Error('Algo fallo, por favor intente nuevamente.'))
  }

}
