import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as parametros from '../utils/parametros';


@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }


  encrypt(data: string): string {
    const ciphertext = CryptoJS.AES.encrypt(data, parametros.CLAVE).toString();
    return ciphertext;
  }

  decrypt(ciphertext: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, parametros.CLAVE);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  }
}
