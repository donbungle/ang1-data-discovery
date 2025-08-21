(function() {
	'use strict';

	angular
		.module('componentes')
		.directive('dcChart', dcChart);

	dcChart.$inject = ['$timeout', '$window'];

	function dcChart($timeout, $window) {
		var directive = {
			restrict: 'E',
			scope: {
				chartType: '@',
				data: '=',
				dimensions: '=?',
				groups: '=?',
				width: '=?',
				height: '=?',
				margins: '=?',
				colors: '=?',
				xAxisLabel: '@?',
				yAxisLabel: '@?',
				title: '@?',
				elasticX: '=?',
				elasticY: '=?',
				brushOn: '=?',
				ordinalColors: '=?',
				keyAccessor: '&?',
				valueAccessor: '&?',
				colorAccessor: '&?',
				radiusAccessor: '&?',
				onFiltered: '&?',
				onRenderlet: '&?',
				customConfig: '=?'
			},
			template: '<div class="dc-chart"></div>',
			link: link
		};

		return directive;

		function link(scope, element, attrs) {
			var chartElement = element[0].firstElementChild;
			var chart;
			var crossfilterData;
			var dimension;
			var group;

			if (!$window.dc) {
				console.error('DC.js library is not loaded');
				return;
			}

			if (!$window.d3) {
				console.error('D3.js library is not loaded (required by DC.js)');
				return;
			}

			if (!$window.crossfilter) {
				console.error('Crossfilter library is not loaded (required by DC.js)');
				return;
			}

			$timeout(function() {
				initializeChart();
			});

			function initializeChart() {
				if (!scope.data || !scope.chartType) {
					console.error('dcChart: data and chartType are required');
					return;
				}

				createCrossfilterData();
				createChart();
				configureChart();
				renderChart();
			}

			function createCrossfilterData() {
				crossfilterData = $window.crossfilter(scope.data);
				
				if (scope.dimensions && scope.dimensions.length > 0) {
					dimension = crossfilterData.dimension(scope.dimensions[0]);
				} else {
					dimension = crossfilterData.dimension(function(d, i) { return i; });
				}

				if (scope.groups && scope.groups.length > 0) {
					group = dimension.group().reduceSum(function(d) {
						return d[scope.groups[0]] || 1;
					});
				} else {
					group = dimension.group();
				}
			}

			function createChart() {
				var chartId = 'chart-' + Math.random().toString(36).substr(2, 9);
				chartElement.id = chartId;

				switch (scope.chartType.toLowerCase()) {
					case 'bar':
					case 'barchart':
						chart = $window.dc.barChart('#' + chartId);
						break;
					case 'line':
					case 'linechart':
						chart = $window.dc.lineChart('#' + chartId);
						break;
					case 'pie':
					case 'piechart':
						chart = $window.dc.pieChart('#' + chartId);
						break;
					case 'bubble':
					case 'bubblechart':
						chart = $window.dc.bubbleChart('#' + chartId);
						break;
					case 'scatter':
					case 'scatterplot':
						chart = $window.dc.scatterPlot('#' + chartId);
						break;
					case 'row':
					case 'rowchart':
						chart = $window.dc.rowChart('#' + chartId);
						break;
					case 'composite':
						chart = $window.dc.compositeChart('#' + chartId);
						break;
					case 'datachart':
					case 'datatable':
						chart = $window.dc.dataTable('#' + chartId);
						break;
					case 'datacount':
						chart = $window.dc.dataCount('#' + chartId);
						break;
					default:
						console.error('Unknown chart type:', scope.chartType);
						return;
				}

				chart.dimension(dimension).group(group);
			}

			function configureChart() {
				if (!chart) return;

				if (scope.width) chart.width(scope.width);
				if (scope.height) chart.height(scope.height);
				
				if (scope.margins) {
					chart.margins(scope.margins);
				}

				// Configure scales for charts that need them
				configureScales();

				if (scope.colors) {
					chart.colors(scope.colors);
				}

				if (scope.ordinalColors) {
					chart.ordinalColors(scope.ordinalColors);
				}

				if (scope.title) {
					chart.title(function(d) { 
						return scope.title + ': ' + d.key + ' (' + d.value + ')'; 
					});
				}

				if (scope.xAxisLabel && chart.xAxisLabel) {
					chart.xAxisLabel(scope.xAxisLabel);
				}

				if (scope.yAxisLabel && chart.yAxisLabel) {
					chart.yAxisLabel(scope.yAxisLabel);
				}

				if (scope.elasticX && chart.elasticX) {
					chart.elasticX(scope.elasticX);
				}

				if (scope.elasticY && chart.elasticY) {
					chart.elasticY(scope.elasticY);
				}

				if (typeof scope.brushOn !== 'undefined' && chart.brushOn) {
					chart.brushOn(scope.brushOn);
				}

				if (scope.keyAccessor && chart.keyAccessor) {
					chart.keyAccessor(scope.keyAccessor());
				}

				if (scope.valueAccessor && chart.valueAccessor) {
					chart.valueAccessor(scope.valueAccessor());
				}

				if (scope.colorAccessor && chart.colorAccessor) {
					chart.colorAccessor(scope.colorAccessor());
				}

				if (scope.radiusAccessor && chart.radiusAccessor) {
					chart.radiusAccessor(scope.radiusAccessor());
				}

				if (scope.onFiltered) {
					chart.on('filtered', function(chart, filter) {
						scope.$apply(function() {
							scope.onFiltered({ chart: chart, filter: filter });
						});
					});
				}

				if (scope.onRenderlet) {
					chart.on('renderlet', function(chart) {
						scope.$apply(function() {
							scope.onRenderlet({ chart: chart });
						});
					});
				}

				if (scope.customConfig && typeof scope.customConfig === 'function') {
					scope.customConfig(chart);
				}
			}

			function configureScales() {
				if (!chart) return;

				var chartType = scope.chartType.toLowerCase();
				
				// Configure scales for charts that require them
				if (chartType === 'bar' || chartType === 'barchart') {
					// Get unique values from dimension for ordinal scale
					var uniqueValues = [];
					if (scope.data && scope.dimensions && scope.dimensions.length > 0) {
						var dimensionKey = scope.dimensions[0];
						scope.data.forEach(function(d) {
							if (uniqueValues.indexOf(d[dimensionKey]) === -1) {
								uniqueValues.push(d[dimensionKey]);
							}
						});
					}
					
					// Set up ordinal scale
					var xScale = $window.d3.scaleOrdinal()
						.domain(uniqueValues);
					
					chart.x(xScale);
					chart.xUnits($window.dc.units.ordinal);
				} else if (chartType === 'line' || chartType === 'linechart') {
					// For line charts, typically use time or linear scales
					if (scope.data && scope.dimensions && scope.dimensions.length > 0) {
						var dimensionKey = scope.dimensions[0];
						var values = scope.data.map(function(d) { return d[dimensionKey]; });
						
						// Try to detect if it's date data
						var isDate = values.some(function(v) {
							return v instanceof Date || !isNaN(Date.parse(v));
						});
						
						if (isDate) {
							var extent = $window.d3.extent(values, function(d) {
								return d instanceof Date ? d : new Date(d);
							});
							chart.x($window.d3.scaleTime().domain(extent));
						} else if (typeof values[0] === 'number') {
							var extent = $window.d3.extent(values);
							chart.x($window.d3.scaleLinear().domain(extent));
						} else {
							// Fall back to ordinal scale
							var uniqueValues = values.filter(function(v, i, arr) {
								return arr.indexOf(v) === i;
							});
							chart.x($window.d3.scaleOrdinal().domain(uniqueValues));
							chart.xUnits($window.dc.units.ordinal);
						}
					}
				}
			}

			function renderChart() {
				if (chart) {
					chart.render();
				}
			}

			scope.$watch('data', function(newData) {
				if (newData && chart) {
					crossfilterData.remove();
					crossfilterData = $window.crossfilter(newData);
					dimension = crossfilterData.dimension(scope.dimensions ? scope.dimensions[0] : function(d, i) { return i; });
					group = scope.groups ? dimension.group().reduceSum(function(d) { return d[scope.groups[0]] || 1; }) : dimension.group();
					chart.dimension(dimension).group(group);
					chart.redraw();
				}
			}, true);

			scope.$watch('width', function(newWidth) {
				if (newWidth && chart && chart.width) {
					chart.width(newWidth);
					chart.redraw();
				}
			});

			scope.$watch('height', function(newHeight) {
				if (newHeight && chart && chart.height) {
					chart.height(newHeight);
					chart.redraw();
				}
			});

			scope.redraw = function() {
				if (chart) {
					chart.redraw();
				}
			};

			scope.render = function() {
				if (chart) {
					chart.render();
				}
			};

			scope.filterAll = function() {
				if (chart) {
					chart.filterAll();
					$window.dc.redrawAll();
				}
			};

			scope.filter = function(filterValue) {
				if (chart) {
					chart.filter(filterValue);
					$window.dc.redrawAll();
				}
			};

			scope.getFilters = function() {
				return chart ? chart.filters() : [];
			};

			scope.getChart = function() {
				return chart;
			};

			scope.getDimension = function() {
				return dimension;
			};

			scope.getGroup = function() {
				return group;
			};

			scope.$on('$destroy', function() {
				if (chart) {
					try {
						$window.dc.chartRegistry.deregister(chart);
					} catch (e) {
						console.warn('Error deregistering chart:', e);
					}
				}
				if (crossfilterData) {
					crossfilterData.remove();
				}
			});

			angular.element($window).bind('resize', function() {
				if (chart) {
					$timeout(function() {
						chart.redraw();
					}, 100);
				}
			});
		}
	}

})();