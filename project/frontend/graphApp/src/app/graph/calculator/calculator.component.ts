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
export class CalculatorComponent{
  @ViewChild('lineGraph') lineGraph: ElementRef<HTMLCanvasElement> | undefined;
  @ViewChild('barGraph') barGraph: ElementRef<HTMLCanvasElement> | undefined;
  @ViewChild('numberInput') numberInput: ElementRef | undefined;
  numbers: number[] = []; 
  lineChart: Chart | undefined;
  barChart: Chart | undefined;
  constructor(private graphService: GraphService) {
    this.createGraphs()
  }


  createGraphs() {
    this.numbers = this.graphService.colatzAlg(777)
    setTimeout(() => 
    {
      this.lineChart = this.graphService.createChar(this.lineGraph?.nativeElement, 'line',
        this.numbers,
        this.graphService.rangeNum(1, this.numbers.length),
        'red', 2, 
        )

      this.barChart = this.graphService.createChar(
        this.barGraph?.nativeElement, 'bar', this.graphService.groupNumbers(this.numbers),  
        ['0-100', '100-1k', '1k-10k', '10k-100k', '100k-1m'],'rgba(164, 7, 7, 0.858)', 1)
    }, 0)
  }

  getValue() {
    console.log(this.lineChart, this.barChart)
  }

  submitNumberHandler() {
    let numbersList = this.graphService.colatzAlg(Number(this.numberInput?.nativeElement.value))
    this.lineChart!.data.datasets[0].data = numbersList;
    this.lineChart!.data['labels'] = this.graphService.rangeNum(1, numbersList.length)
    this.lineChart!.update();

    this.barChart!.data.datasets[0].data = this.graphService.groupNumbers(numbersList);
    this.barChart!.update();

  }
  

}
