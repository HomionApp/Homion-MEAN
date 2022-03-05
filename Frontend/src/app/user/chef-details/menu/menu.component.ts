import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() products!: any;
  @Input() chef!: any;
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
    if (this.userService.cartChefId && this.userService.cartChefId !== this.chef._id) {
      if (
        window.confirm('There are items added in the cart from other chef. Do you want discard them?')
      ) {
        this.userService.deleteCart().subscribe((res) => {
          if (res.status == 201) {
            product.isAdded = true;
            this.cartItems.push({ product: product, quantity: 1 });
            this.userService.cartItems.emit(this.cartItems);
          }
        });
      }
    } else {
      product.isAdded = true;
      this.cartItems.push({ product: product, quantity: 1 });
      this.userService.cartItems.emit(this.cartItems);
    }
  }
}
