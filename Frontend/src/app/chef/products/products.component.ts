import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: any[];
  isLoading = true;
  constructor(private chefService: ChefService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.chefService.getProducts().subscribe((res) => {
      if (res.status == 200) {
        this.products = res.data;
        this.isLoading = false;
      }
    });
  }

  editProduct(productId: string) {}

  deleteProduct(productId: string) {
    this.chefService.deleteProduct(productId).subscribe((res) => {
      if (res.status == 202) {
        this.products = this.products.filter(
          (product) => product._id !== productId
        );
      }
    });
  }
}
