import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AordersComponent } from './admin/aorders/aorders.component';
import { AproductsComponent } from './admin/aproducts/aproducts.component';
import { AusersComponent } from './admin/ausers/ausers.component';
import { CategoriesComponent } from './admin/categories/categories.component';
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
import { UserHomeGuard } from './user-home.guard';
import { AdminHomeGuard } from './admin-home.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'singleproduct/:id', component: SingleProductComponent},
  { path: 'profile', canActivate:[UserHomeGuard], component: ProfileComponent},
  { path: 'cart', canActivate:[UserHomeGuard], component: CartComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'category/:id', component: CategoryComponent},
  { path: 'search', component: SearchComponent},
  { path: 'checkout', canActivate:[UserHomeGuard], component: CheckoutComponent},
  { path: 'myorders', canActivate:[UserHomeGuard], component: MyOrdersComponent},
  { path: 'admin/dashboard', canActivate:[AdminHomeGuard], component: DashboardComponent},
  { path: 'admin/aorders', canActivate:[AdminHomeGuard], component: AordersComponent},
  { path: 'admin/aproducts', canActivate:[AdminHomeGuard], component: AproductsComponent},
  { path: 'admin/ausers', canActivate:[AdminHomeGuard], component: AusersComponent},
  { path: 'admin/categories', canActivate:[AdminHomeGuard], component: CategoriesComponent},
  { path: 'admin/addcategory', canActivate:[AdminHomeGuard], component: AddCategoryComponent},
  { path: 'admin/addproduct', canActivate:[AdminHomeGuard], component: AddProductComponent},
  { path: 'admin/editcategory/:id', canActivate:[AdminHomeGuard], component: EditCategoryComponent},
  { path: 'admin/editproduct/:id', canActivate:[AdminHomeGuard], component: EditProductComponent},
  { path: 'admin/orderdetail/:id', canActivate:[AdminHomeGuard], component: OrderDetailComponent},
  { path: 'admin/alogout', component: AlogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
