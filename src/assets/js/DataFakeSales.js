// Revenue Timeline Chart
const revenueCtx = document.getElementById('revenueTimeline').getContext('2d');
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6','T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
        datasets: [{
            label: 'Doanh thu (triệu)',
            data: [85, 72, 86, 81, 95, 92, 88, 90, 85, 92, 90, 95],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            tension: 0.3,
            fill: true,
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#2c3e50',
                bodyColor: '#2c3e50',
                borderColor: '#e0e0e0',
                borderWidth: 1,
                padding: 10,
                displayColors: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    color: '#2c3e50'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#2c3e50'
                }
            }
        }
    }
});

// Category Distribution Chart
const categoryCtx = document.getElementById('categoryDistribution').getContext('2d');
new Chart(categoryCtx, {
    type: 'doughnut',
    data: {
        labels: ['Thuốc kê đơn', 'Thuốc không kê đơn', 'TPCN', 'Thiết bị y tế'],
        datasets: [{
            data: [35, 25, 25, 15],
            backgroundColor: [
                '#0396FF',  // Xanh dương
                '#42E695',  // Xanh lá
                '#FFE47A',  // Vàng
                '#FF8F71'   // Cam
            ],
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    padding: 20,
                    color: '#2c3e50',
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value * 100) / total).toFixed(1);
                        return `${label}: ${percentage}% (${value})`;
                    }
                },
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#2c3e50',
                bodyColor: '#2c3e50',
                borderColor: '#e0e0e0',
                borderWidth: 1,
                padding: 10
            },
            datalabels: {
                formatter: (value, ctx) => {
                    const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = ((value * 100) / total).toFixed(1);
                    return percentage + '%';
                },
                color: '#ffffff',
                font: {
                    weight: 'bold',
                    size: 12
                }
            }
        }
    }
});