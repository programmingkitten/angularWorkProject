import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouterModule } from '@angular/router';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    FeedbackComponent,
    FeedbackDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'profile', component:ProfileComponent},
      {path:'feedback-list', component: FeedbackComponent},
      {path:'feedback-detais/:id', component: FeedbackDetailsComponent}
    ]),
    FormsModule,
  ]
})
export class UsersModule { }
