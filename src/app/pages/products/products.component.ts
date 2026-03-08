import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    // this.productService.getProducts().subscribe((data: any) => {
    //   this.products = data;
    // });

    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.updatePagination();
    });

  }
  // LOGICA PARAM LA PAGNINACION HORIZONTAL
  // //  products:any[] = [];
  paginatedProducts: any[] = [];

  currentPage = 1;
  itemsPerPage = 4;

  updatePagination() {

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.paginatedProducts = this.products.slice(start, end);

  }

  nextPage() {

    if (this.currentPage * this.itemsPerPage < this.products.length) {
      this.currentPage++;
      this.updatePagination();
    }

  }

  prevPage() {

    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }

  }
  // PARA EL MODAL
  selectedProduct: any = null;
  showModal = false;

  openProduct(id: number) {

    this.productService.getProductById(id).subscribe((data: any) => {
      this.selectedProduct = data;
      this.showModal = true;
    });

  }

  closeModal() {
    this.showModal = false;
  }

}


