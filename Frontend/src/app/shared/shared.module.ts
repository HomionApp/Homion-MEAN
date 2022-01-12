import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { ChefRegisterComponent } from './auth/chef-register/chef-register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import { ChefNavComponent } from './chef-nav/chef-nav.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { UserNavComponent } from './user-nav/user-nav.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ChefNavComponent,
    UserRegisterComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmModalComponent,
    ChefRegisterComponent,
    UserNavComponent
  ],
  imports: [CommonModule, SharedRoutingModule],
  providers: [],
  exports: [
    AuthComponent,
    LoginComponent,
    UserRegisterComponent,
    HeaderComponent,
    ChefRegisterComponent,
    FooterComponent,
    ChefNavComponent,
    ConfirmModalComponent
  ],
})
export class SharedModule {}
