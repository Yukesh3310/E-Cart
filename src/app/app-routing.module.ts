import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path:'about',
  component:AboutComponent
},
{
  path:'product',
  component:ProductComponent
},
{
  path:'login-page',
  component:LoginPageComponent
},
{
  path:'homepage',
  component:HomepageComponent
},
{
  path:'',
  component:HomepageComponent
},
{
  path:'signup',
  component:SignupComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
