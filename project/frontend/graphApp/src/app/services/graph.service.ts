import { ElementRef, Injectable } from '@angular/core';
import {Chart, ChartType} from 'chart.js'


@Injectable({
  providedIn: 'root'
})
export class GraphService {
    

  constructor() { }

  createChar(canvas: any, type: string, numbers: number[], dataLabel: any, lineColor: string, borderWith: number,) {
        const lineChartType = `${type}`;
        const myChart = new Chart(canvas as any, {
        type: lineChartType as any,
        data: {
            labels: dataLabel,
            datasets: [{
                label: '',
                data: [...numbers],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',

                ],
                borderColor: [
                    lineColor,
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                pointRadius: 1,
                borderWidth: borderWith,
            },]
        },
        options: {

            
            plugins: {
                legend: {
                    display: false
                }
            },
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }    
        }
    });
    console.log("DONE")
    return myChart
    };

    groupNumbers(array: number[]) {
    const numbers = [];
    array.sort(function(a: number, b: number) {
        return a - b;
    });

    let count = 0;
    let groupThreshold = 100;
    for (let num of array) {
        console.log(num)
        if (num < groupThreshold) {
            count += 1;
        } else {
            numbers.push(count);
            count = 0;
            groupThreshold = groupThreshold * 10;
            console.log(`new GROUP THRESHOLD - ${groupThreshold}`)
        }
    }

    numbers.push(count)
    console.log(numbers)
    return numbers;
    };


    colatzAlg(number: number) {
    let cycles = 0;
    const numbers = [];
    while (number!=1) {
        
        if (number%2 === 0) {
            number = number/2
            numbers.push(Number(number))

        } else {
            number = 3*number + 1
            numbers.push(Number(number))
        }

        cycles += 1;

    }
    return numbers 
    }

    rangeNum(num1: number, num2: number ) {
    const numList = [];
    for (let i = num1; i < num2; i++) {numList.push(i)}
    return numList;
    }

}
