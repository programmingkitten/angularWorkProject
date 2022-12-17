import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.scss']
})
export class FeedbackDetailsComponent implements OnInit{
  feedback: any;
  constructor(private service: FeedbackService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getFeedback()
  }

  getFeedback() {
    const feedbackId = this.activatedRoute.snapshot.params['id'];
    this.service.getFeedback(feedbackId).subscribe({
      next: (ev) => {
        const evClone: any = ev
        this.feedback = evClone},
      error: (err) => {console.log('error')},
    })
  }
}
