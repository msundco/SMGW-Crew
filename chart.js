

/**
 * addChartData: fügt Daten zu Chart hinzu 
 */

 function addChartData(chart, name, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    }),    
    chart.data.datasets[0].label = name; 
    chart.update();
    
}


/**
 * removeChartData: fügt Daten zu Chart hinzu 
 */

function removeChartData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

/**
 * shiftChartData: fügt Daten zu Chart hinzu 
 */

function shiftChartData(chart){
    chart.data.labels.shift();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
    });
    chart.update();
}




/**
 * initChart: Initialisert ein standard Chart
 */

function initChart(labelInit, dataInit) {
  const ctx = document.getElementById('chartXML').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labelInit,
          datasets: [{
              label: '# of Votes',
              data:dataInit,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  return myChart; 
}