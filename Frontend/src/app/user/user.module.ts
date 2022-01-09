import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { CartComponent } from './cart/cart.component';
import { ChefDetailsModule } from './chef-details/chef-details.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserRoutingModule } from './user-routing.module';
import { FavouritesComponent } from './favourites/favourites.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './search/filter/filter.component';

@NgModule({
  declarations: [
    UserNavComponent,
    AddressComponent,
    EditAddressComponent,
    FavouritesComponent,
    CartComponent,
    SearchComponent,
    FilterComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ChefDetailsModule, FormsModule],
  exports: [UserNavComponent],
})
export class UserModule {}
