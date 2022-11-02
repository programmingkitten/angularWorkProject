const graphImage = document.getElementById('graphImage');
        const graphOptionsDiv = document.getElementById('graphOptions');
        
        document.getElementById('angelOfDeath').addEventListener('click', () => {
            const data = [30, 100, 150,1, 30, 60, 90, 150, 210, 180, 150, 100, 50, 10, 30, 100, 150, 30, 100, 150,
            30, 100, 150,30, 100, 150,30, 100, 150,120, 150,
        200, 160, 130, 100, 65, 20] 
            updateGraph(lineGraph, data)
        })

        document.getElementById('excessSky').addEventListener('click', () => {
            const data = [1, 100, 100, 100, 100, 100, 1, 1, 100, 100, 100, 100, 100, 1, 1, 100, 
            100, 100, 100, 100, 1, 1, 100, 100, 100, 100, 100, 1, 20, 50, 100, 111, 140, 170, 210]
            updateGraph(lineGraph, data)
        })
 
        graphImage.addEventListener('click', () => {
            graphImage.style.display = 'none';
            graphOptionsDiv.style.display = 'block';
        })

        function updateGraph(graph, data) {
            graph.data.datasets[0].data = data;
            graph.update();
        }