import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/response.model';
import { User } from 'src/app/models/user.model';

const host = 'http://localhost:9999/auth/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<Response> {
    return this.http.post<Response>(host + 'registerUser', { user: user });
  }
}
