import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  status = false;
  productList: any;
  constructor( private cartService: CartService){
  //  this.productList = cartService.product().subscribe(res => {console.log(res)})
  }
  addToggle()
  {
    this.status = !this.status;
  }

}
// console.log(this.signup.value);
//     this.cartService.signup(this.obj).subscribe(res => {console.log(res)})
//     this.signup.reset();
