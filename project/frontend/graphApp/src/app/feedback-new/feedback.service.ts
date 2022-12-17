import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface IFeedbackData {
  subject: string,
  message: string,
  id?: string,
}
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  apiURL = 'http://127.0.0.1:8000/api/feedback'
  constructor(private router: Router, private http: HttpClient) { }

  create(data: IFeedbackData) {
    return this.http.post(this.apiURL, data, {withCredentials: true});
  };

  edit(data: IFeedbackData) {
    return this.http.put(this.apiURL, data, {withCredentials: true});
  };

  getAll() {
    return this.http.get(this.apiURL, {withCredentials: true});
  };

}
