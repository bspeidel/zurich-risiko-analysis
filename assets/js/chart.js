

let ctx_decider = document.getElementById("chart_decider");
let chart_decider = new Chart(ctx_decider, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Sollwert',
            data: [50, 50],
            backgroundColor: [
                'rgba(79, 144, 199, 1)',
                'rgba(79, 144, 199, .1)'
            ],
            borderColor: [
                'rgba(79, 144, 199, 1)',
                'rgba(79, 144, 199, .1)'
            ],
            borderWidth: 1
        }],
        labels: [
            'Absicherung',
            'Risiko',
        ]
    },
    options: {
        cutoutPercentage: 75,
        legend: {
            display: false
        }
    }
});

let ctx_staff = document.getElementById("chart_staff");
let chart_staff = new Chart(ctx_staff, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Sollwert',
            data: [50, 50],
            backgroundColor: [
                'rgba(79, 144, 199, 1)',
                'rgba(79, 144, 199, .1)'
            ],
            borderColor: [
                'rgba(79, 144, 199, 1)',
                'rgba(79, 144, 199, .1)'
            ],
            borderWidth: 1
        }],
        labels: [
            'Absicherung',
            'Risiko',
        ]
    },
    options: {
        cutoutPercentage: 75,
        legend: {
            display: false
        }
    }
});