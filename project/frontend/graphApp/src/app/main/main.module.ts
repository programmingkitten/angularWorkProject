import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    IndexComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
