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
  @ViewChild('barGraph') barGraph: ElementRef<HTMLCanvasElement> | undefined;
  numbers: number[] = []; 
  constructor(private graphService: GraphService) {
    this.createGraphs()
  }
  ngOnInit(): void {
  }

  createGraphs() {
    this.numbers = this.graphService.colatzAlg(777)
    setTimeout(() => 
    {
      this.graphService.createChar(this.lineGraph?.nativeElement, 'line',
        this.numbers,
        this.graphService.rangeNum(1, this.numbers.length),
        'red', 2, 
        )

      this.graphService.createChar(
        this.barGraph?.nativeElement, 'bar', this.graphService.groupNumbers(this.numbers),  
        ['0-100', '100-1k', '1k-10k', '10k-100k', '100k-1m'],'rgba(164, 7, 7, 0.858)', 1)
    }, 0)
  }

  getValue() {
    console.log(this.lineGraph, this.barGraph)
    
  }
  

}
