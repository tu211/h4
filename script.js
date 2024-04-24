// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: 
    [
    {
        name: 'Hsinchu',
        marker: {
            symbol: 'square'
        },
        data: [19.1, 19.4, 21.6, 25.6, 28.9, 31.5, 33.2, 32.8, 31.2, 28.0, 25.1, 21.1]

    }, 
    {
        name: 'Taipei',
        marker: {
            symbol: 'diamond'
        },
        data: [19.6, 20.7, 22.9, 26.7, 30.1, 32.9, 35.0, 34.4, 31.6, 27.8, 24.9, 21.1]
    },
    {
        name: 'Taichung',
        marker: {
            symbol: 'circle'
        },
        data: [22.3, 22.9, 25.2, 28.1, 30.7, 32.3, 33.3, 32.7, 32.3, 30.3, 27.6, 23.9]
    }
    ]
});