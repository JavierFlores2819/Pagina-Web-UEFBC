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
    let urlPost:string = `${this.url}/create/`;
    return this.http.post(urlPost,data);
  }

  deleteData(data:any):Observable<any>{
    let urlDel:string = `${this.url}/delete`
    return this.http.delete(urlDel,data)
  }
  updateData(data:any):Observable<any>{
    let urlUpdate:string = `${this.url}/update`
    return this.http.put(urlUpdate,data)
  }

}
