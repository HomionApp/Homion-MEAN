import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { ChefDetailsModule } from './chef-details/chef-details.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserNavComponent, AddressComponent, EditAddressComponent],
  imports: [CommonModule, UserRoutingModule, ChefDetailsModule],
  exports: [UserNavComponent],
})
export class UserModule {}
