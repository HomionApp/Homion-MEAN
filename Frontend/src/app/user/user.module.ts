import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { CartComponent } from './cart/cart.component';
import { ChefDetailsModule } from './chef-details/chef-details.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserRoutingModule } from './user-routing.module';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    UserNavComponent,
    AddressComponent,
    EditAddressComponent,
    FavouritesComponent,
    CartComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ChefDetailsModule],
  exports: [UserNavComponent],
})
export class UserModule {}
