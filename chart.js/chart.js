// Bar Chart Configuration
const barChartCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barChartCtx, {
    type: 'bar', // Type of chart (bar chart)
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
        datasets: [{
            label: 'Sales (in thousands)',
            data: [12, 19, 3, 5, 2], // Data for the bars
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
            borderColor: 'rgba(54, 162, 235, 1)', // Bar border color
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


const pieChartCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieChartCtx, {
    type: 'pie', 
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            data: [300, 50, 100], 
            backgroundColor: ['red', 'blue', 'yellow'], 
            hoverOffset: 4
        }]
    }
});
