import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard';
import { ShortenPipe } from '../feedback/shorten.pipe';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [
    FeedbackComponent,
    FeedbackFormComponent,
    FeedbackListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersModule,
    RouterModule.forChild([
      {'path': 'feedback-list', component: FeedbackListComponent, canActivate: [AuthGuard]}
    ])
  ]
})
export class FeedbackNewModule { }
