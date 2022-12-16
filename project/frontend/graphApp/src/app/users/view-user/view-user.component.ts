import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from '../user-interface';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit{
  user: IUser | undefined;
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getUser();
  }

  

  getUser() {
    const userID = this.activatedRoute.snapshot.params['id'];
    this.authService.post('user', {'id': userID}).subscribe(
      (res) => console.log(res)
    )
  }
}
