import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  api_url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUser(handle: string): Observable<any> {
    let params = new HttpParams()
      .append("screen_name", handle)
    return this.http.get(this.api_url + `/getUser`, { params: params });
  }

  getUserTimeline(id: string): Observable<any> {
    let params = new HttpParams()
      .append("id", id)
    return this.http.get(this.api_url + `/getUserTimeline`, { params: params });
  }
}
