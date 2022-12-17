import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: {
    'id': number,
    'email': string
  } | undefined;
  error: string = '';
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router) {};

  handleFormSubmit(form: NgForm) {
    const data: {email: string, password: string, repass: string} = form.value;
    if (form.invalid) {this.error = "Invalid email";return;}
    if (data.password != data.repass) {this.error = "Passwords doesn't match!"; return;}
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(!data.password.match(passRegex)) {
      this.error = 'Password should contain at least 1 upper case, 1 lower case letter, 1 number and over 7 chars'; return;
    }
    this.authService.post('register', data)
    .subscribe({
      next: (res) => {this.router.navigate(['login'])},
      error: (err) => {this.error = err.email[0]}
    })
  }
}
