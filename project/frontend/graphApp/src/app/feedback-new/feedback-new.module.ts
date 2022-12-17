import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';



@NgModule({
  declarations: [
    FeedbackComponent,
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FeedbackNewModule { }
