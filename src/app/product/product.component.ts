import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId: string | null = '';
  productName: string = '';
  productDescription: string = '';
  videoUrl: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.loadProductDetails();
    });
  }
  

  loadProductDetails(): void {
    switch (this.productId) {
      case '1':
        this.productName = 'Product 1';
        this.productDescription = 'This is the description for Product 1.';
        this.videoUrl = 'https://www.youtube.com/embed/aMn7sO1d4Yc';
        break;
      case '2':
        this.productName = 'Product 2';
        this.productDescription = 'This is the description for Product 2.';
        this.videoUrl = 'https://www.youtube.com/embed/8Pv96bvBJL4';
        break;
      default:
        this.productName = 'Unknown Product';
        this.productDescription = 'No description available.';
        this.videoUrl = '';
    }
  }
}