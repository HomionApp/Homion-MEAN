import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent implements OnInit {
  active = 1  
  orderType = 'COMPLETED'
  viewDetailsModal = false;
  constructor() { }

  ngOnInit(): void {
  }

}
