import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent {

  constructor(private service: FeedbackService) {}

  formSubmitHandler(form: NgForm) {
    this.service.create(form.value).subscribe({
      next: (ev) => {console.log(ev)},
      error: (error) => {console.log('error')}
    })
  }
}
