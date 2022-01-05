import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { UserModule } from '../user/user.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MessageModalComponent,
    ConfirmModalComponent,
  ],
  imports: [BrowserModule, SharedRoutingModule, UserModule],
  providers: [],
  exports: [AuthComponent, LoginComponent, RegisterComponent, HeaderComponent],
})
export class SharedModule {}
