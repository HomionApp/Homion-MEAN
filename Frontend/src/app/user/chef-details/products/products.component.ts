import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() products!: any[];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log(this.products);
  }

  changeFavouriteProduct(product: any) {
    this.userService
      .changeFavouriteProduct(product._id, !product.isFavourite)
      .subscribe((res) => {
        if (res.status == 200) {
          product.isFavourite = !product.isFavourite;
        }
      });
  }
}
