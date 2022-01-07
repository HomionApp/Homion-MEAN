import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ChefDeatilsComponenet } from './chef-details/chef-details.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  {
    path: 'address',
    component: AddressComponent,
  },
  {
    path: 'chef/:id',
    component: ChefDeatilsComponenet,
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
