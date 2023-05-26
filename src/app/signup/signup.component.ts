import { Component } from '@angular/core';
import { FormGroup, FormsModule,ReactiveFormsModule, FormControl, Validators, FormBuilder  } from '@angular/forms';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup: FormGroup;
  obj: any;
  status = false;

  constructor(private fb : FormBuilder, private cartService : CartService) {
    this.signup = fb.group({
      mail: [""],
      password: [""]
    });
  }

  onSubmit() {
    this.obj = this.signup.value;
    // this.onAdd.emit(this.obj);
    console.log(this.signup.value);
    this.cartService.signup(this.obj).subscribe(res => {console.log(res)})
    this.signup.reset();
  }addToggle()
  {
    this.status = !this.status;
  }
}
