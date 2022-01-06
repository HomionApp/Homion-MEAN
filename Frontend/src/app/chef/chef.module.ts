import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefRoutingModule } from './chef-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderDetailsModalComponent } from './order-details-modal/order-details-modal.component';
import { ChefNavComponent } from './chef-nav/chef-nav.component';

@NgModule({
  declarations: [HomeComponent, OrderDetailsModalComponent, ChefNavComponent],
  imports: [CommonModule, ChefRoutingModule],
  exports: [ChefNavComponent],
})
export class ChefModule {}
