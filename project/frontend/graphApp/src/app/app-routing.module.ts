import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { CalculatorComponent } from './graph/calculator/calculator.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './feedback/contact/contact.component';
import { IndexComponent } from './main/index/index.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: IndexComponent,
  },

  {
    path: 'about',
    component: AboutComponent,

  },

  {
    path: 'calculator',
    component: CalculatorComponent,
    canActivate: [AuthGuard],

  },

  {
    path: 'contacts',
    component: ContactComponent,
    canActivate: [AuthGuard],

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
