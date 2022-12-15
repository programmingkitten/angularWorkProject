import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAccessComponent } from './no-access/no-access.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NoAccessComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
      'path': 'no-access',
      component: NoAccessComponent
      },
      {
        'path': 'not-found',
        component: NotFoundComponent,
      },
      {
        'path': '**',
        redirectTo: 'not-found',
      }
                          ]),
          ]
})
export class ErrorsModule { }
