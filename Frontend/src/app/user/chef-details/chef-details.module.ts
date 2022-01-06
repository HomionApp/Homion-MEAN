import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChefDeatilsComponenet } from './chef-details.component';
import { MenuComponent } from './menu/menu.component';
import { PreviewComponent } from './preview/preview.component';
import { ProductsComponent } from './products/products.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [
    ChefDeatilsComponenet,
    PreviewComponent,
    ProductsComponent,
    MenuComponent,
    RatingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class ChefDetailsModule { }
