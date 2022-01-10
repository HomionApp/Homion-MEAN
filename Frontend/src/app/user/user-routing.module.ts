import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ChefDeatilsComponenet } from './chef-details/chef-details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
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
    path: 'chef-details/:id',
    component: ChefDeatilsComponenet,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
