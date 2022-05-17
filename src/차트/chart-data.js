// import { registerables } from "chart.js";
// import colors from "vuetify/lib/util/colors";

export const planetChartData = {
    type: 'line',
    data: {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December' ],
        datasetes: [
            {
                label:  'Temperature Monthly Data',
                data:[26,24,21,26,25,26,24,25,24,21,22,23],
                backgroundColor: [
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)',
                    'rgb(255, 208, 208)'

                ],
                borderColor: [
                    'rgb(0,0,0)',
                ],
                borderWidth: 3
            },
            {
                label: 'Humidity Monthly Data',
                data: [60,59,61,60,62,61,59,60,62,61,63,60],
                backgroundColor: [
                    'rgba(71,183,132)',
                ],
                borderColor:[
                    'rgb(0,0,0)',
                ],
                borderWidth:3
            },
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                }
            }]
        }
    }
}
export default planetChartData;