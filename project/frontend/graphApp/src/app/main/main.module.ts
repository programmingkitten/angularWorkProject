import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    IndexComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    AboutComponent,
    ContactComponent,
    IndexComponent,
    StatisticsComponent,
  ]
})
export class MainModule { }
