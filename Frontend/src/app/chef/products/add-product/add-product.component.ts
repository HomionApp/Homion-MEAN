import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChefService } from '../../chef.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  categories: { _id: string; name: string }[] = [];
  subCategories: { _id: string; name: string }[] = [];
  imgPath = "";

  form = new FormGroup({
    productName: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    subCategory: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
    unitValue: new FormControl(null, [Validators.required, Validators.min(1)]),
    unit: new FormControl('gm', Validators.required),
    prepTime: new FormControl(null, Validators.required),
    openForHome: new FormControl('no', Validators.required),
    jainAvailable: new FormControl('no', Validators.required),
    isSpeciality: new FormControl('no', Validators.required),
    productImage: new FormControl(null, Validators.required),
  });

  constructor(private chefService: ChefService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getSubCategories();
  }

  getCategories() {
    this.chefService.getCategories().subscribe((res) => {
      if (res.status == 200) {
        this.categories = res.data;
        this.form.patchValue({
          category: this.categories[0]?._id,
        });
      }
    });
  }

  getSubCategories() {
    this.chefService.getSubCategories().subscribe((res) => {
      if (res.status == 200) {
        this.subCategories = res.data;
        this.form.patchValue({
          subCategory: this.subCategories[0]?._id,
        });
      }
    });
  }

  fileChangeEvent(event: any) {
    const files = event.target.files;
    let file;
    if(files){
      file = files[0];
      
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = (_event) => {
        this.imgPath = reader.result as string; 
      }
      console.log(this.imgPath)
    }
    // this.filesToUpload = event.srcElement.files;
    // console.log(this.filesToUpload);
    // this.fileInput = event.srcElement;
 }

  addProduct() {
    console.log(this.form);
  }

  
}
