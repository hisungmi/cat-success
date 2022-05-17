<template>
<head>
    <script src ="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <canvas id="myChart" style="width: 900px; height: 900px;" ></canvas>
            </div>
        </div>
    </div>
</body>
</template>


<script>
let myChatOne = document.getElementById('myChartOne').getContext('2d');

let barChart = new Chart(myChatOne, {
    type : 'line',
    data: {
        labels : ['학원','연구원','출판사','미디어사','위니브'],
        datasets : [{
            label : '바울랩매출액',
            data : [
                10, 100, 1000,200,300
            ]
        }]
    }
})
</script>
 