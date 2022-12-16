import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Emitters } from '../emitters/emitters';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  url = 'http://127.0.0.1:8000/api/'
  constructor(private http: HttpClient) { }

  post(apiUrl: string, data?: any, withCredentials?: boolean) {
    return this.http.post(this.url+apiUrl, data, {withCredentials: true})
  }
  
  put(apiUrl: string, data?: any) {
    return this.http.put(this.url+apiUrl, data, {withCredentials: true})
  }

  get(apiUrl: string) {
    return this.http.get(this.url + apiUrl)
  }

  getUser() {
    return this.http.get(this.url + 'user').subscribe()
  }

  isLoggedIn() {

    return this.http.get('http://127.0.0.1:8000/api/user', {withCredentials: true})

  };

  login(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/login', data, {withCredentials: true})
  }
};
