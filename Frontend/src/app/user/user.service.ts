import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response/response.model';

const host = environment.url + 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  cartItems = new EventEmitter<any[]>();

  constructor(private http: HttpClient) {}

  public getUser(): Observable<Response> {
    return this.http.get<Response>(`${host}/getUser`);
  }

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

  public getChefById(chefId: string): Observable<Response> {
    let options = { headers: { chefId: chefId } };
    return this.http.get<Response>(`${host}/getChefById`, options);
  }

  public changeFavouriteChef(
    chefId: string,
    isFavourite: boolean
  ): Observable<Response> {
    return this.http.put<Response>(`${host}/changeFavouriteChef`, {
      chefId: chefId,
      isFavourite: isFavourite,
    });
  }

  public changeFavouriteProduct(
    productId: string,
    isFavourite: boolean
  ): Observable<Response> {
    return this.http.put<Response>(`${host}/changeFavouriteProduct`, {
      productId: productId,
      isFavourite: isFavourite,
    });
  }

  public isFavouriteChef(chefId: string): Observable<Response> {
    return this.http.get<Response>(`${host}/isFavouriteChef/${chefId}`);
  }
}
