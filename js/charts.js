// Load Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Count events by category
    const categoryCounts = events.reduce((acc, event) => {
        acc[event.category] = (acc[event.category] || 0) + 1;
        return acc;
    }, {});

    // Prepare data for chart
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Category');
    data.addColumn('number', 'Number of Events');
    
    Object.entries(categoryCounts).forEach(([category, count]) => {
        data.addRow([category.charAt(0).toUpperCase() + category.slice(1), count]);
    });

    // Chart options
    const options = {
        width: '100%',
        height: 400,
        pieHole: 0.4,
        colors: ['#4285f4', '#34a853', '#fbbc05'],
        chartArea: {width: '80%', height: '80%'},
        legend: {position: 'right'}
    };

    // Create and draw the chart
    const chart = new google.visualization.PieChart(document.getElementById('chart-container'));
    chart.draw(data, options);

    // Redraw chart on window resize
    window.addEventListener('resize', () => {
        chart.draw(data, options);
    });
} 