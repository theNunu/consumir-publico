import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {

    // const id = this.route.snapshot.paramMap.get('id');

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(id).subscribe((data: any) => {
      this.product = data;
    });

  }

}
