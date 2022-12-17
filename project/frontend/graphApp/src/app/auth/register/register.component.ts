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
    const data: {email: string, password: string} = form.value;
    if (form.invalid) {console.log("?");return;}
    this.authService.post('register', data)
    .subscribe({
      next: (res) => {this.router.navigate(['login'])},
      error: (err) => {this.error = err.email[0]}
    })
  }

  
}
