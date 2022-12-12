import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './main/index/index.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: IndexComponent
  },

  {
    path: 'users/list', 
    component: UserListComponent,
  },

  {
    path: 'users/:id', component: UserDetailsComponent,
  },

  {
    path: 'users/add', component: AddUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
