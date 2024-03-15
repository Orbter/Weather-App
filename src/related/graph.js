// ./related/graph.js
import Chart from 'chart.js/auto';

function createChart() {
  const ctx = document.getElementById('chart').getContext('2d');
  const itemsLabels = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  const itemData = [
    16, 15, 15, 15, 14, 14, 14, 14, 16, 18, 20, 22, 22, 20, 20, 20, 20, 19, 18,
    18, 17, 17, 16, 16,
  ];
  const graphData = {
    labels: itemsLabels,
    datasets: [
      {
        data: itemData,
        borderColor: 'rgb(33, 150, 243)',
        fill: true,
        backgroundColor: 'rgb(144, 202, 249)',
        tension: 0.1,
        hoverBorderColor: 'grey',
      },
    ],
  };
  const config = {
    type: 'line',
    data: graphData,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Temperature',
        },
      },
      responsive: true,
      maintainAspectRatio: false, // This should let the chart fill the container height
    },
  };

  return new Chart(ctx, config);
}

export default createChart;
