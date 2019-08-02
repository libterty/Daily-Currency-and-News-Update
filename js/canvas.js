let storeTWD = [],
    storeCNY = [],
    storeEUR = [];
let newDate = new Date(Object.keys(storeData) * 1000);

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)'
};

function dataset() {
    for (let i = 0; i < Object.values(storeData).length; i++) {
        storeTWD.push(Object.values(storeData)[i].USDTWD);
    }
    for (let j = 0; j < Object.values(storeData).length; j++) {
        storeCNY.push(Object.values(storeData)[j].USDCNY);
    }
    for (let k = 0; k < Object.values(storeData).length; k++) {
        storeEUR.push(Object.values(storeData)[k].USDEUR);
    }
}

dataset();

let config = {
    type: 'line',
    data: {
        labels: Object.keys(storeData),
        datasets: [{
            label: 'USDTWD',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: storeTWD,
            fill: false
        }, {
            label: 'USDCNY',
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: storeCNY,
            fill: false
        }, {
            label: 'USDEUR',
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            data: storeEUR,
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
                    min: -2,
                    max: 45,
                    stepSize: 1
                }
            }]
        }
    }
};

window.onload = function() {
    let ctx = document.getElementById('chart').getContext('2d');
    window.myLine = new Chart(ctx, config);
};