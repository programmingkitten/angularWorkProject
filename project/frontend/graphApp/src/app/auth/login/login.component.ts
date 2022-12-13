import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  handleFormSubmit(form: NgForm) {
    const value: {username: string, password: string} = form.value;
    if (form.invalid) {console.log("?");return;}
    console.log(value.username, value.password)
   
  }
}
