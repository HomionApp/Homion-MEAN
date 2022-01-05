import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
  declarations: [UserNavComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [UserNavComponent],
})
export class UserModule {}
