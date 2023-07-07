import { Injectable } from '@angular/core';
import * as parametros from '../utils/parametros';
import { EncryptionService } from './encryption.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private encryptionService: EncryptionService) { }

  getUser(): any {
    const userString = localStorage.getItem(parametros.USER_KEY);
    return userString ? JSON.parse(this.encryptionService.decrypt(userString)) : null;
  }

  hasRole(role: string): boolean {
    const user = this.getUser();
    return user && user.roles.includes(role);
  }

  isLoggedIn():boolean {
    const userString = localStorage.getItem(parametros.USER_KEY);
   return !!userString; // Devuelve true si hay un usuario almacenado en localStorage, o false si no hay usuario almacenado
  }

}
