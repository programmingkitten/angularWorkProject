import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit{
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getUser();
  }

  

  getUser() {
    console.log(this.activatedRoute.snapshot.params['id'])
  }
}
