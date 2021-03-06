import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'reset-password/:jwtToken',
    component: ResetPasswordComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
