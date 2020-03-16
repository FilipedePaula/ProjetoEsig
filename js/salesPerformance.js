var chartSales = document.getElementById("lineChart").getContext('2d');
var lineChart = new Chart(chartSales, {
  type: 'line',
  data: {
    labels: ["", "", "", "", ""],
    datasets: [{
        label: "HTML",
        data: [28, 40, 32, 38, 24],
        backgroundColor: [
          'rgba(255, 0, 0, .8)',
        ],
        borderColor: [
          'rgba(33, 37, 41, .5)',
        ],
        borderWidth: 1
      },
      {
        label: "CSS",
        data: [41, 56, 40, 54, 50],
        backgroundColor: [
          'rgba(45, 76, 235, 1)',
        ],
        borderColor: [
          'rgba(33, 37, 41, .5)',
        ],
        borderWidth: 1
      },
      {
        label: "JavaScript",
        data: [80, 65, 78, 61, 71],
        backgroundColor: [
          'rgba(194, 191, 11, 1)',
        ],
        borderColor: [
          'rgba(33, 37, 41, .5)',
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true
  }
});