import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouterModule } from '@angular/router';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth-guard';



@NgModule({
  declarations: [
    ProfileComponent,
    FeedbackComponent,
    FeedbackDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
      {path:'feedback-list', component: FeedbackComponent, canActivate: [AuthGuard]},
      {path:'feedback-detais/:id', component: FeedbackDetailsComponent, canActivate: [AuthGuard]}
    ]),
   
  ]
})
export class UsersModule { }
