import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  

  constructor(public http:HttpClient) { }



getAllMovies() {
  return this.http.get<any>('https://freetestapi.com/api/v1/movies')
}



}
