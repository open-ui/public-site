
pk.colorpicker({
    element: document.getElementById('colorpicker1'),
    value: '#49A3DF',
    listeners: {
        change: function(oldCol, newCol) {
            var outputEl = document.getElementById('colorOutput'), cols;
            for (var u = 0; u < outputEl.children.length; u++) {
                if (pk.attribute(outputEl.children[u], 'data-color')) {
                    outputEl.children[u].innerHTML = '';
                    if (pk.attribute(outputEl.children[u], 'data-color') === 'complement' && pk.attribute(outputEl.children[u], 'data-type')) {
                        cols = pk.color[pk.attribute(outputEl.children[u], 'data-color')](newCol, pk.attribute(outputEl.children[u], 'data-type'));
                    } else {
                        cols = pk.color[pk.attribute(outputEl.children[u], 'data-color')](newCol);
                    }
                    for (var c = 0; c < cols.length; c++) {
                        var cEl = pk.createEl("<span style='display:inline-block;height:25px;width:25px;background:" + cols[c] + ";'></span>");
                        outputEl.children[u].appendChild(cEl);
                    }
                }
            }
        }
    }
});

pk.datepicker({
    element: document.getElementById('datepicker1')
});

pk.accordian({
    element: document.getElementById('accordian1'),
    animate: true,
    multiple: false
});

pk.slider({
    element: document.getElementById('slider1'),
    units: '%',
    axis: 'y',
    value: 40
});
pk.slider({
    element: document.getElementById('slider2'),
    units: 'mm',
    axis: 'x',
    value: 0,
    min: -444,
    max: 900,
    listeners: {
        change: function(e, v, i) {
            var col = pk.color.percentage(Math.abs(v) / 900, '#0061a3');
            e.children[1].style.backgroundColor = col;
        }
    }
});
pk.slider({
    element: document.getElementById('slider3'),
    units: 'deg',
    value: 50,
    min: 0,
    max: 100,
    circle: {
        stroke: {
            inner: 5,
            outer: 15
        }
    }
});
pk.slider({
    element: document.getElementById('slider4'),
    units: 'nm',
    value: 336,
    min: 0,
    max: 2477,
    circle: {
        length: 30
    },
    listeners: {
        change: function(e, v, i) {
            var col = pk.color.percentage(v / 2477);
            e.children[2].style.color = col;
            e.children[1].childNodes[1].style.stroke = col;
            e.children[1].childNodes[3].style.stroke = col;
        }
    }
});
pk.slider({
    element: document.getElementById('slider5'),
    units: 'mm',
    axis: 'x',
    value: 0,
    min: -444,
    max: 900,
    circle: {
        stroke: {
            inner: 25,
            outer: 8
        }
    }
});
pk.toggle({
    element: document.getElementById('toggle1'),
    options: [{
        value: true,
        name: 'yes'
    }, {
        value: false,
        name: 'no'
    }, {
        value: 'other',
        name: 'other'
    }],
    value: false
});
pk.checkbox({
    element: document.getElementById('checkbox1'),
    label: 'check',
    value: true
});
pk.switch({
    element: document.getElementById('switch1')
});

pk.rating({
    element: document.getElementById('rating1'),
    value: 3
});
pk.carousel({
    element: document.getElementById('carousel1')
});
pk.tooltip({
    element: document.getElementById('tooltip1'),
    content: 'Content on top',
    position: 'top'
});
pk.tooltip({
    element: document.getElementById('tooltip2'),
    content: 'Content to the right',
    position: 'right'
});
pk.tooltip({
    element: document.getElementById('tooltip3'),
    content: 'Content below',
    position: 'bottom'
});
pk.tooltip({
    element: document.getElementById('tooltip4'),
    content: 'Content to the left',
    position: 'left'
});


pk.chart({
    element: document.getElementById('chart1'),
    type: 'pie',
    data: [{
        category: "cat",
        series1: 8,
        series2: 2
    }, {
        category: "pig",
        series1: 2,
        series2: 6
    }, {
        category: "cow",
        series1: 9,
        series2: 9
    }, {
        category: "bird",
        series1: 5,
        series2: 2
    }, {
        category: "dog",
        series1: 2,
        series2: 7
    }, {
        category: "emu",
        series1: 6,
        series2: 3
    }, {
        category: "hamster",
        series1: 2,
        series2: 3
    }],
    center: 20,
    legend: true,
    axis: {
        x: 'category'
    },
    series: ['series1', 'series2']
});

pk.chart({
    element: document.getElementById('chart2'),
    type: 'line',
    data: [{
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }],
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    // center:50,
    legend: true,
    axis: {
        x: 'Last Month',
        y: 'This Month'
    },
    series: 'category'

});


pk.chart({
    element: document.getElementById('chart3'),
    type: 'scatter',
    data: [{
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }],
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    area: true,
    // center:50,
    legend: true,
    axis: {
        x: 'Last Month',
        y: 'This Month'
    },
    series: 'category'

});


pk.chart({
    element: document.getElementById('chart4'),
    type: 'scatter',
    data: [{
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }],
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    area: true,
    margin: {
        top: 40,
        right: 40,
        bottom: 50,
        left: 40

    },
    points: 'This Month',
    // center:50,
    legend: true,
    axis: {
        x: 'Last Month',
        y: 'This Month',
        r: 'Last Month'
    },
    series: 'category'

});


pk.chart({
    element: document.getElementById('chart5'),
    type: 'area',
    data: [{
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }],
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    area: true,
    // center:50,
    legend: true,
    axis: {
        x: 'Last Month',
        y: 'This Month'
    },
    series: 'category'

});



pk.chart({
    element: document.getElementById('chart6'),
    type: 'column',
    data: [{
        block: 'fingers',
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        block: 'fingers',
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        block: 'toes',
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'toes',
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        block: 'thumbs',
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        block: 'thumbs',
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'fingers',
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'toes',
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        block: 'thumbs',
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }],
    tooltip: true,
    colors: {
        'Petrol': '#F27935',
        'Invoices': '#1FBBA6',
        'Accommodation': '#00AFD1'
    },
    margin: {
        left: 50
    },
    legend: true,
    axis: {
        x: 'block',
        y: 'This Month',
        r: 'This Month'
    },
    series: 'category'
}); 


pk.chart({
    element: document.getElementById('chart7'),
    type: 'bar',
    data: [{
        block: 'fingers',
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        block: 'fingers',
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        block: 'toes',
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'toes',
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }, {
        block: 'thumbs',
        category: "Invoices",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        block: 'thumbs',
        category: "Petrol",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'fingers',
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'toes',
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': pk.getRand(1, 8)
    }, {
        block: 'thumbs',
        category: "Accommodation",
        'This Month': pk.getRand(0, 9),
        'Last Month': 0
    }],
    tooltip: true,
    colors: {
        'Petrol': '#F27935',
        'Invoices': '#1FBBA6',
        'Accommodation': '#00AFD1'
    },
    margin: {
        left: 50
    },
    legend: true,
    axis: {
        y: 'block',
        x: 'This Month',
        r: 'This Month'
    },
    series: 'category'
});

pk.select({
    element: document.getElementById('select1'),
    value: 'val2',
    multiple: true
});
pk.select({
    element: document.getElementById('select4'),
    value: 'val1',
    multiple: true,
    dropdown: true
});
pk.select({
    element: document.getElementById('select3'),
    value: 'val3',
    dropdown: true
});
pk.select({
    element: document.getElementById('select2')
});

pk.scroll({
    element: document.getElementById('scroll1'),
    axis: 'xy'
});
