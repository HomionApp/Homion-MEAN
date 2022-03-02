import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() products!: any[];
  cartItems: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.cartItems.subscribe((cartItems) => {
      this.cartItems = cartItems;
      const ids: any[] = [];
      this.cartItems.forEach((item) => ids.push(item.product._id));
      this.products.forEach((product: any) => {
        product.isAdded = ids.includes(product._id);
      });
    });
  }

  changeFavouriteProduct(product: any) {
    this.userService
      .changeFavouriteProduct(product._id, !product.isFavourite)
      .subscribe((res) => {
        if (res.status == 200) {
          product.isFavourite = !product.isFavourite;
        }
      });
  }

  addToCart(product: any) {
    product.isAdded = true;
    this.cartItems.push({ product: product, quantity: 1 });
    this.userService.cartItems.emit(this.cartItems);
  }
}
