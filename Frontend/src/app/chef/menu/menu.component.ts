import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items!: any[];
  isLoading = true;

  constructor(private chefService: ChefService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.chefService.getMenuItems().subscribe((res) => {
      if (res.status == 200) {
        this.items = res.data;
      }
      this.isLoading = false;
    });
  }

  changeStatus(productId: string, status: string) {
    this.chefService.changeProductStatus(productId, status).subscribe((res) => {
      if (res.status == 200) {
        this.getItems();
      }
    });
  }
}
