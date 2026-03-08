import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsAdminComponent } from './pages/admin/products-admin/products-admin.component';
import { MyNavbarComponent } from './pages/my-navbar/my-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    // ProductsAdminComponent, // LO QUE QUITADO POR QUE AL SER TUN STADAOLE YA NO DEBE ESTAR AHQUI
    MyNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
