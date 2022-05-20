export const planetChartData = {
    type: "line",
    data: {
      labels: [ 'January', 'February', 'March','April', 'May', 'June','July', 'August', 'September','October', 'November', 'December'],
      datasets: [
        {
          label: "Temperature",
          data: [26,25,27,25,24,26,26,21,25,26,26,24],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 1
        },
        {
          label: "Humidity",
          data: [60,61,60,63,61,60,62,61,62,60,60,63],
          backgroundColor: "rgba(71, 183,132,.5)",
          borderColor: "#47b784",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default planetChartData;