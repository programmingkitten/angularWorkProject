import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string = '';

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


      this.authService.login(data).subscribe({
        next: (res) => {
          console.log(res);
          this.authService.isLoggedIn();
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err); this.error = err}
      });
    
      this.authService.isLoggedIn();
    
    

    }
}
