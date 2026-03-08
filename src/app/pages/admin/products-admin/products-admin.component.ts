import { Component} from '@angular/core';
// import { CommonModule } from '@angular/common';
// Importa estos dos para la prueba
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule, // <--- Importante
    MatIconModule    // <--- Importante
  ],
  templateUrl: './products-admin.component.html',
  styleUrl: './products-admin.component.css'
})
export class ProductsAdminComponent {

}
