(function () {
  'use strict'

  const ctx = document.getElementById('lineChart')
  new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [{
    label: "Objetivo",
    data: [65, 65, 65, 65, 65, 65, 65, 55],
    backgroundColor: [
    'rgba(5, 80, 150, .7)',
    ],
    borderColor: [
    'transparent',
    ],
    borderWidth: 2,
    pointBackgroundColor: 'transparent'
    },
    {
    label: "Progresso",
    data: [90, 88, 80, 83, 78, 69],
    backgroundColor: [
    'rgba(50, 140, 200, .1)',
    ],
    borderColor: [
    'rgba(0, 10, 130, .7)',
    ],
    lineTension: 0,
    borderWidth: 2,
    pointBackgroundColor: '#214F91'
    }
    ]
    },
    options: {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: true
    }
    }
    });
})();