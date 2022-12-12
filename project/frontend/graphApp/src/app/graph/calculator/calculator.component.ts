import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  @ViewChild('lineGraph') lineGraph: ElementRef | undefined;
  @ViewChild('barGraph') barGraph: ElementRef | undefined;
    getValue() {
      console.log(this.lineGraph, this.barGraph)
    }
}
