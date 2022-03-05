import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChefDeatilsComponenet } from './chef-details.component';
import { MenuComponent } from './menu/menu.component';
import { PreviewComponent } from './preview/preview.component';
import { ProductsComponent } from './products/products.component';
import { RatingComponent } from './rating/rating.component';
import { DynamicCartComponent } from './dynamic-cart/dynamic-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from '../user-routing.module';

@NgModule({
  declarations: [
    ChefDeatilsComponenet,
    PreviewComponent,
    ProductsComponent,
    MenuComponent,
    RatingComponent,
    DynamicCartComponent,
  ],
  imports: [CommonModule, NgbModule, UserRoutingModule],
  exports: [DynamicCartComponent],
})
export class ChefDetailsModule {}
