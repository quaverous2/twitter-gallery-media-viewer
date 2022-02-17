import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  api_url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.api_url + `/getUser`);
  }
}
