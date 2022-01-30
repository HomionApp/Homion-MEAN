import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Chef } from 'src/app/models/request/chef.model';
import { User } from 'src/app/models/request/user.model';
import { Response } from 'src/app/models/response/response.model';
import { environment } from 'src/environments/environment';

const host = environment.url + 'auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() isLoggedIn = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<Response> {
    return this.http.post<Response>(`${host}/registerUser`, { user: user });
  }

  public registerChef(chef: Chef): Observable<Response> {
    return this.http.post<Response>(`${host}/registerChef`, { chef: chef });
  }

  public login(obj: Object): Observable<Response> {
    return this.http.post<Response>(`${host}/login`, obj);
  }

  public forgotPassword(obj: Object): Observable<Response> {
    return this.http.post<Response>(`${host}/forgotPassword`, obj);
  }

  public resetPassword(obj: any): Observable<Response> {
    const options = { headers: { Authorization: `Bearer ${obj.token}` } };
    return this.http.post<Response>(`${host}/resetPassword`, obj, options);
  }

  public verifyToken(token: string): Observable<Response> {
    const options = { headers: { Authorization: `Bearer ${token}` } };
    return this.http.post<Response>(`${host}/verifyToken`, {}, options);
  }

  passwordValidator(control: AbstractControl): any {
    const password = control.value;
    if (password.length < 8) {
      return { message: 'Your password must contain at least 8 characters.' };
    }
    if (password.search(/[A-Z]/) < 0) {
      return {
        message: 'Your password must contain at least one capital letter.',
      };
    }
    if (password.search(/[0-9]/) < 0) {
      return { message: 'Your password must contain at least one digit.' };
    }
    if (password.search(/[!@#$%^&*]/) < 0) {
      return {
        message: 'Your password must contain at least one special character.',
      };
    }
    return null;
  }
}
