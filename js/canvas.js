let storeUSD = [],
    storeCNY = [],
    storeJPY = [];

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)'
};

function dataset() {
    for (let i = 0; i < Object.values(storeData).length; i++) {
        storeUSD.push(Object.values(storeData)[i].EURUSD);
    }
    for (let j = 0; j < Object.values(storeData).length; j++) {
        storeCNY.push(Object.values(storeData)[j].EURCNY);
    }
    for (let k = 0; k < Object.values(storeData).length; k++) {
        storeJPY.push(Object.values(storeData)[k].EURJPY);
    }
}

dataset();

let config = {
    type: 'line',
    data: {
        labels: Object.keys(storeData),
        datasets: [{
            label: 'EURUSD',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: storeUSD,
            fill: false
        }, {
            label: 'EURCNY',
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: storeCNY,
            fill: false
        }, {
            label: 'EURJPY',
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            data: storeJPY,
            fill: false
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Daily Update Chart'
        },
        scales: {
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    color: ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
                },
                ticks: {
                    min: 0,
                    max: 120,
                    stepSize: 10
                }
            }]
        }
    }
};

window.onload = function() {
    let ctx = document.getElementById('chart').getContext('2d');
    window.myLine = new Chart(ctx, config);
};