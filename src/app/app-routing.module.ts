import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsAdminComponent } from './pages/admin/products-admin/products-admin.component';
import { MyNavbarComponent } from './pages/my-navbar/my-navbar.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path: 'products/:id',
    component: ProductDetailComponent
  },

  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path:'admin/products',
    component: ProductsAdminComponent

  },
  {
    path: 'myNavbar',
    component: MyNavbarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
