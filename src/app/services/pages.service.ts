import { HttpClient, HttpContext, HttpContextToken, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PagesService {

  url:string = 'http://localhost:8080/api';
  IS_PUBLIC_API = new HttpContextToken<boolean>(() => false);
  constructor(private http:HttpClient) { }

  
 getData(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json')
    let urlGet:string = `${this.url}/get`;
    //let options = new HttpRequest("GET",urlGet,{headers,data})

    //return this.http.get(urlGet,{headers,context:new HttpContext().set(this.IS_PUBLIC_API, true),observe:'events'})
    return this.http.get(urlGet,data)

  }

}
