let numbers = [1, 1, 1, 10, 20, 60, 50, 30, 100, 20, 50, 3, 70, 10, 20, 60, 50, 30, 100, 201, 10, 20, 60, 50, 30, 100, 20, 50, 3, 70, 10, 20, 60, 50, 30, 105, 100, 201, 1]
numbers = numbers.slice(3, numbers.length-1)
const ctx = document.getElementById('myChart');
const barGraphCanvas = document.getElementById('barGraph')
let label = [];
let count = 0;
for (let num of numbers) {
    label.push(num)
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