import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusinessComponent } from './business/business.component';
import { HistoryComponent } from './business/history/history.component';
import { ChefRoutingModule } from './chef-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderDetailsModalComponent } from './order-details-modal/order-details-modal.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    ProductsComponent,
    AddProductComponent,
    BusinessComponent,
    HistoryComponent,
    OrderDetailsModalComponent,
    PastOrdersComponent,
    InvoiceComponent,
    ProfileComponent,
    AddressComponent,
    EditAddressComponent,
  ],
  imports: [
    CommonModule,
    ChefRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [],
})
export class ChefModule {}
