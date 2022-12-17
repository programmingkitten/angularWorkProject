import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UserService } from './services/user.service';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ErrorsModule } from './errors/errors.module';
import { UsersModule } from './users/users.module';
import { FeedbackNewModule } from './feedback-new/feedback-new.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    UsersModule,
    FormsModule,
    ErrorsModule,
    FeedbackNewModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
