import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = "http://localhost:8083/";

  constructor(private http: HttpClient) { }

  login(loginData: any){
    console.log(loginData);
    return {'acc': 'abc'};
    // return this.http.post(this.url + 'user/login', loginData);
  }
  signup(signupData: any){
    console.log(signupData);
    return this.http.post(this.url + 'user/register', signupData);
  }
  product(productData: any){
    console.log(productData);
    return this.http.get(this.url + '/product', productData);
  }
  cart(cartData: any){
    console.log(cartData);
    return this.http.post(this.url + '/cart', cartData);
  }
}
