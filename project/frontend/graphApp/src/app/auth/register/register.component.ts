import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  handleFormSubmit(form: NgForm) {
    const value: {username: string, password: string} = form.value;
    if (form.invalid) {console.log("?");return;}
    console.log(value.username, value.password)
   
  }
}