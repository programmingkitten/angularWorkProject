import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emitters } from '../emitters/emitters';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  url = 'http://127.0.0.1:8000/api/'
  constructor(private http: HttpClient) { }

  post(apiUrl: string, data?: any, withCredentials?: boolean) {
    return this.http.post(this.url+apiUrl, data, {withCredentials: withCredentials})
  }

  get(apiUrl: string) {
    return this.http.get(this.url + apiUrl)
  }

  getUser() {
    return this.http.get(this.url + 'user').subscribe()
  }

  isLoggedIn(): false | undefined {
    try {
        this.http.get('http://127.0.0.1:8000/api/user', {withCredentials: true}).subscribe(res => {
        Emitters.authEmitter.emit(true);
        return true
      }) 
    } catch(err) {
      Emitters.authEmitter.emit(false);
      return false
    };

    return false;
  };

  login(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/login', data, {withCredentials: true})
  }
};
