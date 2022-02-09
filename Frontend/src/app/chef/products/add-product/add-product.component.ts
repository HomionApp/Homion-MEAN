import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChefService } from '../../chef.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  categories: { _id: string; name: string }[] = [];
  subCategories: { _id: string; name: string }[] = [];

  constructor(private chefService: ChefService) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      subCategory: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      unitValue: new FormControl(null, Validators.required),
      unit: new FormControl('gm', Validators.required),
      prepTime: new FormControl(null, Validators.required),
      openForHome: new FormControl('no', Validators.required),
      jainAvailable: new FormControl('no', Validators.required),
      isSpeciality: new FormControl('no', Validators.required),
      productImage: new FormControl(null, Validators.required),
    });

    this.getCategories();
    this.getSubCategories();
  }

  getCategories() {
    this.chefService.getCategories().subscribe((res) => {
      if (res.status == 200) {
        this.categories = res.data;
        this.productForm.patchValue({
          category: this.categories[0]?._id,
        });
      }
    });
  }

  getSubCategories() {
    this.chefService.getSubCategories().subscribe((res) => {
      if (res.status == 200) {
        this.subCategories = res.data;
        this.productForm.patchValue({
          subCategory: this.subCategories[0]?._id,
        });
      }
    });
  }

  addProduct() {
    console.log(this.productForm);
  }
}
