import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-dynamic-cart',
  templateUrl: './dynamic-cart.component.html',
  styleUrls: ['./dynamic-cart.component.css'],
})
export class DynamicCartComponent implements OnInit {
  @Input() chef: any;
  cartItems: any[] = [];
  toPay = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.cartItems.subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.toPayAmount();
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
}
