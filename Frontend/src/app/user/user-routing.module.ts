import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ChefDeatilsComponenet } from './chef-details/chef-details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'address',
    component: AddressComponent,
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
    path: 'my-orders',
    component: MyOrdersComponent,
  },
  {
    path: 'chef/:id',
    component: ChefDeatilsComponenet,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
