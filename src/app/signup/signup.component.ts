import { Component } from '@angular/core';
import { FormGroup, FormsModule,ReactiveFormsModule, FormControl, Validators, FormBuilder  } from '@angular/forms';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  loginForm: FormGroup;
  obj: any;
  status = false;

  constructor(private fb : FormBuilder, private cartService : CartService) {
    this.loginForm = fb.group({
      mail: [""],
      password: [""]
    });
  }

  onSubmit() {
    this.obj = this.loginForm.value;
    // this.onAdd.emit(this.obj);
    console.log(this.loginForm.value);
    this.cartService.login(this.obj).subscribe(res => {console.log(res)})
    this.loginForm.reset();
  }addToggle()
  {
    this.status = !this.status;
  }
}
