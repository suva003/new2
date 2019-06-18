import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ListingComponent } from './listing/listing.component';
import { MyprofileinfoComponent } from './myprofileinfo/myprofileinfo.component';
import { ProfileComponent } from './profile/profile.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'men',  component: MenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'listing', component: ListingComponent},
  {path: 'myprofileinfo', component: MyprofileinfoComponent ,
  
  children:[
    {path:'profile',component: ProfileComponent},
    {path:'mycart', component: MycartComponent},
    {path:'myorder', component: MyorderComponent},
    {path:'mywishlist', component: MywishlistComponent},
    {path:'myaddress', component: MyaddressComponent}
  ] 
 },
    {path:'product', component: ProductComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path:'login', component: LoginComponent}
];
   
  

  



  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomeComponent,MenComponent,WomenComponent,MyorderComponent,ListingComponent,MyprofileinfoComponent,ProfileComponent,MycartComponent,MywishlistComponent,MyaddressComponent,ProductComponent,CheckoutComponent,LoginComponent]
