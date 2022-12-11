import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  
  constructor(private userAPI: UserService) {

  }

  onClickHandler() {
    const data = this.userAPI.getAll()
    data.subscribe(u => console.log(u))
  }
}

