import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../services/user.service';



@NgModule({
  declarations: [
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent,
  ],

  providers: [UserService,]
})
export class UserModule { }
