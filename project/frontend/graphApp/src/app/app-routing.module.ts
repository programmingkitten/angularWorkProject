import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './graph/calculator/calculator.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
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
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'calculator',
    component: CalculatorComponent,
  },

  {
    path: 'contacts',
    component: ContactComponent,
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
