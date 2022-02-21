import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  @Input() chef: any;
  isFavourite = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isFavouriteChef();
  }

  changeFavouriteChef(isFavourite: boolean) {
    this.userService
      .changeFavouriteChef(this.chef._id, isFavourite)
      .subscribe((res) => {
        if (res.status == 200) {
          this.isFavourite = isFavourite;
        }
      });
  }

  isFavouriteChef() {
    this.userService.isFavouriteChef(this.chef._id).subscribe((res) => {
      if (res.status == 200) {
        this.isFavourite = res.data;
      }
    });
  }
}
