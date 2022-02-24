import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() products!: any;
  subCategories: any[] = [];
  menu = new Map();
  constructor() {}

  ngOnInit(): void {
    this.products.forEach((product: any) => {
      var name = product.subCategoryId.name;
      if (!this.menu.has(product.subCategoryId.name)) {
        this.menu.set(name, [product]);
      } else {
        var products = this.menu.get(name);
        products.push(product);
        this.menu.set(name, products);
      }
    });
  }
}
