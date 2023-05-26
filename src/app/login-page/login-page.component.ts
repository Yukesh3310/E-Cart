import { Component } from '@angular/core';
import { FormGroup, FormsModule,ReactiveFormsModule, FormControl, Validators, FormBuilder  } from '@angular/forms';
import {CartService} from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  obj: any;
  status = false;

  constructor(private fb : FormBuilder, private cartService : CartService, private router : Router)
  {
    this.loginForm = fb.group({
      mail: [""],
      password: [""]
    });
  }

  onSubmit() {
    this.obj = this.loginForm.value;
    // this.onAdd.emit(this.obj);
    console.log(this.loginForm.value);
    // this.cartService.login(this.obj).subscribe(res => {
    //   console.log(res);
    //   this.router.navigate(['/homepage']);
    // })
    let res = this.cartService.login(this.obj);
    console.log(res);
    this.router.navigate(['/homepage']);
    this.loginForm.reset();
  }
  addToggle()
  {
    this.status = !this.status;
  }
}
