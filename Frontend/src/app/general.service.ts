import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from './models/response/response.model';

const host = environment.url + 'admin';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor(private http: HttpClient) {}

  public getAreas(): Observable<Response> {
    return this.http.get<Response>(`${host}/getAreas`);
  }
}
