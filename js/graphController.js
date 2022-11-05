let numbers = [1, 1, 1, 10, 20, 60, 50, 30, 100, 20, 50, 3, 70, 10, 20, 60, 50, 30, 100, 201, 10, 20, 60, 50, 30, 100, 20, 50, 3, 70, 10, 20, 60, 50, 30, 105, 100, 201, 1]
numbers = numbers.slice(3, numbers.length-1)
const ctx = document.getElementById('myChart');
const barGraphCanvas = document.getElementById('barGraph');
const algButton = document.getElementById('algButton');
const numInput = document.getElementById('numInput');
console.log(algButton)
let label = [];
let count = 0;
for (let i=0; i<numbers.length; i++) {
    label.push(i)
}

let lineGraph = createChar(ctx, 'line', [1, 2], label, 'rgba(164, 7, 7, 0.858)', 2)
console.log(lineGraph.data.datasets[0].borderColor, 'data')
let timeOut = 100;
let bonus = 0;
for (let num of numbers) {
    setTimeout(() => { 
        lineGraph.data.datasets[0].data.push(num)
        lineGraph.update()
        }, timeOut);
        timeOut += bonus
    
}
const barGraph = createChar(barGraphCanvas, 'bar', groupNumbers(numbers),  ['0-100', '100-1k', '1k-10k', '10k-100k', '100k-1m'],'rgba(164, 7, 7, 0.858)', 1)

algButton.addEventListener('click', () => {
    const num = Number(numInput.value);
    let data = colatzAlg(num);
    for (let i=0; i<4; i++) {
        
        console.log(data)
    }
    lineGraph.data.datasets[0].data = data;
    console.log(lineGraph.data.datasets[0].data)
    lineGraph.update()
    console.log(data)
})

function groupNumbers(array) {
    const numbers = [];
    array.sort(function(a, b) {
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
    return numbers
}

function createChar(canvas, type, numbers, dataLabel, lineColor, borderWith,) {
    const myChart = new Chart(canvas, {
    type: type,
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

return myChart
}


function colatzAlg(number) {
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