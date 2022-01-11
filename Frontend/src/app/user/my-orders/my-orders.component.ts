import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  orderStatus = 'COMPLETED';
  showOrderDetails = false;
  showOrderReview = false;

  constructor() {}

  ngOnInit(): void {}
}
