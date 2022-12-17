import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from '../user-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  @ViewChild('imageURL') imageURLEl!: ElementRef;
  @ViewChild('descriptionForm') descriptionForm!: ElementRef;
  user: IUser = {
    'email': '',
  };
  hideEditProfileUrl: boolean = true;
  welcomePageUrl: boolean = true;
  userConfirmData: boolean = false;
  imageURLString: string = 'ok';
  userID: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.setUser();
  };

  feedback() {
    this.router.navigate(['feedback/feedback-list'])
  }

  viewProfile() {
    this.authService.isLoggedIn().subscribe({
      next: (res) => {
        const resCloned: any = res;
        console.log(resCloned.data.id)
        this.router.navigate([`profile/${resCloned.data.id}`])
      }
    })
  }

  confirmDataHandler(ev: Event) {
    ev.preventDefault();
    this.imageURLString = this.imageURLEl.nativeElement.value;
    this.userConfirmData = true;
  }

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
    const extractedData = data.data
    this.user.email = extractedData.email.split('@')[0];
    this.user.description = extractedData.description;
    this.user.imageURL = extractedData.imageURL;
    this.userID = data.data.id;
  };

  submitFormHandler(form: NgForm) {
    const value: {description: string, imageURL: string} = form.value;
    const data = {'description': this.descriptionForm.nativeElement.value, imageURL: this.imageURLString};
      this.authService.put('user', data).subscribe({
      next: (res) => {
        this.router.navigate([`profile/${this.userID}`])
        console.log("NAVIGATED")
      },
      error: (err) => console.log('error'),
    })
  }
};
