const graphImage = document.getElementById('graphImage');
        const graphOptionsDiv = document.getElementById('graphOptions');
        const dataGraphOptions = {
            'angelOfDeath':  [30, 100, 150,1, 30, 60, 90, 150, 210, 180, 150, 100, 50, 
                10, 30, 100, 150, 30, 100, 150,30, 100, 150, 30, 
                100, 150,30, 100, 150,120, 150,200, 160, 130, 100, 65, 20],
            'excessSky': [1, 100, 100, 100, 100, 100, 1, 1, 100, 100, 100, 100, 100, 1, 1, 100, 100, 100, 100, 100, 1, 1, 100, 100, 100, 100, 100, 1, 20, 50, 100, 111, 140, 170, 210],
            'enderEye': groupNumbersFromString(
                '265474412336070826161184345391715209996887366966452867359152978710944414194889554643873925129169503175932681321807871472522584230532423631885418140365727719083100867659956298793738275764563249')}

        graphUpdater('angelOfDeath', dataGraphOptions.angelOfDeath, lineGraph);
        
        graphUpdater('excessSky', dataGraphOptions.excessSky, lineGraph);

        graphUpdater('enderEye', dataGraphOptions.enderEye ,lineGraph);


        function groupNumbersFromString(stringData) {
            const numData = [];
            let cNum = '';
            for (let i = 0; i < stringData.length; i++) {
                cNum += stringData[i];
                if (i%2 == 0) {
                    numData.push(Number(cNum))
                    cNum = '';
                }
            }

            return numData
        }

        function graphUpdater(elId, data, graphUpdate) {
            document.getElementById(elId).addEventListener('click', 
            () => updateGraph(graphUpdate, data))
        }

       
        // can't use it currently due to not enough knowledge on how to get lineGraph imported

        graphImage.addEventListener('click', () => {
            graphImage.style.display = 'none';
            graphOptionsDiv.style.display = 'block';
        })

        function updateGraph(graph, data) {
            graph.data.datasets[0].data = data;
            graph.update();
        }