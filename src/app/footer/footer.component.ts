import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  title = 'e-commerce';
  //Sidebar toggle show hide function
  status = false;
  @ViewChild("childelementTwo") childelementTwo: any;
  addToggle()
  {
    this.status = !this.status;
  }

}
