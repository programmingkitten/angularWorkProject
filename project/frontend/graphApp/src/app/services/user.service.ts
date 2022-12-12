import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../user/user';

const baseUrl = 'http://localhost:8000/api/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]> {
    console.log(this.http.get<IUser[]>(baseUrl))
    return this.http.get<IUser[]>(baseUrl);
  }

  get(id: any): Observable<IUser> {
    return this.http.get<IUser>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${baseUrl}?title=${title}`);
  }
}

// WE WILL MAKE A MODULE IN DJANGO THAT WILL CONTAIN LAST CHANGES OF A POST
// IF A POST IS ADDED THE COUNTER WILL INCEASE
// IF THE COUNTER IS NOT THE SAME AS OUR THIS MEANS WE OR SOMEONE ELSE HAS POSTED SOMETHING
// USER SIDE COUNTER WILL BE KEPT IN SEASSION STORAGE WHILE DB COUNTER IN A MODEL