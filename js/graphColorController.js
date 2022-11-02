console.log(lineGraph.config.type, '!!!')
        let currentGraph = lineGraph;
        const colors = {
            'red': 164,
            'blue': 7,
            'green': 7
        }

        

        document.getElementById('myChart').addEventListener('click', () => {
            currentGraph = lineGraph;
            resetColors()
        })

        document.getElementById('barGraph').addEventListener('click', () => {
            currentGraph = barGraph;
            resetColors()
        })

       

        const redInput = document.getElementById('red');
        const blueInput = document.getElementById('blue');
        const greenInput = document.getElementById('green');

        function resetColors() {
            colors['red'] = 164;
            colors['blue'] = 7;
            colors['green']= 7;
            console.log(redInput.value)
            redInput.value = 164;
            blueInput.value = 7;
            greenInput.value = 7;
        }

        function updateGraphColor(graph, input, color) {
            colors[color] = Number(redInput.value)
            if (graph.config.type == 'bar') {
                graph.data.datasets[0].backgroundColor.shift()
                graph.data.datasets[0].backgroundColor.push(`rgba(${colors.red}, ${colors.green}, ${colors.blue}, 0.84)`)
            } else if (graph.config.type == 'line'){
                graph.data.datasets[0].borderColor.shift()
                graph.data.datasets[0].borderColor.unshift(`rgba(${colors.red}, ${colors.green}, ${colors.blue}, 0.84)`)
            }
            graph.update()
            }

        $("#red").on("input change", function() {
            updateGraphColor(currentGraph, redInput, 'red')
        });

        $("#green").on("input change", function() {
            updateGraphColor(currentGraph, greenInput, 'green')


        });

        $("#blue").on("input change", function() {
            updateGraphColor(currentGraph, blueInput, 'blue')
        });

        console.log(lineGraph.data.datasets[0].borderColor, 'data')
        console.log(myChart)