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
  chefId!: string;
  products: any[] = [];
  isFavourite = false;
  isLoading = true;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.chefId = this.activatedRoute.snapshot.params['chefId'];
    this.getChefById();
  }

  getChefById() {
    this.userService.getChefById(this.chefId).subscribe((res) => {
      if (res.status == 200) {
        this.chef = res.data;
        this.products = this.chef.products.slice();
        delete this.chef.products;
        console.log(this.chef);
        console.log(this.products);
      }
      this.isLoading = false;
    });
  }
}
