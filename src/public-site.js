window.onscroll=function(e){
	var pagenav=document.getElementById('pagenav'), css=pagenav.getAttribute('class');
	if(document.body.scrollTop>520){
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
        'This Month': oui.getRand(0, 9),
        'Last Month': 0
    }, {
        block: 'fingers',
        category: "Petrol",
        'This Month': oui.getRand(0, 9),
        'Last Month': oui.getRand(1, 8)
    }, {
        block: 'toes',
        category: "Invoices",
        'This Month': oui.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'toes',
        category: "Petrol",
        'This Month': oui.getRand(0, 9),
        'Last Month': 0
    }, {
        block: 'thumbs',
        category: "Invoices",
        'This Month': oui.getRand(0, 9),
        'Last Month': oui.getRand(1, 8)
    }, {
        block: 'thumbs',
        category: "Petrol",
        'This Month': oui.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'fingers',
        category: "Accommodation",
        'This Month': oui.getRand(0, 9),
        'Last Month': 9
    }, {
        block: 'toes',
        category: "Accommodation",
        'This Month': oui.getRand(0, 9),
        'Last Month': oui.getRand(1, 8)
    }, {
        block: 'thumbs',
        category: "Accommodation",
        'This Month': oui.getRand(0, 9),
        'Last Month': 0
    }];
}
oui.carousel({
	element:document.getElementById('carousel'),
	delay:5000
});

oui.chart({
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
oui.chart({
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
oui.chart({
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
oui.chart({
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
oui.chart({
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
oui.chart({
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