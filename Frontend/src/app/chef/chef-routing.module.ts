import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderDetailsModalComponent } from './order-details-modal/order-details-modal.component';

const routes: Routes = [
    {path: 'chefHome', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChefRoutingModule {}
