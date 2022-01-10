import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { CartComponent } from './cart/cart.component';
import { ChefDetailsModule } from './chef-details/chef-details.module';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ViewOrderDetailsComponent } from './my-orders/view-order-details/view-order-details.component';
import { FilterComponent } from './search/filter/filter.component';
import { SearchComponent } from './search/search.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserNavComponent,
    AddressComponent,
    EditAddressComponent,
    FavouritesComponent,
    CartComponent,
    SearchComponent,
    FilterComponent,
    MyOrdersComponent,
    ViewOrderDetailsComponent,
    HomeComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ChefDetailsModule, FormsModule],
  exports: [UserNavComponent],
})
export class UserModule {}
