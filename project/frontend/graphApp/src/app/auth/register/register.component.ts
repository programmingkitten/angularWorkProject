import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  url = 'http://127.0.0.1:8000/api/'
  constructor(private http: HttpClient) {}

  handleFormSubmit(form: NgForm) {
    const value: {email: string, password: string} = form.value;
    if (form.invalid) {console.log("?");return;}
    console.log(value.email, value.password)
  }

  post(apiUrl: string, data: any) {
    this.http.post(this.url+apiUrl, data)
  }
}
