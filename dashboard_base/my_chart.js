
const ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'polarArea',
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
    type: 'radar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'VENTAS POR MES',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255,99,132,0.9)',
                    'rgba(54,162,235,0.9)',
                    'rgba(255,206,86,0.9)',
                    'rgba(75,192,192,0.9)',
                    'rgba(153,102,255,0.9)',
                    'rgba(255,159,64,0.9)',
                ],

            }]
    },
    options: {
        responsive: true
    },

})