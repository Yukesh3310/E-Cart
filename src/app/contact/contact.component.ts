import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // router: any;

  // // constructor(private router : Router){
  // //   // this.router.navigate([]).then(result => {  window.open(FooterComponent, '_blank'); });
  // // }
  // onSubmit(){
  //   this.router.navigate('/src/app/footer/footer.component.html');
  // }
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }


}
