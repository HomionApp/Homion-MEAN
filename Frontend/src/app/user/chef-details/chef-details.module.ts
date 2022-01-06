import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './rating/rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChefDeatilsComponenet } from './chef-details.component';

@NgModule({
  declarations: [
    ChefDeatilsComponenet,
    PreviewComponent,
    ProductsComponent,
    MenuComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: []
})
export class ChefDetailsModule { }
