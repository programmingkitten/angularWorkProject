import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphColorControllerComponent } from './graph-color-controller/graph-color-controller.component';
import { GraphControllerComponent } from './graph-controller/graph-controller.component';
import { GraphOptionsComponent } from './graph-options/graph-options.component';
import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({
  declarations: [
    GraphColorControllerComponent,
    GraphControllerComponent,
    GraphOptionsComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GraphModule { }
