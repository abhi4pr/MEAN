import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { ApiTokenInterceptor, WebTokenInterceptor } from './api-token.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AproductsComponent } from './admin/aproducts/aproducts.component';
import { AusersComponent } from './admin/ausers/ausers.component';
import { AordersComponent } from './admin/aorders/aorders.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AheaderComponent } from './admin/aheader/aheader.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { OrderDetailComponent } from './admin/order-detail/order-detail.component';
import { AlogoutComponent } from './admin/alogout/alogout.component';
import { CategoryComponent } from './category/category.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    ProductsComponent,
    SingleProductComponent,
    LogoutComponent,
    ProfileComponent,
    CartComponent,
    DashboardComponent,
    AproductsComponent,
    AusersComponent,
    AordersComponent,
    CategoriesComponent,
    AheaderComponent,
    AddCategoryComponent,
    AddProductComponent,
    EditCategoryComponent,
    EditProductComponent,
    OrderDetailComponent,
    AlogoutComponent,
    CategoryComponent,
    SearchComponent,
    CheckoutComponent,
    MyOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:ApiTokenInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:WebTokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
