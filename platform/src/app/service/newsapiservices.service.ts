import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=12ce7ae5cee948039570bedda0814c8e';

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
