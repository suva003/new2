import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { MywishlistComponent } from './mywishlist/mywishlist.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListingComponent } from './listing/listing.component';
import { MyprofileinfoComponent } from './myprofileinfo/myprofileinfo.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { MyorderComponent } from './myorder/myorder.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { InsComponent } from './ins/ins.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { NewarrivelComponent } from './newarrivel/newarrivel.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MenComponent,
    WomenComponent,
    MywishlistComponent,
    MycartComponent,
    ProductComponent,
    LoginComponent,
    CheckoutComponent,
    ListingComponent,
    MyprofileinfoComponent,
    MyaddressComponent,
    MyorderComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    InsComponent,
    BestsellerComponent,
    NewarrivelComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
