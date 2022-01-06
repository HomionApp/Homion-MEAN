import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { ChefDetailsModule } from './chef-details/chef-details.module';

@NgModule({
  declarations: [UserNavComponent, AddressComponent, EditAddressComponent],
  imports: [CommonModule, UserRoutingModule, ChefDetailsModule],
  exports: [UserNavComponent],
})
export class UserModule {}
