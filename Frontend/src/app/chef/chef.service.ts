import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response/response.model';

const host = environment.url + 'chef';

@Injectable({
  providedIn: 'root',
})
export class ChefService {
  productId?: string;

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<Response> {
    return this.http.get<Response>(`${host}/getCategories`);
  }

  public getSubCategories(): Observable<Response> {
    return this.http.get<Response>(`${host}/getSubCategories`);
  }

  public addProduct(formData: FormData): Observable<Response> {
    return this.http.post<Response>(`${host}/addProduct`, formData);
  }

  public getProducts(): Observable<Response> {
    return this.http.get<Response>(`${host}/getProducts`);
  }

  public getProductbyId(productId: string): Observable<Response> {
    let options = { headers: { productId: productId } };
    return this.http.get<Response>(`${host}/getProductById`, options);
  }

  public deleteProduct(productId: string): Observable<Response> {
    let options = { headers: { productId: productId } };
    return this.http.delete<Response>(`${host}/deleteProduct`, options);
  }

  public getMenuItems(): Observable<Response> {
    return this.http.get<Response>(`${host}/getMenuItems`);
  }

  public changeProductStatus(productId: string, status: string): Observable<Response> {
    let options = { headers: { productId: productId, status: status } };
    return this.http.get<Response>(`${host}/changeProductStatus`, options);
  }
}
