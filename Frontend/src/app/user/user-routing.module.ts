import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from '../user-auth.guard';
import { AddressComponent } from './address/address.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChefDeatilsComponenet } from './chef-details/chef-details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [UserAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'favourites',
        component: FavouritesComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
      },
      {
        path: 'chef-details/:chefId',
        component: ChefDeatilsComponenet,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
