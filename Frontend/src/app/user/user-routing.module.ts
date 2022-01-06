import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefDeatilsComponenet } from './chef-details/chef-details.component';

const routes: Routes = [
  {
    path:'chef/:id',
    component: ChefDeatilsComponenet
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
