import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from '../../chef.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  categories: { _id: string; name: string }[] = [];
  subCategories: { _id: string; name: string }[] = [];
  imgPath: string = '../../../../assets/image/defaultProduct.png';
  selectedFile!: File;
  showSpinner = false;
  showToast = false;
  productId!: string;

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    unitValue: new FormControl(null, [Validators.required, Validators.min(1)]),
    unitType: new FormControl('gm', Validators.required),
    prepTime: new FormControl(null, Validators.required),
    categoryId: new FormControl(null, Validators.required),
    subCategoryId: new FormControl(null, Validators.required),
    isOpenForHome: new FormControl(false, Validators.required),
    isJainAvailable: new FormControl(false, Validators.required),
    isSpeciality: new FormControl(false, Validators.required),
  });

  constructor(
    private chefService: ChefService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getSubCategories();
    this.productId = this.activatedRoute.snapshot.queryParams['productId'];
    if (this.productId) {
      this.location.replaceState('/chef/editProduct');
      this.getProductById();
    }
    console.log(this.productId);
  }

  getCategories() {
    this.chefService.getCategories().subscribe((res) => {
      if (res.status == 200) {
        this.categories = res.data;
        this.form.patchValue({
          categoryId: this.categories[0]?._id,
        });
      }
    });
  }

  getSubCategories() {
    this.chefService.getSubCategories().subscribe((res) => {
      if (res.status == 200) {
        this.subCategories = res.data;
        this.form.patchValue({
          subCategoryId: this.subCategories[0]?._id,
        });
      }
    });
  }

  fileChangeEvent(event: any) {
    const files = event.target.files;
    if (files?.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = (e: any) => {
        this.imgPath = e.target.result;
        this.selectedFile = files[0];
      };
    }
  }

  addProduct() {
    if (this.form.valid) {
      this.showSpinner = true;
      const formData = new FormData();
      if (this.productId) {
        formData.append('_id', this.productId);
      }
      formData.append('name', this.form.controls['name'].value);
      formData.append('price', this.form.controls['price'].value);
      formData.append('unitValue', this.form.controls['unitValue'].value);
      formData.append('unitType', this.form.controls['unitType'].value);
      formData.append('prepTime', this.form.controls['prepTime'].value);
      formData.append('categoryId', this.form.controls['categoryId'].value);
      formData.append(
        'subCategoryId',
        this.form.controls['subCategoryId'].value
      );
      formData.append(
        'isOpenForHome',
        this.form.controls['isOpenForHome'].value
      );
      formData.append(
        'isJainAvailable',
        this.form.controls['isJainAvailable'].value
      );
      formData.append('isSpeciality', this.form.controls['isSpeciality'].value);
      formData.append('file', this.selectedFile);

      this.chefService.addProduct(formData).subscribe((res) => {
        if (res.status == 201) {
          this.showSpinner = false;
          this.showToast = true;
          setTimeout(() => {
            this.router.navigateByUrl('/chef/products');
          }, 500);
        }
      });
    }
  }

  getProductById() {
    this.chefService.getProductbyId(this.productId).subscribe((res) => {
      if (res.status == 201) {
        const product = res.data;
        this.form.setValue({
          name: product.name,
          price: product.price,
          unitValue: product.unitValue,
          unitType: product.unitType,
          prepTime: product.prepTime,
          categoryId: product.categoryId,
          subCategoryId: product.subCategoryId,
          isOpenForHome: product.isOpenForHome,
          isJainAvailable: product.isJainAvailable,
          isSpeciality: product.isSpeciality,
        });
        this.imgPath = product.imageURL;
      }
    });
  }
}
