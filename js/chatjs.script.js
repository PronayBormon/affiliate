
// =============== balance chart ====================== 
$(document).ready(function () {
    // Function to generate dataset dynamically
    function generateDataset(data) {
        var dataset = {
            labels: ["-1day date", "-1day date", "-1day date", "-1day date", "-1day date", "-1day date", "Today(date)"],
            datasets: [{
                label: "Balance",
                data: data,
                backgroundColor: [],  // Leave empty for now
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1
            }]
        };

        // Set backgroundColor dynamically based on data values
        data.forEach(function (value) {
            dataset.datasets[0].backgroundColor.push(value >= 0 ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)');
        });

        return dataset;
    }

    // Sample data (you can replace this with dynamic data)
    var sampleData = [-30, 10, 5, 2, -20, 30, 45];

    // Get the canvas element
    var ctx = $('.balance');

    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: generateDataset(sampleData),
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// ============= clicks =================
$(document).ready(function () {
    // Function to generate dataset dynamically
    function generateDataset(data) {
        var dataset = {
            labels: ["-1day date", "-1day date", "-1day date", "-1day date", "-1day date", "-1day date", "Today(date)"],
            datasets: [{
                label: "Clicks",
                data: data,
                backgroundColor: [],  // Leave empty for now
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1
            }]
        };

        // Set backgroundColor dynamically based on data values
        data.forEach(function (value) {
            dataset.datasets[0].backgroundColor.push(value >= 0 ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)');
        });

        return dataset;
    }

    // Sample data (you can replace this with dynamic data)
    var sampleData = [-30, 10, 5, 2, -20, 30, 45];

    // Get the canvas element
    var ctx = $('.clicks');

    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: generateDataset(sampleData),
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});


//  =============================== sale chart ========================== 
$(document).ready(function () {
    // Function to generate dataset dynamically
    function generateDataset(data) {
        var dataset = {
            labels: ["-1day date", "-1day date", "-1day date", "-1day date", "-1day date", "-1day date", "Today(date)"],
            datasets: [{
                label: "Sale",
                data: data,
                backgroundColor: [],  // Leave empty for now
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1
            }]
        };

        // Set backgroundColor dynamically based on data values
        data.forEach(function (value) {
            dataset.datasets[0].backgroundColor.push(value >= 0 ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)');
        });

        return dataset;
    }

    // Sample data (you can replace this with dynamic data)
    var sampleData = [-30, 10, 5, 2, -20, 30, 45];

    // Get the canvas element
    var ctx = $('.sale');

    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: generateDataset(sampleData),
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
