import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = "https://localhost:44392/api/auth/";

  constructor(private http: HttpClient) { }

  login(data){
    return this.http.post(this.baseUrl + "login", data).pipe(
      map((response: any) => {
        const user = response;
        if(user)
          localStorage.setItem("token", user.token);
      })
    );
  }
}
