import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefRoutingModule } from './chef-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderDetailsModalComponent } from './order-details-modal/order-details-modal.component';
import { ChefNavComponent } from './chef-nav/chef-nav.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BusinessComponent } from './business/business.component';
import { HistoryComponent } from './business/history/history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomeComponent, OrderDetailsModalComponent, ChefNavComponent, MenuComponent, ProductsComponent, AddProductComponent, BusinessComponent, HistoryComponent],
  imports: [CommonModule, ChefRoutingModule, ReactiveFormsModule, NgbModule],
  exports: [ChefNavComponent],
})
export class ChefModule {}
