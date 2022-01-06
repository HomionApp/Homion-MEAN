import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModule } from '../user/user.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ChefRegisterComponent } from './auth/chef-register/chef-register.component';
import { ChefModule } from '../chef/chef.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    FooterComponent,
    MessageModalComponent,
    ConfirmModalComponent,
    ChefRegisterComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, UserModule, ChefModule],
  providers: [],
  exports: [
    AuthComponent,
    LoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    ChefRegisterComponent,
  ],
})
export class SharedModule {}
