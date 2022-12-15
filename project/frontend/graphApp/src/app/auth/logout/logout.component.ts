import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    ) {
      this.logout()
    }

  logout() {
    this.http.post('http://127.0.0.1:8000/api/logout', {}, {withCredentials: true}).subscribe(
      res => {
        console.log(res)
        Emitters.authEmitter.emit(false)
        this.authService.isLoggedIn();

      })
    Emitters.authEmitter.emit(false)
    this.authService.isLoggedIn();
    this.router.navigate(['home'])

  }
}
