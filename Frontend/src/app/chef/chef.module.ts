import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefRoutingModule } from './chef-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderDetailsModalComponent } from './order-details-modal/order-details-modal.component';
import { ChefNavComponent } from './chef-nav/chef-nav.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [HomeComponent, OrderDetailsModalComponent, ChefNavComponent, MenuComponent, ProductsComponent],
  imports: [CommonModule, ChefRoutingModule],
  exports: [ChefNavComponent],
})
export class ChefModule {}
