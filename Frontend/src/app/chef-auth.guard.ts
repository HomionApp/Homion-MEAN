import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './shared/service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChefAuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    let token = localStorage.getItem('token');
    if (token)
      return this.authService.verifyToken(token).pipe(
        map((res) => {
          if (res.data === 'CHEF') return true;
          this.router.navigateByUrl('');
          return false;
        })
      );
    this.router.navigateByUrl('');
    return false;
  }

  async verifyToken(token: string): Promise<boolean> {
    let ret = false;

    return ret;
  }

  canLoad(route: Route): Observable<boolean> | boolean {
    let token = localStorage.getItem('token');
    if (token)
      return this.authService.verifyToken(token).pipe(
        map((res) => {
          if (res.data === 'CHEF') return true;
          this.router.navigateByUrl('');
          return false;
        })
      );
    this.router.navigateByUrl('');
    return false;
  }
}