import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './chef/home/home.component';
import { ChefModule } from './chef/chef.module';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, UserModule, ChefModule, NgbModule],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
