import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefRoutingModule } from './chef-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderDetailsModalComponent } from './order-details-modal/order-details-modal.component';

@NgModule({
  declarations: [HomeComponent, OrderDetailsModalComponent],
  imports: [CommonModule, ChefRoutingModule],
  exports: [],
})
export class ChefModule {}
