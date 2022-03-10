import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  orderStatus = 'COMPLETED';
  showOrderDetails = false;
  showOrderReview = false;

  completed: any[] = [];
  inProgress: any[] = [];
  cancelled: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.userService.getOrders().subscribe((res) => {
      if (res.status == 200) {
        res.data.forEach((order: any) => {
          if (order.status === 'DELIVERED') {
            this.completed.push(order);
          } else if (
            order.status === 'ONGOING' ||
            order.status === 'PREPARED'
          ) {
            this.inProgress.push(order);
          } else if (order.status === 'CANCELLED') {
            this.cancelled.push(order);
          }
        });
      }
    });
  }
}
