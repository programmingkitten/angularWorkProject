import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router) {};

  handleFormSubmit(form: NgForm) {
    const data: {email: string, password: string} = form.value;
    if (form.invalid) {console.log("?");return;}
    const httpOptions = {
      withCredentials: true
    };
    this.http.post('http://127.0.0.1:8000/api/login', data, {withCredentials: true}).subscribe(res => {console.log(`${res}!!!!!!!!!!!!!!!!!!!!!!!!!!`)})
    this.http.get('http://127.0.0.1:8000/api/user', {withCredentials: true}).subscribe(res => {console.log('USER', res)})

  }
}
