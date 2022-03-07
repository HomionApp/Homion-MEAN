import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showDetails = false;
  orderType = 'NEW';
  new: any[] = [];
  ongoing: any[] = [];
  prepared: any[] = [];
  cancelled: any[] = [];
  order: any;
  constructor(private chefService: ChefService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.chefService.getOrders().subscribe((res) => {
      if (res.status == 200) {
        res.data.forEach((order: any) => {
          switch (order.status) {
            case 'ORDERED':
              this.new.push(order);
              break;
            case 'ONGOING':
              this.ongoing.push(order);
              break;
            case 'PREPARED':
              this.prepared.push(order);
              break;
            case 'CANCELLED':
              this.cancelled.push(order);
              break;
          }
        });
      }
    });
  }

  setOrderDetails(order: any) {
    this.order = order
  }
}
