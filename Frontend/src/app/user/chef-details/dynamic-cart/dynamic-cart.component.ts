import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-dynamic-cart',
  templateUrl: './dynamic-cart.component.html',
  styleUrls: ['./dynamic-cart.component.css'],
})
export class DynamicCartComponent implements OnInit, OnDestroy {
  @Input() user: any;
  @Input() chef: any;
  cartItems: any[] = [];
  cart: any = {};
  toPay = 0;
  orderId!: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.cartItems.subscribe((cartItems) => {
      this.cartItems = cartItems;
      console.log(this.cartItems);

      this.toPayAmount();
    });
    this.getCartItems();
  }

  getCartItems() {
    this.userService.getCartItems().subscribe((res) => {
      if (res.status == 200 && res.data) {
        this.orderId = res.data._id;
        this.userService.cartChefId = res.data.chef;
        this.cartItems = res.data.items.map((item: any) => {
          item.product.isAdded = true;
          return item;
        });
        this.userService.cartItems.emit(this.cartItems);
      }
    });
  }

  deleteCartItem(productId: string) {
    this.cartItems = this.cartItems.filter(
      (item) => item.product._id != productId
    );
    console.log(this.cartItems);
    this.userService.cartItems.emit(this.cartItems);
  }

  toPayAmount() {
    this.toPay = 0;
    this.cartItems.forEach((item) => {
      this.toPay += item.product.price * item.quantity;
    });
  }

  ngOnDestroy(): void {
    if (this.orderId) {
      this.cart.orderId = this.orderId;
    }
    this.cart.user = this.user._id;
    this.cart.chef = this.chef._id;
    this.cart.items = this.cartItems.map((item) => {
      return { product: item.product._id, quantity: item.quantity };
    });
    this.cart.amount = this.toPay;
    console.log(this.cart);
    this.userService.addToCart(this.cart).subscribe((res) => {
      console.log(res);
    });
  }
}
