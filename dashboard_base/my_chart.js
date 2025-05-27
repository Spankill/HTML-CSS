document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
            datasets: [{
                label: 'Ventas por día',
                data: [150, 220, 180, 300, 250],
                backgroundColor: 'rgba(201, 121, 0, 0.6)',
                borderColor: 'rgb(255, 255, 255)',
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
});