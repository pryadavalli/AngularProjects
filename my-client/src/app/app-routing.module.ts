import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full' },
  {path:'products', component:ProductComponent},
  {path:'products/:id', component:ProductDetailsComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductComponent,LoginComponent,HomeComponent,ProductDetailsComponent]
