import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from '../feedback/feedback/feedback.component';
import { RouterModule } from '@angular/router';
import { FeedbackDetailsComponent } from '../feedback/feedback-details/feedback-details.component';
import { AuthGuard } from '../auth-guard';
import { ViewUserComponent } from './view-user/view-user.component';
import { EmailPipe } from './email.pipe';
import { ShortenPipe } from '../feedback/shorten.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    ViewUserComponent,
    EmailPipe,
    ShortenPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
      {path:'profile/:id', component: ViewUserComponent, canActivate: [AuthGuard]},
      {path:'feedback/feedback-list', component: FeedbackComponent, canActivate: [AuthGuard]},
      {path:'feedback/feedback-detais/:id', component: FeedbackDetailsComponent, canActivate: [AuthGuard],}
    ]),
   
  ]
})
export class UsersModule { }
