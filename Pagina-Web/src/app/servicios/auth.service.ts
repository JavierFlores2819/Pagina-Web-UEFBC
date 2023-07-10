import { Injectable } from '@angular/core';
import * as parametros from '../utils/parametros';
import { EncryptionService } from './encryption.service';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { LoginRequest } from '../modelos/clases/Login.Model';
import { usuario } from '../modelos/clases/usuario.Model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private encryptionService: EncryptionService, private http: HttpClient) { }

  getUser(): any {
    const userString = localStorage.getItem(parametros.USER_KEY);
    return userString ? JSON.parse(this.encryptionService.decrypt(userString)) : null;

  }

  hasRole(role: string): boolean {
    const user = this.getUser();
    return user && user.roles.includes(role);
  }

  isLoggedIn(): boolean {
    const userString = localStorage.getItem(parametros.USER_KEY);
    return !!userString; // Devuelve true si hay un usuario almacenado en localStorage, o false si no hay usuario almacenado
  }

  logout(): void {
    localStorage.removeItem(parametros.USER_KEY);
  }

  login(data: LoginRequest): Observable<string> {
    const params = {
      tabla: 'usuario',
      campos: ['USR_ID as id', 'USR_PSWD', 'USR_DNI', "CONCAT(USR_NOM, ' ',USR_NOM2, ' ',USR_APE, ' ',USR_APE2) AS USR_NOM", 'USR', 'USR_TIPO', 'USR_ESTADO'],
      where: [
        { nombre: 'USR', valor: data.user, condicion: '=', tipo: '&&' },
        { nombre: 'USR_ESTADO', valor: 'A', condicion: '=', tipo: '' }
      ]
    };

    return this.http.post<usuario[]>(parametros.APIURL + 'get', params).pipe(
      catchError(this.handleError),
      map(usuarios => {
        const usuario = usuarios[0]; // Tomar el primer usuario de la lista

        if (usuario) {
          // Desencriptar la contraseña del usuario almacenada en la base de datos
          const decryptedPassword = this.encryptionService.decrypt(usuario.USR_PSWD);
          // Comparar la contraseña desencriptada con la contraseña proporcionada
          if (decryptedPassword === data.pswd) {
            //creando usuario en localstorage

            const user = {
              user: data.user,
              dni: usuario.USR_DNI,
              nombre: usuario.USR_NOM,
              roles: [usuario.USR_TIPO, 'T']
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
      console.error("El servidor respondio con codigo de estado", error.status, error.error);
    }
    return throwError(() => new Error('Algo fallo, por favor intente nuevamente.'))
  }

}
