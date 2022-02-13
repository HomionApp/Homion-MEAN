import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response/response.model';

const host = environment.url + 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public saveAddress(address: any): Observable<Response> {
    return this.http.post<Response>(`${host}/saveAddress`, {
      address: address,
    });
  }
}
