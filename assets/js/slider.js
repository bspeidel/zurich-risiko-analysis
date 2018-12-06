noUiSlider.create(slider2, {
    connect: [true, false],
    start: 5,
    step: 1,
    range: {
        min: 0,
        max: 10
    },
    pips: {
        mode: 'count',
        values: 11,
        density: 11
    }
});

noUiSlider.create(slider3, {
    connect: [true, false],
    start: 5,
    step: 1,
    range: {
        min: 0,
        max: 10
    },
    pips: {
        mode: 'count',
        values: 11,
        density: 11
    }
});

noUiSlider.create(slider4, {
    connect: [true, false],
    start: 5,
    step: 1,
    range: {
        min: 0,
        max: 10
    },
    pips: {
        mode: 'count',
        values: 11,
        density: 11
    }
});

noUiSlider.create(slider5, {
    connect: [true, false],
    start: 5,
    step: 1,
    range: {
        min: 0,
        max: 10
    },
    pips: {
        mode: 'count',
        values: 11,
        density: 11
    }
});

noUiSlider.create(slider6, {
    connect: [true, false],
    start: 5,
    step: 1,
    range: {
        min: 0,
        max: 10
    },
    pips: {
        mode: 'count',
        values: 11,
        density: 11
    }
});

noUiSlider.create(slider7, {
    connect: [true, false],
    start: 5,
    step: 1,
    range: {
        min: 0,
        max: 10
    },
    pips: {
        mode: 'count',
        values: 11,
        density: 11
    }
});

noUiSlider.create(slider8, {
    connect: [true, false],
    start: 5,
    step: 1,
    range: {
        min: 0,
        max: 10
    },
    pips: {
        mode: 'count',
        values: 11,
        density: 11
    }
});

noUiSlider.create(slider9, {
    connect: [true, false],
    start: 5,
    step: 1,
    range: {
        min: 0,
        max: 10
    },
    pips: {
        mode: 'count',
        values: 11,
        density: 11
    }
});

noUiSlider.create(slider10, {
    connect: [true, false],
    start: 5,
    step: 1,
    range: {
        min: 0,
        max: 10
    },
    pips: {
        mode: 'count',
        values: 11,
        density: 11
    }
});

function doughnutUpdate(company_percent) {
    chart_company.data.datasets[0].data = [company_percent, 100 - company_percent];
    chart_company.update();
}

let val2 = ((slider2.noUiSlider.get()) * 100) / 10;
let val3 = ((slider3.noUiSlider.get()) * 100) / 10;
let val4 = ((slider4.noUiSlider.get()) * 100) / 10;
let val5 = ((slider5.noUiSlider.get()) * 100) / 10;
let val6 = ((slider6.noUiSlider.get()) * 100) / 10;
let val7 = ((slider7.noUiSlider.get()) * 100) / 10;
let val8 = ((slider8.noUiSlider.get()) * 100) / 10;
let val9 = ((slider9.noUiSlider.get()) * 100) / 10;
let val10 = ((slider10.noUiSlider.get()) * 100) / 10;



let company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);

function companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10) {
    let result = ((val2 + val3 + val4 + val5 + val6 + val7 + val8 + val9 + val10) / 9);

    return result;
}



let ctx_company = document.getElementById("chart_company");
let chart_company = new Chart(ctx_company, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Sollwert',
            data: [company_percent, 100 - company_percent],
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

slider2.noUiSlider.on('update', function (values, handle) {
    getLegend(this.target.id, values[handle]);
    val2 = ((values[handle]) * 100) / 10;
    company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);
    $('#company_percent').text(company_percent);
    doughnutUpdate(company_percent);
});

slider3.noUiSlider.on('update', function (values, handle) {
    getLegend(this.target.id, values[handle]);
    val3 = ((values[handle]) * 100) / 10;
    company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);
    $('#company_percent').text(company_percent);
    doughnutUpdate(company_percent);
});

slider4.noUiSlider.on('update', function (values, handle) {
    getLegend(this.target.id, values[handle]);
    val4 = ((values[handle]) * 100) / 10;
    company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);
    $('#company_percent').text(company_percent);
    doughnutUpdate(company_percent);
});

slider5.noUiSlider.on('update', function (values, handle) {
    getLegend(this.target.id, values[handle]);
    val5 = ((values[handle]) * 100) / 10;
    company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);
    $('#company_percent').text(company_percent);
    doughnutUpdate(company_percent);
});

slider6.noUiSlider.on('update', function (values, handle) {
    getLegend(this.target.id, values[handle]);
    val6 = ((values[handle]) * 100) / 10;
    company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);
    $('#company_percent').text(company_percent);
    doughnutUpdate(company_percent);
});

slider7.noUiSlider.on('update', function (values, handle) {
    getLegend(this.target.id, values[handle]);
    val7 = ((values[handle]) * 100) / 10;
    company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);
    $('#company_percent').text(company_percent);
    doughnutUpdate(company_percent);
});

slider8.noUiSlider.on('update', function (values, handle) {
    getLegend(this.target.id, values[handle]);
    val8 = ((values[handle]) * 100) / 10;
    company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);
    $('#company_percent').text(company_percent);
    doughnutUpdate(company_percent);
});

slider9.noUiSlider.on('update', function (values, handle) {
    getLegend(this.target.id, values[handle]);
    val9 = ((values[handle]) * 100) / 10;
    company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);
    $('#company_percent').text(company_percent);
    doughnutUpdate(company_percent);
});

slider10.noUiSlider.on('update', function (values, handle) {
    getLegend(this.target.id, values[handle]);
    val10 = ((values[handle]) * 100) / 10;
    company_percent = companyCalculate(val2, val3, val4, val5, val6, val7, val8, val9, val10).toFixed(0);
    $('#company_percent').text(company_percent);
    doughnutUpdate(company_percent);
});

function getLegend(id, score) {
    console.log(id);
    let slider_id = '#' + id;

    console.log(slider_id);

    if (score < 1) {
        $(slider_id).prev('.alert').replaceWith('<div class="alert alert-danger d-flex align-content-end flex-wrap" role="alert"><i class="fas fa-times-circle fa-2x text-danger"></i><strong class="slider-text"> Kein Versicherungsshutz</strong></div>');
    }

    else if (score > 0 && score < 5 ) {
        $(slider_id).prev('.alert').replaceWith('<div class="alert alert-danger d-flex align-content-end flex-wrap" role="alert"><i class="fas fa-times-circle fa-2x text-danger"></i><strong class="slider-text"> nicht ausreichender Versicherungsschutz</strong></div>');
    }

    else if (score > 4 && score < 10 ) {
        $(slider_id).prev('.alert').replaceWith('<div class="alert alert-warning d-flex align-content-end flex-wrap" role="alert"><i class="fas fa-exclamation-circle fa-2x text-warning"></i><strong class="slider-text"> Absicherung ist zu Überprüfen</strong></div>');
    }

    else if (score > 9 ) {
        $(slider_id).prev('.alert').replaceWith('<div class="alert alert-success d-flex align-content-end flex-wrap" role="alert"><i class="fas fa-check-circle fa-2x text-success"></i><strong class="slider-text"> Versicherungsschutz in Ordnung und ausreichend</strong></div>');
    }
}
