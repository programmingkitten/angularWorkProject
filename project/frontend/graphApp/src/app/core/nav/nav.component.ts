import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Emitters } from 'src/app/emitters/emitters';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  authenticated = false;
  user: any | undefined
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth
      }
    )

    this.authService.isLoggedIn().subscribe({
      next: () => Emitters.authEmitter.emit(true),
      error: (err) => console.log(err.error),
    })

  }

}
