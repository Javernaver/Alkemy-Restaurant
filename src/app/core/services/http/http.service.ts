import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = environment.spoonUrl;
  private apiKey: string = environment.apiKeySpoon;
  private httpOptions: HttpHeaders  | any;

  constructor(private http: HttpClient) {
    
  }

  opciones() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  get<type>(path: string, queries: string = ''): Observable<type> {
    
    this.opciones();
    return this.http.get(`${this.baseUrl}${path}?apiKey=${this.apiKey}&${queries}`, this.httpOptions)
    .pipe(
      map( (data: any) => {
        return data as type;
      })
    );
  }
}
