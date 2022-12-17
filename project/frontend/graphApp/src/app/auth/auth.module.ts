import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AuthInterceptorProvider } from './auth-interceptor';
import { AuthGuard } from '../auth-guard';
import { ValidatorDirective } from './validator.directive';
import { FormValidatorDirective } from './form-validator.directive';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ValidatorDirective,
    FormValidatorDirective
  ],
  providers: [
    AuthInterceptorProvider
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
      canActivate: [AuthGuard],

      },

     
    ]),
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
