import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';
import { ChefDetailsModule } from './chef-details/chef-details.module';

@NgModule({
  declarations: [UserNavComponent],
  imports: [CommonModule, UserRoutingModule, ChefDetailsModule],
  exports: [UserNavComponent],
})
export class UserModule {}
