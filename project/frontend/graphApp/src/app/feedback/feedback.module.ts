import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    FeedbackComponent,
    FeedbackDetailsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FeedbackModule { }
