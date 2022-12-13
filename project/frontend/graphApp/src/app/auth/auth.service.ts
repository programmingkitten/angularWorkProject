import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  url = 'http://127.0.0.1:8000/api/'
  constructor(private http: HttpClient) { }

  post(apiUrl: string, data?: any) {
    return this.http.post(this.url+apiUrl, data)
  }

  get(apiUrl: string) {
    return this.http.post(this.url + apiUrl)
  }
}
