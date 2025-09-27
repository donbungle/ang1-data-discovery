(function () {
	'use strict';
	angular
		.module('r4-ang1')
		.controller('HomeCtrl', Home);

	Home.$inject = [
		'homeService',
		'$rootScope',
		'$scope',
		'$controller',
		'$timeout',
		'grillaService',
	];

	function Home(
		homeService, 
		$rootScope, 
		$scope, 
		$controller,
		$timeout,
		grillaService
	) {
		var vm = this;
		angular.extend(vm, $controller('AppCtrl', {$scope: $scope}));
		vm.$onInit = onInit;
		vm.app_name = $rootScope.app.name;
		vm.app_icon = $rootScope.app.icon;
		vm.title = "Hello, " + vm.app_name + "!";
		vm.version = "1.0.0";
		vm.table_rentabilidad_data = [];
		vm.filtros_aplicados = [];
		vm.opciones_grilla_basico = grillaService.get_opt_grilla("basico");
		vm.opciones_grilla_rentabilidad = grillaService.get_opt_grilla("rentabilidad");
		vm.opciones_grilla_ratios = grillaService.get_opt_grilla("ratios");
		vm.opciones_grilla_ranking = grillaService.get_opt_grilla("ranking");
		vm.opciones_grilla_general = grillaService.get_opt_grilla("general");

		vm.opciones_grilla_aaa_basico = grillaService.get_opt_grilla("basico", true);
		vm.opciones_grilla_aaa_rentabilidad = grillaService.get_opt_grilla("rentabilidad", true);
		vm.opciones_grilla_aaa_ratios = grillaService.get_opt_grilla("ratios", true);
		vm.opciones_grilla_aaa_ranking = grillaService.get_opt_grilla("ranking", true);
		vm.opciones_grilla_aaa_general = grillaService.get_opt_grilla("general", true);

		vm.opciones_grilla_bbb_basico = grillaService.get_opt_grilla("basico", true);
		vm.opciones_grilla_bbb_rentabilidad = grillaService.get_opt_grilla("rentabilidad", true);
		vm.opciones_grilla_bbb_ratios = grillaService.get_opt_grilla("ratios", true);
		vm.opciones_grilla_bbb_ranking = grillaService.get_opt_grilla("ranking", true);
		vm.opciones_grilla_bbb_general = grillaService.get_opt_grilla("general", true);

		vm.opciones_grilla_ccc_basico = grillaService.get_opt_grilla("basico", true);
		vm.opciones_grilla_ccc_rentabilidad = grillaService.get_opt_grilla("rentabilidad", true);
		vm.opciones_grilla_ccc_ratios = grillaService.get_opt_grilla("ratios", true);
		vm.opciones_grilla_ccc_ranking = grillaService.get_opt_grilla("ranking", true);
		vm.opciones_grilla_ccc_general = grillaService.get_opt_grilla("general", true);

		vm.opciones_grilla_ia_basico = grillaService.get_opt_grilla("basico", true);
		vm.opciones_grilla_ia_rentabilidad = grillaService.get_opt_grilla("rentabilidad", true);
		vm.opciones_grilla_ia_ratios = grillaService.get_opt_grilla("ratios", true);
		vm.opciones_grilla_ia_ranking = grillaService.get_opt_grilla("ranking", true);
		vm.opciones_grilla_ia_general = grillaService.get_opt_grilla("general", true);

		vm.opciones_grilla_r4_basico = grillaService.get_opt_grilla("basico", true);
		vm.opciones_grilla_r4_rentabilidad = grillaService.get_opt_grilla("rentabilidad", true);
		vm.opciones_grilla_r4_ratios = grillaService.get_opt_grilla("ratios", true);
		vm.opciones_grilla_r4_ranking = grillaService.get_opt_grilla("ranking", true);
		vm.opciones_grilla_r4_general = grillaService.get_opt_grilla("general", true);

		vm.mostrar_logos = false;
		vm.nro = 0;
		
		function onInit(){
			console.log('Home onInit', vm);
			console.log('Home $scope', $scope);
			
			getDataGrillas();
			$timeout(function(){
				setTabs();
				setPopover();
				setTooltip();
				setECharts();
				$('.multiple-items').slick({
					autoplay: true,
					dots: false,
					arrows: true,
					infinite: true,
					speed: 300,
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '80px',
					variableWidth: true,
					adaptiveHeight: false,
					accessibility: false,
					mobileFirst: false
				});
				//autoAnimate(document.getElementsByClassName('#accordionFiltrosAplicados .accordion-body'));
			}, 1000);
			$timeout(function(){
				vm.mostrar_logos = true;
			}, 2000);
			homeService.get_filtros_menu().then(function(response){
				console.log('get_filtros_menu response', response);
				vm.filtros_menu = response.data;
			}, function(error){
				console.log('error', error);
			});
		}

		$scope.ver_detalle = function(){
			console.log("ver_detalle");
			var modalEl = document.getElementById('modalDetalle');
			var modal = new bootstrap.Modal(modalEl);
			modal.show();
		};

		function getDataGrillas(){
			homeService.getData("basico").then(response => { 
				vm.table_basico_data = response.data;
				vm.table_basico_data_modelo = vm.table_basico_data.slice(0, 4);
				vm.table_basico_data_ia = vm.table_basico_data.slice(0, 4);
				vm.table_basico_data_r4 = vm.table_basico_data.slice(0, 4);
			});
			homeService.getData("rentabilidad").then(response => { 
				vm.table_rentabilidad_data = response.data;
				vm.table_rentabilidad_data_modelo = vm.table_rentabilidad_data.slice(0, 4);
				vm.table_rentabilidad_data_ia = vm.table_rentabilidad_data.slice(0, 4);
				vm.table_rentabilidad_data_r4 = vm.table_rentabilidad_data.slice(0, 4);
			});
			homeService.getData("ratios").then(response => { 
				vm.table_ratios_data = response.data;
				vm.table_ratios_data_modelo = vm.table_ratios_data.slice(0, 4);
				vm.table_ratios_data_ia = vm.table_ratios_data.slice(0, 4);
				vm.table_ratios_data_r4 = vm.table_ratios_data.slice(0, 4);
			});
			homeService.getData("ranking").then(response => { 
				vm.table_ranking_data = response.data;
				vm.table_ranking_data_modelo = vm.table_ranking_data.slice(0, 4);
				vm.table_ranking_data_ia = vm.table_ranking_data.slice(0, 4);
				vm.table_ranking_data_r4 = vm.table_ranking_data.slice(0, 4);
			});
			homeService.getData("general").then(response => { 
				vm.table_general_data = response.data;
				vm.table_general_data_modelo = vm.table_general_data.slice(0, 4);
				vm.table_general_data_ia = vm.table_general_data.slice(0, 4);
				vm.table_general_data_r4 = vm.table_general_data.slice(0, 4);
			});
		}

		function setPopover(){
			$timeout(function() {
				// initialize Bootstrap popovers after Angular digest cycle
				const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
				popoverTriggerList.map(function (el) {
					return new bootstrap.Popover(el, {
						//container: '#nav-tabContent'
					});
				});
			},1000);
		}

		function setTooltip(){
			$timeout(function() {
				const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
				const tooltipList = [...tooltipTriggerList].map(function(tooltipTriggerEl){
					new bootstrap.Tooltip(tooltipTriggerEl, {
						container: 'body'
					});
					
					}
				);

				
				$timeout(function () {
					const verDetalleList = document.querySelectorAll('.fondo-detalle');
					const tooltipList = [...verDetalleList].map(function(verDetalleEl){
						verDetalleEl.addEventListener('click', function () {
							console.log('Clicked after render '+ vm.nro++);
							$scope.ver_detalle();
							//alert();
						});
					});
				}, 100);

				
			},1000);
		}

		function setECharts(){
			var dom = document.getElementById('chart-container');
			var myChart = echarts.init(dom, null, {
			renderer: 'canvas',
			useDirtyRect: false
			});
			var app = {};


			var option;

			setTimeout(function () {
			option = {
				legend: {},
				tooltip: {
				trigger: 'axis',
				showContent: false
				},
				dataset: {
				source: [
					['product', '2012', '2013', '2014', '2015', '2016', '2017'],
					['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
					['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
					['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
					['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
				]
				},
				xAxis: { type: 'category' },
				yAxis: { gridIndex: 0 },
				grid: { top: '55%' },
				series: [
				{
					type: 'line',
					smooth: true,
					seriesLayoutBy: 'row',
					emphasis: { focus: 'series' }
				},
				{
					type: 'line',
					smooth: true,
					seriesLayoutBy: 'row',
					emphasis: { focus: 'series' }
				},
				{
					type: 'line',
					smooth: true,
					seriesLayoutBy: 'row',
					emphasis: { focus: 'series' }
				},
				{
					type: 'line',
					smooth: true,
					seriesLayoutBy: 'row',
					emphasis: { focus: 'series' }
				},
				{
					type: 'pie',
					id: 'pie',
					radius: '30%',
					center: ['50%', '25%'],
					emphasis: {
					focus: 'self'
					},
					label: {
					formatter: '{b}: {@2012} ({d}%)'
					},
					encode: {
					itemName: 'product',
					value: '2012',
					tooltip: '2012'
					}
				}
				]
			};
			myChart.on('updateAxisPointer', function (event) {
				const xAxisInfo = event.axesInfo[0];
				if (xAxisInfo) {
				const dimension = xAxisInfo.value + 1;
				myChart.setOption({
					series: {
					id: 'pie',
					label: {
						formatter: '{b}: {@[' + dimension + ']} ({d}%)'
					},
					encode: {
						value: dimension,
						tooltip: dimension
					}
					}
				});
				}
			});
			myChart.setOption(option);
			});


			if (option && typeof option === 'object') {
			myChart.setOption(option);
			}

			window.addEventListener('resize', myChart.resize);
		}

		function setGrafico(){
			//# dc.js Getting Started and How-To Guide

			// ### Create Chart Objects

			// Create chart objects associated with the container elements identified by the css selector.
			// Note: It is often a good idea to have these objects accessible at the global scope so that they can be modified or
			// filtered by other page controls.
			const gainOrLossChart = new dc.PieChart('#gain-loss-chart');
			const fluctuationChart = new dc.BarChart('#fluctuation-chart');
			const quarterChart = new dc.PieChart('#quarter-chart');
			const dayOfWeekChart = new dc.RowChart('#day-of-week-chart');
			const moveChart = new dc.LineChart('#monthly-move-chart');
			const volumeChart = new dc.BarChart('#monthly-volume-chart');
			const yearlyBubbleChart = new dc.BubbleChart('#yearly-bubble-chart');
			const nasdaqCount = new dc.DataCount('.dc-data-count');
			const nasdaqTable = new dc.DataTable('.dc-data-table');

			// ### Anchor Div for Charts
			/*
			// A div anchor that can be identified by id
				<div id='your-chart'></div>
			// Title or anything you want to add above the chart
				<div id='chart'><span>Days by Gain or Loss</span></div>
			// ##### .turnOnControls()

			// If a link with css class `reset` is present then the chart
			// will automatically hide/show it based on whether there is a filter
			// set on the chart (e.g. slice selection for pie chart and brush
			// selection for bar chart). Enable this with `chart.turnOnControls(true)`

			// By default, dc.js >=2.1 uses `display: none` to control whether or not chart
			// controls are shown. To use `visibility: hidden` to hide/show controls
			// without disrupting the layout, set `chart.controlsUseVisibility(true)`.

				<div id='chart'>
				<a class='reset'
					href='javascript:myChart.filterAll();dc.redrawAll();'
					style='visibility: hidden;'>reset</a>
				</div>
			// dc.js will also automatically inject the current filter value into
			// any html element with its css class set to `filter`
				<div id='chart'>
					<span class='reset' style='visibility: hidden;'>
					Current filter: <span class='filter'></span>
					</span>
				</div>
			*/

			//### Load your data

			//Data can be loaded through regular means with your
			//favorite javascript library
			//
			//```javascript
			//d3.csv('data.csv').then(function(data) {...});
			//d3.json('data.json').then(function(data) {...});
			//jQuery.getJson('data.json', function(data){...});
			//```
			d3.csv('app/assets/json/ndx.csv').then(data => {
				// Since its a csv file we need to format the data a bit.
				const dateFormatSpecifier = '%m/%d/%Y';
				const dateFormat = d3.timeFormat(dateFormatSpecifier);
				const dateFormatParser = d3.timeParse(dateFormatSpecifier);
				const numberFormat = d3.format('.2f');

				data.forEach(d => {
					d.dd = dateFormatParser(d.date);
					d.month = d3.timeMonth(d.dd); // pre-calculate month for better performance
					d.close = +d.close; // coerce to number
					d.open = +d.open;
				});

				//### Create Crossfilter Dimensions and Groups

				//See the [crossfilter API](https://github.com/square/crossfilter/wiki/API-Reference) for reference.
				const ndx = crossfilter(data);
				const all = ndx.groupAll();

				// Dimension by year
				const yearlyDimension = ndx.dimension(d => d3.timeYear(d.dd).getFullYear());
				// Maintain running tallies by year as filters are applied or removed
				const yearlyPerformanceGroup = yearlyDimension.group().reduce(
					/* callback for when data is added to the current filter results */
					(p, v) => {
						++p.count;
						p.absGain += v.close - v.open;
						p.fluctuation += Math.abs(v.close - v.open);
						p.sumIndex += (v.open + v.close) / 2;
						p.avgIndex = p.sumIndex / p.count;
						p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
						p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
						return p;
					},
					/* callback for when data is removed from the current filter results */
					(p, v) => {
						--p.count;
						p.absGain -= v.close - v.open;
						p.fluctuation -= Math.abs(v.close - v.open);
						p.sumIndex -= (v.open + v.close) / 2;
						p.avgIndex = p.count ? p.sumIndex / p.count : 0;
						p.percentageGain = p.avgIndex ? (p.absGain / p.avgIndex) * 100 : 0;
						p.fluctuationPercentage = p.avgIndex ? (p.fluctuation / p.avgIndex) * 100 : 0;
						return p;
					},
					/* initialize p */
					() => ({
						count: 0,
						absGain: 0,
						fluctuation: 0,
						fluctuationPercentage: 0,
						sumIndex: 0,
						avgIndex: 0,
						percentageGain: 0
					})
				);

				// Dimension by full date
				const dateDimension = ndx.dimension(d => d.dd);

				// Dimension by month
				const moveMonths = ndx.dimension(d => d.month);
				// Group by total movement within month
				const monthlyMoveGroup = moveMonths.group().reduceSum(d => Math.abs(d.close - d.open));
				// Group by total volume within move, and scale down result
				const volumeByMonthGroup = moveMonths.group().reduceSum(d => d.volume / 500000);
				const indexAvgByMonthGroup = moveMonths.group().reduce(
					(p, v) => {
						++p.days;
						p.total += (v.open + v.close) / 2;
						p.avg = Math.round(p.total / p.days);
						return p;
					},
					(p, v) => {
						--p.days;
						p.total -= (v.open + v.close) / 2;
						p.avg = p.days ? Math.round(p.total / p.days) : 0;
						return p;
					},
					() => ({days: 0, total: 0, avg: 0})
				);

				// Create categorical dimension
				const gainOrLoss = ndx.dimension(d => d.open > d.close ? 'Loss' : 'Gain');
				// Produce counts records in the dimension
				const gainOrLossGroup = gainOrLoss.group();

				// Determine a histogram of percent changes
				const fluctuation = ndx.dimension(d => Math.round((d.close - d.open) / d.open * 100));
				const fluctuationGroup = fluctuation.group();

				// Summarize volume by quarter
				const quarter = ndx.dimension(d => {
					const month = d.dd.getMonth();
					if (month <= 2) {
						return 'Q1';
					} else if (month > 2 && month <= 5) {
						return 'Q2';
					} else if (month > 5 && month <= 8) {
						return 'Q3';
					} else {
						return 'Q4';
					}
				});
				const quarterGroup = quarter.group().reduceSum(d => d.volume);

				// Counts per weekday
				const dayOfWeek = ndx.dimension(d => {
					const day = d.dd.getDay();
					const name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
					return `${day}.${name[day]}`;
				});
				const dayOfWeekGroup = dayOfWeek.group();

				//### Define Chart Attributes
				// Define chart attributes using fluent methods. See the
				// [dc.js API Reference](https://dc-js.github.io/dc.js/docs/html/) for more information
				//

				//#### Bubble Chart

				//Create a bubble chart and use the given css selector as anchor. You can also specify
				//an optional chart group for this chart to be scoped within. When a chart belongs
				//to a specific group then any interaction with the chart will only trigger redraws
				//on charts within the same chart group.
				// <br>API: [Bubble Chart](https://dc-js.github.io/dc.js/docs/html/BubbleChart.html)

				yearlyBubbleChart /* dc.bubbleChart('#yearly-bubble-chart', 'chartGroup') */
					// (_optional_) define chart width, `default = 200`
					.width(990)
					// (_optional_) define chart height, `default = 200`
					.height(250)
					// (_optional_) define chart transition duration, `default = 750`
					.transitionDuration(1500)
					.margins({top: 10, right: 50, bottom: 30, left: 40})
					.dimension(yearlyDimension)
					//The bubble chart expects the groups are reduced to multiple values which are used
					//to generate x, y, and radius for each key (bubble) in the group
					.group(yearlyPerformanceGroup)
					// (_optional_) define color function or array for bubbles: [ColorBrewer](http://colorbrewer2.org/)
					.colors(d3.schemeRdYlGn[9])
					//(optional) define color domain to match your data domain if you want to bind data or color
					.colorDomain([-500, 500])
				//##### Accessors

				//Accessor functions are applied to each value returned by the grouping

					// `.colorAccessor` - the returned value will be passed to the `.colors()` scale to determine a fill color
					.colorAccessor(d => d.value.absGain)
					// `.keyAccessor` - the `X` value will be passed to the `.x()` scale to determine pixel location
					.keyAccessor(p => p.value.absGain)
					// `.valueAccessor` - the `Y` value will be passed to the `.y()` scale to determine pixel location
					.valueAccessor(p => p.value.percentageGain)
					// `.radiusValueAccessor` - the value will be passed to the `.r()` scale to determine radius size;
					//   by default this maps linearly to [0,100]
					.radiusValueAccessor(p => p.value.fluctuationPercentage)
					.maxBubbleRelativeSize(0.3)
					.x(d3.scaleLinear().domain([-2500, 2500]))
					.y(d3.scaleLinear().domain([-100, 100]))
					.r(d3.scaleLinear().domain([0, 4000]))
					//##### Elastic Scaling

					//`.elasticY` and `.elasticX` determine whether the chart should rescale each axis to fit the data.
					.elasticY(true)
					.elasticX(true)
					//`.yAxisPadding` and `.xAxisPadding` add padding to data above and below their max values in the same unit
					//domains as the Accessors.
					.yAxisPadding(100)
					.xAxisPadding(500)
					// (_optional_) render horizontal grid lines, `default=false`
					.renderHorizontalGridLines(true)
					// (_optional_) render vertical grid lines, `default=false`
					.renderVerticalGridLines(true)
					// (_optional_) render an axis label below the x axis
					.xAxisLabel('Index Gain')
					// (_optional_) render a vertical axis lable left of the y axis
					.yAxisLabel('Index Gain %')
					//##### Labels and  Titles

					//Labels are displayed on the chart for each bubble. Titles displayed on mouseover.
					// (_optional_) whether chart should render labels, `default = true`
					.renderLabel(true)
					.label(p => p.key)
					// (_optional_) whether chart should render titles, `default = false`
					.renderTitle(true)
					.title(p => [
						p.key,
						`Index Gain: ${numberFormat(p.value.absGain)}`,
						`Index Gain in Percentage: ${numberFormat(p.value.percentageGain)}%`,
						`Fluctuation / Index Ratio: ${numberFormat(p.value.fluctuationPercentage)}%`
					].join('\n'))
					//#### Customize Axes

					// Set a custom tick format. Both `.yAxis()` and `.xAxis()` return an axis object,
					// so any additional method chaining applies to the axis, not the chart.
					.yAxis().tickFormat(v => `${v}%`);

				// #### Pie/Donut Charts

				// Create a pie chart and use the given css selector as anchor. You can also specify
				// an optional chart group for this chart to be scoped within. When a chart belongs
				// to a specific group then any interaction with such chart will only trigger redraw
				// on other charts within the same chart group.
				// <br>API: [Pie Chart](https://dc-js.github.io/dc.js/docs/html/PieChart.html)

				gainOrLossChart /* dc.pieChart('#gain-loss-chart', 'chartGroup') */
				// (_optional_) define chart width, `default = 200`
					.width(180)
				// (optional) define chart height, `default = 200`
					.height(180)
				// Define pie radius
					.radius(80)
				// Set dimension
					.dimension(gainOrLoss)
				// Set group
					.group(gainOrLossGroup)
				// (_optional_) by default pie chart will use `group.key` as its label but you can overwrite it with a closure.
					.label(d => {
						if (gainOrLossChart.hasFilter() && !gainOrLossChart.hasFilter(d.key)) {
							return `${d.key}(0%)`;
						}
						let label = d.key;
						if (all.value()) {
							label += `(${Math.floor(d.value / all.value() * 100)}%)`;
						}
						return label;
					})
				/*
					// (_optional_) whether chart should render labels, `default = true`
					.renderLabel(true)
					// (_optional_) if inner radius is used then a donut chart will be generated instead of pie chart
					.innerRadius(40)
					// (_optional_) define chart transition duration, `default = 350`
					.transitionDuration(500)
					// (_optional_) define color array for slices
					.colors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
					// (_optional_) define color domain to match your data domain if you want to bind data or color
					.colorDomain([-1750, 1644])
					// (_optional_) define color value accessor
					.colorAccessor(function(d, i){return d.value;})
					*/;

				quarterChart /* dc.pieChart('#quarter-chart', 'chartGroup') */
					.width(180)
					.height(180)
					.radius(80)
					.innerRadius(30)
					.dimension(quarter)
					.group(quarterGroup);

				//#### Row Chart

				// Create a row chart and use the given css selector as anchor. You can also specify
				// an optional chart group for this chart to be scoped within. When a chart belongs
				// to a specific group then any interaction with such chart will only trigger redraw
				// on other charts within the same chart group.
				// <br>API: [Row Chart](https://dc-js.github.io/dc.js/docs/html/RowChart.html)
				dayOfWeekChart /* dc.rowChart('#day-of-week-chart', 'chartGroup') */
					.width(180)
					.height(180)
					.margins({top: 20, left: 10, right: 10, bottom: 20})
					.group(dayOfWeekGroup)
					.dimension(dayOfWeek)
					// Assign colors to each value in the x scale domain
					.ordinalColors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
					.label(d => d.key.split('.')[1])
					// Title sets the row text
					.title(d => d.value)
					.elasticX(true)
					.xAxis().ticks(4);

				//#### Bar Chart

				// Create a bar chart and use the given css selector as anchor. You can also specify
				// an optional chart group for this chart to be scoped within. When a chart belongs
				// to a specific group then any interaction with such chart will only trigger redraw
				// on other charts within the same chart group.
				// <br>API: [Bar Chart](https://dc-js.github.io/dc.js/docs/html/BarChart.html)
				fluctuationChart /* dc.barChart('#volume-month-chart', 'chartGroup') */
					.width(420)
					.height(180)
					.margins({top: 10, right: 50, bottom: 30, left: 40})
					.dimension(fluctuation)
					.group(fluctuationGroup)
					.elasticY(true)
					// (_optional_) whether bar should be center to its x value. Not needed for ordinal chart, `default=false`
					.centerBar(true)
					// (_optional_) set gap between bars manually in px, `default=2`
					.gap(1)
					// (_optional_) set filter brush rounding
					.round(Math.floor)
					.alwaysUseRounding(true)
					.x(d3.scaleLinear().domain([-25, 25]))
					.renderHorizontalGridLines(true)
					// Customize the filter displayed in the control span
					.filterPrinter(filters => {
						const filter = filters[0];
						let s = '';
						s += `${numberFormat(filter[0])}% -> ${numberFormat(filter[1])}%`;
						return s;
					});

				// Customize axes
				fluctuationChart.xAxis().tickFormat(
					v => `${v}%`);
				fluctuationChart.yAxis().ticks(5);

				//#### Stacked Area Chart

				//Specify an area chart by using a line chart with `.renderArea(true)`.
				// <br>API: [Stack Mixin](https://dc-js.github.io/dc.js/docs/html/StackMixin.html),
				// [Line Chart](https://dc-js.github.io/dc.js/docs/html/LineChart.html)
				moveChart /* dc.lineChart('#monthly-move-chart', 'chartGroup') */
					.renderArea(true)
					.width(990)
					.height(200)
					.transitionDuration(1000)
					.margins({top: 30, right: 50, bottom: 25, left: 40})
					.dimension(moveMonths)
					.mouseZoomable(true)
				// Specify a "range chart" to link its brush extent with the zoom of the current "focus chart".
					.rangeChart(volumeChart)
					.x(d3.scaleTime().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)]))
					.round(d3.timeMonth.round)
					.xUnits(d3.timeMonths)
					.elasticY(true)
					.renderHorizontalGridLines(true)
				//##### Legend

					// Position the legend relative to the chart origin and specify items' height and separation.
					.legend(new dc.Legend().x(800).y(10).itemHeight(13).gap(5))
					.brushOn(false)
					// Add the base layer of the stack with group. The second parameter specifies a series name for use in the
					// legend.
					// The `.valueAccessor` will be used for the base layer
					.group(indexAvgByMonthGroup, 'Monthly Index Average')
					.valueAccessor(d => d.value.avg)
					// Stack additional layers with `.stack`. The first paramenter is a new group.
					// The second parameter is the series name. The third is a value accessor.
					.stack(monthlyMoveGroup, 'Monthly Index Move', d => d.value)
					// Title can be called by any stack layer.
					.title(d => {
						let value = d.value.avg ? d.value.avg : d.value;
						if (isNaN(value)) {
							value = 0;
						}
						return `${dateFormat(d.key)}\n${numberFormat(value)}`;
					});

				//#### Range Chart

				// Since this bar chart is specified as "range chart" for the area chart, its brush extent
				// will always match the zoom of the area chart.
				volumeChart.width(990) /* dc.barChart('#monthly-volume-chart', 'chartGroup'); */
					.height(40)
					.margins({top: 0, right: 50, bottom: 20, left: 40})
					.dimension(moveMonths)
					.group(volumeByMonthGroup)
					.centerBar(true)
					.gap(1)
					.x(d3.scaleTime().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)]))
					.round(d3.timeMonth.round)
					.alwaysUseRounding(true)
					.xUnits(d3.timeMonths);

				//#### Data Count

				// Create a data count widget and use the given css selector as anchor. You can also specify
				// an optional chart group for this chart to be scoped within. When a chart belongs
				// to a specific group then any interaction with such chart will only trigger redraw
				// on other charts within the same chart group.
				// <br>API: [Data Count Widget](https://dc-js.github.io/dc.js/docs/html/DataCount.html)
				//
				//```html
				//<div class='dc-data-count'>
				//  <span class='filter-count'></span>
				//  selected out of <span class='total-count'></span> records.
				//</div>
				//```

				nasdaqCount /* dc.dataCount('.dc-data-count', 'chartGroup'); */
					.crossfilter(ndx)
					.groupAll(all)
					// (_optional_) `.html` sets different html when some records or all records are selected.
					// `.html` replaces everything in the anchor with the html given using the following function.
					// `%filter-count` and `%total-count` are replaced with the values obtained.
					.html({
						some: '<strong>%filter-count</strong> selected out of <strong>%total-count</strong> records' +
							' | <a href=\'javascript:dc.filterAll(); dc.renderAll();\'>Reset All</a>',
						all: 'All records selected. Please click on the graph to apply filters.'
					});

				//#### Data Table

				// Create a data table widget and use the given css selector as anchor. You can also specify
				// an optional chart group for this chart to be scoped within. When a chart belongs
				// to a specific group then any interaction with such chart will only trigger redraw
				// on other charts within the same chart group.
				// <br>API: [Data Table Widget](https://dc-js.github.io/dc.js/docs/html/DataTable.html)
				//
				// You can statically define the headers like in
				//
				// ```html
				//    <!-- anchor div for data table -->
				//    <div id='data-table'>
				//       <!-- create a custom header -->
				//       <div class='header'>
				//           <span>Date</span>
				//           <span>Open</span>
				//           <span>Close</span>
				//           <span>Change</span>
				//           <span>Volume</span>
				//       </div>
				//       <!-- data rows will filled in here -->
				//    </div>
				// ```
				// or do it programmatically using `.columns()`.

				nasdaqTable /* dc.dataTable('.dc-data-table', 'chartGroup') */
					.dimension(dateDimension)
					// Specify a section function to nest rows of the table
					.section(d => {
						const format = d3.format('02d');
						return `${d.dd.getFullYear()}/${format((d.dd.getMonth() + 1))}`;
					})
					// (_optional_) max number of records to be shown, `default = 25`
					.size(10)
					// There are several ways to specify the columns; see the data-table documentation.
					// This code demonstrates generating the column header automatically based on the columns.
					.columns([
						// Use the `d.date` field; capitalized automatically
						'date',
						// Use `d.open`, `d.close`
						'open',
						'close',
						{
							// Specify a custom format for column 'Change' by using a label with a function.
							label: 'Change',
							format: function (d) {
								return numberFormat(d.close - d.open);
							}
						},
						// Use `d.volume`
						'volume'
					])

					// (_optional_) sort using the given field, `default = function(d){return d;}`
					.sortBy(d => d.dd)
					// (_optional_) sort order, `default = d3.ascending`
					.order(d3.ascending)
					// (_optional_) custom renderlet to post-process chart using [D3](http://d3js.org)
					.on('renderlet', table => {
						table.selectAll('.dc-table-group').classed('info', true);
					});

				//#### Rendering

				//simply call `.renderAll()` to render all charts on the page
				dc.renderAll();
				/*
				// Or you can render charts belonging to a specific chart group
				dc.renderAll('group');
				// Once rendered you can call `.redrawAll()` to update charts incrementally when the data
				// changes, without re-rendering everything
				dc.redrawAll();
				// Or you can choose to redraw only those charts associated with a specific chart group
				dc.redrawAll('group');
				*/

			});

			//#### Versions

			//Determine the current version of dc with `dc.version`
			d3.selectAll('#version').text(dc.version);

			// Determine latest stable version in the repo via Github API
			d3.json('https://api.github.com/repos/dc-js/dc.js/releases/latest').then(latestRelease => {
				/* eslint camelcase: 0 */
				d3.selectAll('#latest').text(latestRelease.tag_name);
			});
		}

		function setTabs(){
			const tabEl = document.querySelector('#nav-tab');
			const loader = document.getElementById('tabLoader');

			tabEl.addEventListener('show.bs.tab', () => {
				setTooltip();
				loader.classList.add('show');   // show overlay
			});

			tabEl.addEventListener('shown.bs.tab', () => {
				// simulate async loading
				setTimeout(() => loader.classList.remove('show'), 500);
			});
		}

		function getCheckedOpciones(filtros_menu) {
			return filtros_menu
				.flatMap(item => item.opciones)
				.filter(opcion => opcion.checked === true);
		}

		vm.quitar_filtro = function() {
			var filtros = vm.filtros_menu
				.flatMap(item => item.opciones)
				.filter(opcion => opcion.checked === true);
			console.log('quitar_filtro filtros:', filtros);
		}
		
		//MODAL INFO FONDO
		vm.openModal = function() {
			var modalEl = document.getElementById('exampleModal');
			var modal = new bootstrap.Modal(modalEl);
			modal.show();
		};
		//FIN MODAL INFO FONDO


		// FILTROS
		
		// Reset all checkboxes
		vm.resetAll = function() {
		vm.filtros_menu.forEach(function(filtro) {
			filtro.opciones.forEach(function(opcion) {
				opcion.checked = false;
			});
		});
		};


		$scope.$watch('vm.filtros_menu', function(newVal, oldVal) {
			//console.log('Collection changed:');
			//console.log('From:', oldVal);
			//console.log('To:', newVal);
			//vm.filtros_aplicados = [];
			//vm.filtros_aplicados = _.map(getCheckedOpciones(newVal), function(filtro){
			//	return {
			//		'label': filtro.titulo,
			//		'id': filtro.id,
			//		'valor': filtro.value,
			//		'color': filtro.color,
			//	};
			//});
			console.log('vm.filtros_aplicados', vm.filtros_aplicados);
		}, true);

		// FIN FILTROS
	}

})();
