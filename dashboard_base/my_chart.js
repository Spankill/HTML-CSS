
const ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Carlos', 'Fulanito', 'Sutanito', 'Menganito', 'Botanito', 'Tiranito'],
        datasets: [{
            label: 'Usuarios Nuevos',
            data: [3500, 500, 9221, 5431, 2301, 4143],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
            ],

        }]
    },
    options: {
        responsive: true,

    }
});

var earning = document.getElementById('earning');
var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'VENTAS POR MES',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255,99,132,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(75,192,192,0.2)',
                    'rgba(153,102,255,0.2)',
                    'rgba(255,159,64,0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,206,86,1)',
                    'rgba(75,192,192,1)',
                    'rgba(153,102,255,1)',
                    'rgba(255,159,64,1)',
                ],
                borderWith: 1,
            }]
    },
    options: {
        responsive: true
    }
})