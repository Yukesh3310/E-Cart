import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'e-commerce';
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
    this.status = !this.status;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
