import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.scss']
})
export class FeedbackListComponent {
  feedbacks: any | undefined;
  constructor(private service: FeedbackService) {
    this.getFeedbacks()
  }



  getFeedbacks() {
    this.feedbacks = this.service.getAll().subscribe({
      next: (ev) => {
        const evClone: any = ev
        this.feedbacks = evClone.data},
      error: (err) => {console.log('error')}
    })
  }
}
