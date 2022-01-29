import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/response/response.model';
import { User } from 'src/app/models/request/user.model';
import { Chef } from 'src/app/models/request/chef.model';

const host = 'http://localhost:9999/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<Response> {
    return this.http.post<Response>(`${host}/registerUser`, { user: user });
  }

  public registerChef(chef: Chef): Observable<Response> {
    return this.http.post<Response>(`${host}/registerChef`, { chef: chef });
  }
}
