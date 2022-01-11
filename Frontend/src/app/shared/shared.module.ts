import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChefModule } from '../chef/chef.module';
import { AuthComponent } from './auth/auth.component';
import { ChefRegisterComponent } from './auth/chef-register/chef-register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmModalComponent,
    ChefRegisterComponent,
    UserNavComponent
  ],
  imports: [CommonModule, SharedRoutingModule, ChefModule],
  providers: [],
  exports: [
    AuthComponent,
    LoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    ChefRegisterComponent,
    ConfirmModalComponent,
    FooterComponent
  ],
})
export class SharedModule {}
