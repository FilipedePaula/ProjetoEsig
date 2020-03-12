var chartSales = document.getElementById("lineChart").getContext('2d');
var lineChart = new Chart(chartSales, {
  type: 'line',
  data: {
    labels: ["", "", "", "", ""],
    datasets: [{
        label: "HTML",
        data: [28, 40, 32, 38, 24],
        backgroundColor: [
          'rgba(209, 35, 35, 1)',
        ],
        borderColor: [
          'rgba(179, 177, 177, 0.31)',
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
          'rgba(153, 153, 153, 0.86)',
        ],
        borderWidth: 1
      },
      {
        label: "JavaScript",
        data: [80, 65, 78, 61, 71],
        backgroundColor: [
          'rgba(238, 241, 59, 0.86)',
        ],
        borderColor: [
          'rgba(58, 58, 58, 0.86)',
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true
  }
});