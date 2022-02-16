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
        console.log(this.products);
        this.isLoading = false;
      }
    });
  }

  deleteProduct(productId: string, publicId: string) {
    this.chefService.deleteProduct(productId, publicId).subscribe((res) => {
      if (res.status == 202) {
        this.products = this.products.filter(
          (product) => product._id !== productId
        );
      }
    });
  }
}
