import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ct } from 'chart.js/dist/chunks/helpers.core';
import { GraphService } from 'src/app/services/graph.service';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
  @ViewChild('lineGraph') lineGraph: ElementRef<HTMLCanvasElement> | undefined;

  barGraph: HTMLCanvasElement = document.getElementById('barGraph') as HTMLCanvasElement;

  constructor(private graphService: GraphService) {
    this.getValue()
  }
  ngOnInit(): void {
  }

  createGraphs() {
      
  }

  getValue() {
    console.log(this.lineGraph, this.barGraph)
    setTimeout(() => {
      this.graphService.createChar(
        this.lineGraph?.nativeElement, 'line',
        [1, 10, 20, 30, 40, 20, 35, 30, 40, 45, 30, 20, 100, 200],
        ['1', '10', '20', '30', '40', '20', '35', '30', '40', '45', '30', '20', '100', '200'],
        'red', 2, 
        )}, 0)
    
  }
}
