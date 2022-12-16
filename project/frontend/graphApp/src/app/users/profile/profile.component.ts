import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from '../user-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user: IUser = {
    'email': '',
  };
  hideEditProfileUrl: boolean = true;
  welcomePageUrl: boolean = true;

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.setUser();
  };

  editProfile() {
    this.welcomePageUrl = false;
    this.hideEditProfileUrl = false;
  }

  setUser() {
    const data = this.authService.isLoggedIn().subscribe(
      {
        next: (data) => this.handleUserData(data),
        error: (err) => {console.log(err)},
      }
    );
  };

  handleUserData(data: any) {
    this.user.email = data.data.email.split('@')[0];
  };

  submitFormHandler(form: NgForm, APIurl: string) {
    console.log(form.value)
  }
};
