import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/response/response.model';
import { User } from 'src/app/models/request/user.model';
import { Chef } from 'src/app/models/request/chef.model';

const host = 'http://localhost:9999/auth';

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
}
