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

$ui.chart({
	element:document.getElementById('lineChart'),
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
$ui.chart({
	element:document.getElementById('scatterChart'),
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
	element:document.getElementById('areaChart'),
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
	element:document.getElementById('bubbleChart'),
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
	element:document.getElementById('barChart'),
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
	element:document.getElementById('columnChart'),
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
*/
