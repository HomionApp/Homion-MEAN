import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChefDetailsModule } from './chef-details/chef-details.module';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderReviewComponent } from './my-orders/order-review/order-review.component';
import { ViewOrderDetailsComponent } from './my-orders/view-order-details/view-order-details.component';
import { FilterComponent } from './search/filter/filter.component';
import { SearchComponent } from './search/search.component';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AddressComponent,
    EditAddressComponent,
    FavouritesComponent,
    CartComponent,
    SearchComponent,
    FilterComponent,
    MyOrdersComponent,
    ViewOrderDetailsComponent,
    HomeComponent,
    OrderReviewComponent,
    CheckoutComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    ChefDetailsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [],
})
export class UserModule {}
