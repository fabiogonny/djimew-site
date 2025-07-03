
const ctx = document.getElementById('priceChart').getContext('2d');
const priceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Start', '1H', '2H', '3H', '4H', '5H'],
        datasets: [{
            label: 'DJIMEW Price',
            data: [0.001, 0.002, 0.0035, 0.003, 0.0045, 0.005],
            borderColor: '#f39c12',
            backgroundColor: 'rgba(243, 156, 18, 0.2)',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
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
