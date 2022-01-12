import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BusinessComponent } from './business/business.component';
import { HistoryComponent } from './business/history/history.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MenuComponent } from './menu/menu.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'addProduct',
    component: AddProductComponent,
  },
  {
    path: 'business',
    component: BusinessComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'past-orders',
    component: PastOrdersComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'address',
    component: AddressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChefRoutingModule {}
