import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
