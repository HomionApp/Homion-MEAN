import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.component.html',
  styleUrls: ['./chef-details.component.css'],
})
export class ChefDeatilsComponenet implements OnInit {
  chef!: any;
  user!: any;
  chefId!: string;
  products: any[] = [];
  isFavourite = false;
  isLoading = true;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) => {
      if (res.status == 200) this.user = res.data;
      this.getChefById();
    });
    this.chefId = this.activatedRoute.snapshot.params['chefId'];
  }

  getChefById() {
    this.userService.getChefById(this.chefId).subscribe((res) => {
      if (res.status == 200) {
        this.chef = res.data.chef;
        this.products = this.chef.products.slice();
        this.products.forEach((product) => {
          product.isFavourite = res.data.userFavouriteProducts.includes(
            product._id
          );
          product.isAdded = false;
        });
        delete this.chef.products;
      }
      this.isLoading = false;
    });
  }

}
