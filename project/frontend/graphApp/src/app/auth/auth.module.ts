import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        'path': 'login',
        component: LoginComponent,
      },
    
      {
        'path': 'register',
        component: RegisterComponent,
      },

      {'path': 'logout',
      component: LogoutComponent,
      },

     
    ]),
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
