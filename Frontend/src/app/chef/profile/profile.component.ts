import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChefService } from '../chef.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null),
    mobile: new FormControl(null),
    imageURL: new FormControl(null),
    status: new FormControl(null),
    panNumber: new FormControl(null),
    startTime: new FormControl(null),
    endTime: new FormControl(null),
    about: new FormControl(null),
    rating: new FormControl(null),
    ratingCount: new FormControl(null),
  });

  constructor(private chefService: ChefService) {}

  ngOnInit(): void {
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.chefService.getProfileDetails().subscribe((res) => {
      console.log(res);
    });
  }
}
