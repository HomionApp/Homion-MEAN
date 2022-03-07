import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any;
  address: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.selectedAddress.subscribe((address) => {
      this.address = address;
    });
    this.getCartItems();
  }

  getCartItems() {
    this.userService.getCartItems().subscribe((res) => {
      if (res.status == 200) {
        console.log(res.data);

        this.cart = res.data;
      }
    });
  }

  placeOrder() {
    if (this.cart.items.length > 0) {
      let order = {
        _id: this.cart._id,
        amount: this.cart.amount,
        paymentMode: 'COD',
        status: 'ORDERED',
        user: this.cart.user,
        chef: this.cart.chef,
        address: this.address,
        items: this.cart.items,
      };
      this.userService.placeOrder(order).subscribe((res) => {
        console.log(res);
      });
    }
  }

  deleteCartItem(productId: string) {
    this.cart.items = this.cart.items.filter(
      (item: any) => item.product._id != productId
    );
    console.log(this.cart.items);
    this.toPayAmount();
  }

  toPayAmount() {
    this.cart.amount = 0;
    this.cart.items.forEach((item: any) => {
      this.cart.amount += item.product.price * item.quantity;
    });
  }
}
