import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefAuthGuard } from './chef-auth.guard';
import { UserAuthGuard } from './user-auth.guard';

const routes: Routes = [
  {
    path: 'user',
    canLoad: [UserAuthGuard],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'chef',
    canLoad: [ChefAuthGuard],
    loadChildren: () => import('./chef/chef.module').then((m) => m.ChefModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
