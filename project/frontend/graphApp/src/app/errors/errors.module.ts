import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAccessComponent } from './no-access/no-access.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NoAccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
      'path': 'no-access',
      component: NoAccessComponent
      }
                          ]),
        ]
})
export class ErrorsModule { }
