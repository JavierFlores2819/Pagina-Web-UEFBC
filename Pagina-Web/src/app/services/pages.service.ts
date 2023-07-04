import { HttpClient, HttpContext, HttpContextToken, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PagesService {

  url:string = 'http://localhost:8080/api';
  constructor(private http:HttpClient) { }

  
 getData(data:any):Observable<any>{
    let urlGet:string = `${this.url}/get`;

    return this.http.post(urlGet,data)

  }

  addData(data:any):Observable<any>{
    let urlPost = `${this.url}/create`;
    return this.http.post(urlPost,data);
  }




  save() {
    let params = {
      tabla: "usuario",
      campos: ["USR_ID", "USR_DNI"],
      where_nombre: "USR_ID",
      where_valor: 2
    };

    this.http.post("http://localhost:8080/api/get", params).subscribe(
      (resultData: any) => {
        console.log(resultData);
      },
      (error: any) => {
        console.error("Error al enviar la solicitud:", error);
      }
    );
  }
}
