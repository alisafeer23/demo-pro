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

  // Tabs data
  tabs: Array<{ id: string, title: string, content: string }> = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.loadProductDetails();
      this.initializeTabs(); // Initialize tabs after loading product details
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

  initializeTabs(): void {
    this.tabs = [
      { id: 'london', title: 'London', content: `Explore the historic landmarks of London with ${this.productName}.` },
      { id: 'paris', title: 'Paris', content: `Discover the romantic city of Paris with ${this.productName}.` },
      { id: 'tokyo', title: 'Tokyo', content: `Experience the vibrant culture of Tokyo with ${this.productName}.` },
    ];
  }
}
