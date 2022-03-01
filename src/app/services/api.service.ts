import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlBase = 'https://api.shrtco.de/v2/shorten?url=';

  constructor(private httpClient: HttpClient) { }

  pegar(url: any): Observable<any> {
    return this.httpClient.get(this.urlBase+url)
  }
}
