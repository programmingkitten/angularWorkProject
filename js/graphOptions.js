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

        document.getElementById('enderEye').addEventListener('click', () => {
            let stringData = '265474412336070826161184345391715209996887366966452867359152978710944414194889554643873925129169503175932681321807871472522584230532423631885418140365727719083100867659956298793738275764563249';
            const numData = [];
            let cNum = '';
            for (let i = 0; i < stringData.length; i++) {
                cNum += stringData[i];
                if (i%2 == 0) {
                    numData.push(Number(cNum))
                    cNum = '';
                }
            }

            updateGraph(lineGraph, numData)
        })

        function graphChoiceGenerator(elId, data, graphUpdate) {
            document.getElementById(elId).addEventListener('click', 
            () => updateGraph(data, graphUpdate))
        }

        graphImage.addEventListener('click', () => {
            graphImage.style.display = 'none';
            graphOptionsDiv.style.display = 'block';
        })

        function updateGraph(graph, data) {
            graph.data.datasets[0].data = data;
            graph.update();
        }