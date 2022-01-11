import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm! : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      'productName' : new FormControl(null, Validators.required),
      'category' : new FormControl(null, Validators.required),
      'subCategory' : new FormControl(null, Validators.required),
      'price' : new FormControl(null, Validators.required),
      'unitValue' : new FormControl(null, Validators.required),
      'unit' : new FormControl('gm',Validators.required),
      'prepTime' : new FormControl(null, Validators.required),
      'openForHome' : new FormControl('no', Validators.required),
      'jainAvailable' : new FormControl('no', Validators.required),
      'isSpeciality' : new FormControl('no', Validators.required),
      'productImage' : new FormControl(null, Validators.required)
    })
  }

  addProduct(){
    console.log(this.productForm);
  }

}
