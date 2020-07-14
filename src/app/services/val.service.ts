import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValService {

  url:string = "https://localhost:44392/api/home";
  constructor(private http:HttpClient) { }

  getvalue(){
    return this.http.get(this.url);
  }
}
