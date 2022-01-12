import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModule } from '../user/user.module';
import { AuthComponent } from './auth/auth.component';
import { ChefRegisterComponent } from './auth/chef-register/chef-register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import { ChefNavComponent } from './chef-nav/chef-nav.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ChefNavComponent,
    UserRegisterComponent,
    HeaderComponent,
    FooterComponent,
    MessageModalComponent,
    ConfirmModalComponent,
    ChefRegisterComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, UserModule],
  providers: [],
  exports: [
    AuthComponent,
    LoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    ChefRegisterComponent,
    FooterComponent,
    ChefNavComponent
  ],
})
export class SharedModule {}
