window.onscroll=function(e){
	var pagenav=document.getElementById('pagenav'), css=pagenav.getAttribute('class');
	if(document.body.scrollTop>document.getElementById('pageheader').clientHeight){
		if(css.indexOf("navbar-inverse")<0){ 
			pagenav.setAttribute("class",css.trim()+" navbar-inverse");
		}	
	}else{
		pagenav.setAttribute("class",css.replace("navbar-inverse","").trim());
	}
};

function chartData(){
	return [{
        block: 'fingers',
        category: "Invoices",
        'This Month': $ui.getRand(0, 9),
        'Last Month': 0
    }, {
        block: 'fingers',
        category: "Petrol",
        'This Month': $ui.getRand(0, 9),
        'Last Month': $ui.getRand(1, 8)
    }, {
        block: 'toes',
        category: "Invoices",
        'This Month': $ui.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'toes',
        category: "Petrol",
        'This Month': $ui.getRand(0, 9),
        'Last Month': 0
    }, {
        block: 'thumbs',
        category: "Invoices",
        'This Month': $ui.getRand(0, 9),
        'Last Month': $ui.getRand(1, 8)
    }, {
        block: 'thumbs',
        category: "Petrol",
        'This Month': $ui.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'fingers',
        category: "Accommodation",
        'This Month': $ui.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'toes',
        category: "Accommodation",
        'This Month': $ui.getRand(0, 9),
        'Last Month': $ui.getRand(1, 8)
    }, {
        block: 'thumbs',
        category: "Accommodation",
        'This Month': $ui.getRand(0, 9),
        'Last Month': 0
    }];
}

$ui.chart({
	element:document.getElementById('uiLineChart'),
    type: 'line',
    data: chartData(),
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    legend: true,
    axis: {
        x: 'Last Month',
        y: 'This Month'
    },
    series: 'category'
});



/*
$ui.carousel({
	element:document.getElementById('carousel'),
	delay:5000
});
*/

$ui.chart({
	element:document.getElementById('uiScatterChart'),
    type: 'scatter',
    data: chartData(),
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    legend: true,
    axis: {
        x: 'Last Month',
        y: 'This Month'
    },
    series: 'category'
});
$ui.chart({
	element:document.getElementById('uiAreaChart'),
    type: 'area',
    data: chartData(),
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    legend: true,
    axis: {
        x: 'Last Month',
        y: 'This Month'
    },
    series: 'category'
});
$ui.chart({
	element:document.getElementById('uiBubbleChart'),
    type: 'scatter',
    data: chartData(),
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    legend: true,
    axis: {
        x: 'Last Month',
        y: 'This Month',
        r: 'This Month'
    },
    series: 'category'
});
$ui.chart({
	element:document.getElementById('uiBarChart'),
    type: 'bar',
    data: chartData(),
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    legend: true,
    axis: {
        x: 'This Month',
        y: 'block'
    },
    series: 'category'
});
$ui.chart({
	element:document.getElementById('uiColumnChart'),
    type: 'column',
    data: chartData(),
    colors: {
        'Petrol': '#F20081',
        'Invoices': '#EBBC00',
        'Accommodation': '#00DECF'
    },
    legend: true,
    axis: {
        x: 'block',
        y: 'This Month'
    },
    series: 'category'
});

$ui.chart({
	element:document.getElementById('uiPieChart'),
    type: 'pie',
    data: chartData(),
    legend: true,
    axis: {
        x: 'category'
    },
    series: ['This Month', 'Last Month']
});

$ui.chart({
	element:document.getElementById('uiDonutChart'),
    type: 'pie',
    data: chartData(),
    legend: true,
	center:50,
    axis: {
        x: 'category'
    },
    series: ['This Month', 'Last Month']
});


$ui.select({
    element: document.getElementById('uiSingleSelectControl'),
    value: 'val3',
    dropdown: true
});

$ui.select({
    element: document.getElementById('uiMultiSelectControl'),
    value: 'val2',
    multiple: true,
    dropdown: true
});

$ui.colorpicker({
    element: document.getElementById('uiColorpickerControl'),
    value: '#49A3DF',
    listeners: {
        change: function(oldCol, newCol) {
            var outputEl = document.getElementById('colorOutput'), cols;
            for (var u = 0; u < outputEl.children.length; u++) {
                if ($ui.attribute(outputEl.children[u], 'data-color')) {
                    outputEl.children[u].innerHTML = '';
                    if ($ui.attribute(outputEl.children[u], 'data-color') === 'complement' && $ui.attribute(outputEl.children[u], 'data-type')) { 
                        cols = $ui.color[$ui.attribute(outputEl.children[u], 'data-color')](newCol, $ui.attribute(outputEl.children[u], 'data-type'));
                    } else {
                        cols = $ui.color[$ui.attribute(outputEl.children[u], 'data-color')](newCol);
                    }
                    for (var c = 0; c < cols.length; c++) {
                        var cEl = $ui.createEl("<span style='display:inline-block;height:25px;width:25px;background:" + cols[c] + ";'></span>");
                        outputEl.children[u].appendChild(cEl);
                    }
                }
            }
        }
    }
});

$ui.fileinput({
    element: document.getElementById('uiFileInputControl')
});

$ui.switch({
    element: document.getElementById('uiSwitchControl')
});
$ui.toggle({
    element: document.getElementById('uiToggleControl'),
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

$ui.accordion({
    element: document.getElementById('uiAccordionComponent'),
    animate: true,
    multiple: false
});


$ui.tooltip({
    element: document.getElementById('uiTooltipComponent1'),
    content: 'Content on top',
    position: 'top'
});
$ui.tooltip({
    element: document.getElementById('uiTooltipComponent2'),
    content: 'Content to the right',
    position: 'right'
});
$ui.tooltip({
    element: document.getElementById('uiTooltipComponent3'),
    content: 'Content below',
    position: 'bottom'
});
$ui.tooltip({
    element: document.getElementById('uiTooltipComponent4'),
    content: 'Content to the left',
    position: 'left'
});
/*

$ui.slider({
    element: document.getElementById('uiSliderControl1'),
    units: '%',
    axis: 'y',
    value: 40
});
$ui.slider({
    element: document.getElementById('uiSliderControl2'),
    units: 'mm',
    axis: 'x',
    value: 0,
    min: -444,
    max: 900,
    listeners: {
        change: function(e, v, i) {
            var col = $ui.color.percentage(Math.abs(v) / 900, '#0061a3');
            e.children[1].style.backgroundColor = col;
        }
    }
});
$ui.slider({
    element: document.getElementById('uiSliderControl3'),
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
$ui.slider({
    element: document.getElementById('uiSliderControl4'),
    units: 'nm',
    value: 336,
    min: 0,
    max: 2477,
    circle: {
        length: 30
    },
    listeners: {
        change: function(e, v, i) {
            var col = $ui.color.percentage(v / 2477);
            e.children[2].style.color = col;
            e.children[1].childNodes[1].style.stroke = col;
            e.children[1].childNodes[3].style.stroke = col;
        }
    }
});
$ui.slider({
    element: document.getElementById('uiSliderControl5'),
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
*/
