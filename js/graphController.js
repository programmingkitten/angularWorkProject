let numbers = colatzAlg(777); 
const ctx = document.getElementById('myChart');
const barGraphCanvas = document.getElementById('barGraph');
const algButton = document.getElementById('algButton');
const numInput = document.getElementById('numInput');


const lineGraph = createChar(ctx, 'line', numbers, rangeNum(1, numbers.length), 'rgba(164, 7, 7, 0.858)', 2)
const barGraph = createChar(barGraphCanvas, 'bar', groupNumbers(numbers),  ['0-100', '100-1k', '1k-10k', '10k-100k', '100k-1m'],'rgba(164, 7, 7, 0.858)', 1)

algButton.addEventListener('click', () => {
    const num = Number(numInput.value);
    let data = colatzAlg(num);
    lineGraph.data.datasets[0].data = data;
    console.log(data)
    lineGraph.data['labels'] = rangeNum(1, data.length)
    lineGraph.update();

    barGraph.data.datasets[0].data = groupNumbers(data);
    barGraph.update();
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

function rangeNum(num1, num2) {
    const numList = [];
    for (let i = num1; i < num2; i++) {numList.push(i)}
    return numList;
}