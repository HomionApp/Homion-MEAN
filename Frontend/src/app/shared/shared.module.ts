import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, HeaderComponent],
  imports: [SharedRoutingModule],
  providers: [],
  exports: [AuthComponent, LoginComponent, RegisterComponent, HeaderComponent]
})
export class SharedModule {}
