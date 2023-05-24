import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  login(loginData: any){
    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //     headers.append('Access-Control-Allow-Methods', 'GET');
    //     headers.append('Access-Control-Allow-Origin', '*');
    console.log(loginData);
    return this.http.post(this.url + 'user/login', loginData);
  }
  signup(signupData: any){
    console.log(signupData);
    return this.http.post(this.url + 'user/register', signupData);


  }
}
