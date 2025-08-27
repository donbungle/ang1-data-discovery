(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('eChart', eChart);

	eChart.$inject = ['$timeout', '$window'];

	function eChart($timeout, $window) {
		var directive = {
			restrict: 'E',
			scope: {
				chartType: '@',
				data: '=',
				options: '=?',
				width: '=?',
				height: '=?',
				title: '@?',
				theme: '@?',
				renderer: '@?',
				onChartReady: '&?',
				onChartClick: '&?',
				onChartDoubleClick: '&?',
				onChartMouseOver: '&?',
				onChartMouseOut: '&?',
				customConfig: '=?'
			},
			template: '<div class="echarts-container" style="width: 100%; height: 400px;"></div>',
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			var chartElement = element[0].firstElementChild;
			var chart;

			if (!$window.echarts) {
				console.error('ECharts library is not loaded');
				return;
			}

			$timeout(function() {
				initializeChart();
			});

			function initializeChart() {
				if (!scope.data) {
					console.error('eChart: data is required');
					return;
				}

				createChart();
				configureChart();
				bindEvents();
			}

			function createChart() {
				var width = scope.width || chartElement.offsetWidth || 600;
				var height = scope.height || chartElement.offsetHeight || 400;
				
				chartElement.style.width = width + 'px';
				chartElement.style.height = height + 'px';

				var theme = scope.theme || 'default';
				var renderer = scope.renderer || 'canvas';

				chart = $window.echarts.init(chartElement, theme, {
					renderer: renderer,
					width: width,
					height: height
				});
			}

			function configureChart() {
				if (!chart) return;

				var option = {};

				// Set title if provided
				if (scope.title) {
					option.title = {
						text: scope.title,
						left: 'center'
					};
				}

				// Configure based on chart type
				switch (scope.chartType ? scope.chartType.toLowerCase() : 'line') {
					case 'line':
						option = configureLineChart();
						break;
					case 'bar':
						option = configureBarChart();
						break;
					case 'pie':
						option = configurePieChart();
						break;
					case 'scatter':
						option = configureScatterChart();
						break;
					case 'radar':
						option = configureRadarChart();
						break;
					case 'gauge':
						option = configureGaugeChart();
						break;
					case 'funnel':
						option = configureFunnelChart();
						break;
					case 'sankey':
						option = configureSankeyChart();
						break;
					case 'heatmap':
						option = configureHeatmapChart();
						break;
					case 'treemap':
						option = configureTreemapChart();
						break;
					default:
						option = configureLineChart();
				}

				// Merge with custom options if provided
				if (scope.options) {
					option = angular.merge({}, option, scope.options);
				}

				// Apply custom configuration function if provided
				if (scope.customConfig && typeof scope.customConfig === 'function') {
					option = scope.customConfig(option, chart) || option;
				}

				chart.setOption(option);
			}

			function configureLineChart() {
				var xData = [];
				var seriesData = [];

				if (Array.isArray(scope.data)) {
					if (scope.data.length > 0 && typeof scope.data[0] === 'object') {
						// Data is array of objects
						var keys = Object.keys(scope.data[0]);
						xData = scope.data.map(function(item, index) {
							return item[keys[0]] !== undefined ? item[keys[0]] : index;
						});
						
						for (var i = 1; i < keys.length; i++) {
							seriesData.push({
								name: keys[i],
								type: 'line',
								data: scope.data.map(function(item) {
									return item[keys[i]];
								})
							});
						}
					} else {
						// Data is simple array
						xData = scope.data.map(function(item, index) { return index; });
						seriesData.push({
							name: 'Series',
							type: 'line',
							data: scope.data
						});
					}
				}

				return {
					title: scope.title ? { text: scope.title, left: 'center' } : undefined,
					tooltip: { trigger: 'axis' },
					legend: { data: seriesData.map(function(s) { return s.name; }) },
					xAxis: { type: 'category', data: xData },
					yAxis: { type: 'value' },
					series: seriesData
				};
			}

			function configureBarChart() {
				var option = configureLineChart();
				option.series.forEach(function(series) {
					series.type = 'bar';
				});
				return option;
			}

			function configurePieChart() {
				var pieData = [];

				if (Array.isArray(scope.data)) {
					if (scope.data.length > 0 && typeof scope.data[0] === 'object') {
						var keys = Object.keys(scope.data[0]);
						pieData = scope.data.map(function(item) {
							return {
								name: item[keys[0]],
								value: item[keys[1]] || 1
							};
						});
					} else {
						pieData = scope.data.map(function(value, index) {
							return {
								name: 'Item ' + index,
								value: value
							};
						});
					}
				}

				return {
					title: scope.title ? { text: scope.title, left: 'center' } : undefined,
					tooltip: { trigger: 'item' },
					legend: { orient: 'vertical', left: 'left' },
					series: [{
						name: 'Data',
						type: 'pie',
						radius: '50%',
						data: pieData,
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				};
			}

			function configureScatterChart() {
				var scatterData = [];

				if (Array.isArray(scope.data)) {
					if (scope.data.length > 0 && typeof scope.data[0] === 'object') {
						var keys = Object.keys(scope.data[0]);
						scatterData = scope.data.map(function(item) {
							return [item[keys[0]], item[keys[1]]];
						});
					}
				}

				return {
					title: scope.title ? { text: scope.title, left: 'center' } : undefined,
					tooltip: { trigger: 'item' },
					xAxis: { type: 'value' },
					yAxis: { type: 'value' },
					series: [{
						type: 'scatter',
						data: scatterData
					}]
				};
			}

			function configureRadarChart() {
				return {
					title: scope.title ? { text: scope.title, left: 'center' } : undefined,
					tooltip: {},
					radar: {
						indicator: []
					},
					series: [{
						type: 'radar',
						data: []
					}]
				};
			}

			function configureGaugeChart() {
				var value = 0;
				if (Array.isArray(scope.data) && scope.data.length > 0) {
					value = scope.data[0];
				} else if (typeof scope.data === 'number') {
					value = scope.data;
				}

				return {
					title: scope.title ? { text: scope.title, left: 'center' } : undefined,
					tooltip: { formatter: '{a} <br/>{b} : {c}%' },
					series: [{
						name: 'Gauge',
						type: 'gauge',
						data: [{ value: value, name: 'Progress' }]
					}]
				};
			}

			function configureFunnelChart() {
				var funnelData = [];

				if (Array.isArray(scope.data)) {
					if (scope.data.length > 0 && typeof scope.data[0] === 'object') {
						var keys = Object.keys(scope.data[0]);
						funnelData = scope.data.map(function(item) {
							return {
								name: item[keys[0]],
								value: item[keys[1]] || 1
							};
						});
					}
				}

				return {
					title: scope.title ? { text: scope.title, left: 'center' } : undefined,
					tooltip: { trigger: 'item' },
					series: [{
						type: 'funnel',
						left: '10%',
						width: '80%',
						data: funnelData
					}]
				};
			}

			function configureSankeyChart() {
				return {
					title: scope.title ? { text: scope.title, left: 'center' } : undefined,
					tooltip: { trigger: 'item' },
					series: [{
						type: 'sankey',
						data: scope.data.nodes || [],
						links: scope.data.links || []
					}]
				};
			}

			function configureHeatmapChart() {
				return {
					title: scope.title ? { text: scope.title, left: 'center' } : undefined,
					tooltip: { position: 'top' },
					grid: { height: '50%', top: '10%' },
					xAxis: { type: 'category', data: [] },
					yAxis: { type: 'category', data: [] },
					visualMap: {
						min: 0,
						max: 10,
						calculable: true,
						orient: 'horizontal',
						left: 'center',
						bottom: '15%'
					},
					series: [{
						type: 'heatmap',
						data: scope.data || []
					}]
				};
			}

			function configureTreemapChart() {
				return {
					title: scope.title ? { text: scope.title, left: 'center' } : undefined,
					tooltip: { trigger: 'item' },
					series: [{
						type: 'treemap',
						data: scope.data || []
					}]
				};
			}

			function bindEvents() {
				if (!chart) return;

				if (scope.onChartReady) {
					scope.$apply(function() {
						scope.onChartReady({ chart: chart });
					});
				}

				if (scope.onChartClick) {
					chart.on('click', function(params) {
						scope.$apply(function() {
							scope.onChartClick({ params: params, chart: chart });
						});
					});
				}

				if (scope.onChartDoubleClick) {
					chart.on('dblclick', function(params) {
						scope.$apply(function() {
							scope.onChartDoubleClick({ params: params, chart: chart });
						});
					});
				}

				if (scope.onChartMouseOver) {
					chart.on('mouseover', function(params) {
						scope.$apply(function() {
							scope.onChartMouseOver({ params: params, chart: chart });
						});
					});
				}

				if (scope.onChartMouseOut) {
					chart.on('mouseout', function(params) {
						scope.$apply(function() {
							scope.onChartMouseOut({ params: params, chart: chart });
						});
					});
				}
			}

			// Watch for data changes
			scope.$watch('data', function(newData) {
				if (newData && chart) {
					$timeout(function() {
						configureChart();
					});
				}
			}, true);

			// Watch for dimension changes
			scope.$watch('width', function(newWidth) {
				if (newWidth && chart) {
					chart.resize({ width: newWidth });
				}
			});

			scope.$watch('height', function(newHeight) {
				if (newHeight && chart) {
					chart.resize({ height: newHeight });
				}
			});

			// Public methods
			scope.resize = function() {
				if (chart) {
					chart.resize();
				}
			};

			scope.getChart = function() {
				return chart;
			};

			scope.setOption = function(option, notMerge, lazyUpdate) {
				if (chart) {
					chart.setOption(option, notMerge, lazyUpdate);
				}
			};

			scope.clear = function() {
				if (chart) {
					chart.clear();
				}
			};

			scope.dispose = function() {
				if (chart) {
					chart.dispose();
					chart = null;
				}
			};

			// Handle window resize
			angular.element($window).bind('resize', function() {
				if (chart) {
					$timeout(function() {
						chart.resize();
					}, 100);
				}
			});

			// Cleanup on scope destroy
			scope.$on('$destroy', function() {
				if (chart) {
					chart.dispose();
				}
			});
		}
	}

})();