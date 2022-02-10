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
}
