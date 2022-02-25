import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() products!: any;
  subCategories: any[] = [];
  menu = new Map();
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
    this.setSubCategoryWiseProducts();
  }

  setSubCategoryWiseProducts() {
    this.products.forEach((product: any) => {
      product.isAdded = false;
      var name = product.subCategoryId.name;
      if (!this.menu.has(product.subCategoryId.name)) {
        this.menu.set(name, [product]);
      } else {
        var products = this.menu.get(name);
        products.push(product);
        this.menu.set(name, products);
      }
    });
  }

  addToCart(product: any) {
    product.isAdded = true;
    this.cartItems.push({ product: product, quantity: 1 });
    this.userService.cartItems.emit(this.cartItems);
  }
}
