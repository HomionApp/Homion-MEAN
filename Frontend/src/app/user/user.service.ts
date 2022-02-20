import { HttpClient, HttpParams } from '@angular/common/http';
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

  public editAddress(address: any): Observable<Response> {
    return this.http.post<Response>(`${host}/editAddress`, {
      address: address,
    });
  }

  public getAddress(): Observable<Response> {
    return this.http.get<Response>(`${host}/getAddress`);
  }

  public getAddressById(addressId: string): Observable<Response> {
    let options = { headers: { addressId: addressId } };
    return this.http.get<Response>(`${host}/getAddressById`, options);
  }

  public deleteAddress(addressId: string): Observable<Response> {
    let options = { headers: { addressId: addressId } };
    return this.http.delete<Response>(`${host}/deleteAddress`, options);
  }

  public search(criteria: string): Observable<Response> {
    return this.http.get<Response>(`${host}/search/${criteria}`);
  }
}
