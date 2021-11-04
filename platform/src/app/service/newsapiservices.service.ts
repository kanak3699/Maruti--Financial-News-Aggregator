import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    'https://newsdata.io/api/1/news?apikey=pub_776a68f9d3447b9468fffebf0d64908c768';

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
