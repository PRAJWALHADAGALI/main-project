import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { ProductsCategoriesComponent } from './products-categories/products-categories.component';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistorComponent } from './registor/registor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartService } from "./services/cart.service";
import { ProductService } from "./services/product.service";
import { HeadComponent } from './head/head.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { NewheaderComponent } from './newheader/newheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyordersComponent } from './myorders/myorders.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'productsCategories', component: ProductsCategoriesComponent },
  { path: 'registor', component: RegistorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'termsAndConditions', component: TermsAndConditionsComponent },
  { path: 'category/:id', component: ProductsListComponent },
  { path: 'cart', component: CartListComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: 'head', component: HeadComponent },
  { path: 'address', component: AddressComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'header', component: NewheaderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    HeaderComponent,
    ProductsCategoriesComponent,
    FooterComponent,
    RegistorComponent,
    LoginComponent,
    SignupComponent,
    TermsAndConditionsComponent,
    ProductsListComponent,
    CartListComponent,
    HeadComponent,
    AddressComponent,
    PaymentComponent,
    NewheaderComponent,
    MyordersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ProductService,
    CartService,
    CartListComponent,
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
