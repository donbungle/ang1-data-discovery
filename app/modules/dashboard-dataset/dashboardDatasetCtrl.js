(function() {
	'use strict';

	angular
		.module('dashboardDataset')
		.controller('DashboardDatasetCtrl', DashboardDatasetCtrl);

	DashboardDatasetCtrl.$inject = ['$scope', '$http', 'DashboardDatasetService'];

	function DashboardDatasetCtrl($scope, $http, DashboardDatasetService) {
		var vm = this;

		vm.loading = true;
		vm.data = [];
		vm.processedData = {};
		vm.analytics = {};
		vm.chartConfigs = {};

		activate();

		function activate() {
			loadData();
		}

		function loadData() {
			DashboardDatasetService.loadCSVData().then(function(response) {
				vm.data = response.data;
				vm.loading = false;
				processData();
				calculateAnalytics();
				setupCharts();
			}).catch(function(error) {
				console.error('Error loading data:', error);
				vm.loading = false;
			});
		}

		function processData() {
			var data = vm.data;
			
			// Process data by categories
			vm.processedData.byCategory = processDataByCategory(data);
			vm.processedData.byMonth = processDataByMonth(data);
			vm.processedData.byQuarter = processDataByQuarter(data);
			vm.processedData.timeSeriesData = processTimeSeriesData(data);
		}

		function processDataByCategory(data) {
			var categories = {};
			data.forEach(function(item) {
				if (!categories[item.categoria]) {
					categories[item.categoria] = {
						total: 0,
						count: 0,
						values: []
					};
				}
				categories[item.categoria].total += parseFloat(item.valor);
				categories[item.categoria].count += 1;
				categories[item.categoria].values.push(parseFloat(item.valor));
			});

			// Convert to array format for charts
			return Object.keys(categories).map(function(key) {
				return {
					categoria: key,
					total: categories[key].total,
					count: categories[key].count,
					average: categories[key].total / categories[key].count,
					values: categories[key].values
				};
			});
		}

		function processDataByMonth(data) {
			var months = {};
			data.forEach(function(item) {
				var date = new Date(item.fecha);
				var monthKey = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');
				
				if (!months[monthKey]) {
					months[monthKey] = {
						month: monthKey,
						total: 0,
						count: 0,
						average: 0
					};
				}
				months[monthKey].total += parseFloat(item.valor);
				months[monthKey].count += 1;
			});

			// Calculate averages and convert to array
			return Object.keys(months).map(function(key) {
				var month = months[key];
				month.average = month.total / month.count;
				return month;
			}).sort(function(a, b) {
				return a.month.localeCompare(b.month);
			});
		}

		function processDataByQuarter(data) {
			var quarters = {};
			data.forEach(function(item) {
				var date = new Date(item.fecha);
				var year = date.getFullYear();
				var quarter = Math.ceil((date.getMonth() + 1) / 3);
				var quarterKey = year + '-Q' + quarter;
				
				if (!quarters[quarterKey]) {
					quarters[quarterKey] = {
						quarter: quarterKey,
						total: 0,
						count: 0,
						average: 0
					};
				}
				quarters[quarterKey].total += parseFloat(item.valor);
				quarters[quarterKey].count += 1;
			});

			// Calculate averages and convert to array
			return Object.keys(quarters).map(function(key) {
				var quarter = quarters[key];
				quarter.average = quarter.total / quarter.count;
				return quarter;
			}).sort(function(a, b) {
				return a.quarter.localeCompare(b.quarter);
			});
		}

		function processTimeSeriesData(data) {
			return data.map(function(item) {
				return {
					date: new Date(item.fecha),
					valor: parseFloat(item.valor),
					categoria: item.categoria
				};
			}).sort(function(a, b) {
				return a.date - b.date;
			});
		}

		function calculateAnalytics() {
			var data = vm.data;
			var values = data.map(function(item) { return parseFloat(item.valor); });
			
			vm.analytics = {
				totalRecords: data.length,
				totalValue: values.reduce(function(sum, val) { return sum + val; }, 0),
				averageValue: values.reduce(function(sum, val) { return sum + val; }, 0) / values.length,
				minValue: Math.min.apply(null, values),
				maxValue: Math.max.apply(null, values),
				standardDeviation: calculateStandardDeviation(values),
				categoryAnalysis: calculateCategoryAnalysis(),
				riskMetrics: calculateRiskMetrics()
			};
		}

		function calculateStandardDeviation(values) {
			var mean = values.reduce(function(sum, val) { return sum + val; }, 0) / values.length;
			var variance = values.reduce(function(sum, val) {
				return sum + Math.pow(val - mean, 2);
			}, 0) / values.length;
			return Math.sqrt(variance);
		}

		function calculateCategoryAnalysis() {
			var categories = vm.processedData.byCategory;
			return categories.map(function(cat) {
				var values = cat.values;
				var mean = cat.average;
				var variance = values.reduce(function(sum, val) {
					return sum + Math.pow(val - mean, 2);
				}, 0) / values.length;
				
				return {
					categoria: cat.categoria,
					total: cat.total,
					count: cat.count,
					average: cat.average,
					volatility: Math.sqrt(variance),
					riskScore: Math.sqrt(variance) / mean, // Coefficient of variation
					contribution: (cat.total / vm.analytics.totalValue) * 100
				};
			}).sort(function(a, b) {
				return b.total - a.total;
			});
		}

		function calculateRiskMetrics() {
			var timeSeriesData = vm.processedData.timeSeriesData;
			var returns = [];
			
			// Calculate daily returns
			for (var i = 1; i < timeSeriesData.length; i++) {
				var currentValue = timeSeriesData[i].valor;
				var previousValue = timeSeriesData[i-1].valor;
				if (previousValue !== 0) {
					returns.push((currentValue - previousValue) / previousValue);
				}
			}

			if (returns.length === 0) return {};

			var meanReturn = returns.reduce(function(sum, ret) { return sum + ret; }, 0) / returns.length;
			var volatility = calculateStandardDeviation(returns);
			
			return {
				averageReturn: meanReturn,
				volatility: volatility,
				sharpeRatio: volatility !== 0 ? meanReturn / volatility : 0,
				maxDrawdown: calculateMaxDrawdown(timeSeriesData),
				valueAtRisk95: calculateVaR(returns, 0.95),
				valueAtRisk99: calculateVaR(returns, 0.99)
			};
		}

		function calculateMaxDrawdown(timeSeriesData) {
			var maxDrawdown = 0;
			var peak = timeSeriesData[0].valor;
			
			for (var i = 1; i < timeSeriesData.length; i++) {
				var currentValue = timeSeriesData[i].valor;
				if (currentValue > peak) {
					peak = currentValue;
				}
				var drawdown = (peak - currentValue) / peak;
				if (drawdown > maxDrawdown) {
					maxDrawdown = drawdown;
				}
			}
			
			return maxDrawdown;
		}

		function calculateVaR(returns, confidence) {
			var sortedReturns = returns.slice().sort(function(a, b) { return a - b; });
			var index = Math.floor((1 - confidence) * sortedReturns.length);
			return sortedReturns[index] || 0;
		}

		function setupCharts() {
			vm.chartConfigs = {
				categoryPie: {
					data: vm.processedData.byCategory,
					dimensions: ['categoria'],
					groups: ['total'],
					width: 400,
					height: 300,
					title: 'Total por Categoría'
				},
				categoryBar: {
					data: vm.processedData.byCategory,
					dimensions: ['categoria'],
					groups: ['average'],
					width: 600,
					height: 300,
					margins: { top: 10, right: 50, bottom: 80, left: 50 },
					xAxisLabel: 'Categoría',
					yAxisLabel: 'Valor Promedio',
					title: 'Promedio por Categoría'
				},
				monthlyLine: {
					data: vm.processedData.byMonth,
					dimensions: ['month'],
					groups: ['total'],
					width: 800,
					height: 300,
					margins: { top: 10, right: 50, bottom: 50, left: 50 },
					xAxisLabel: 'Mes',
					yAxisLabel: 'Total',
					title: 'Evolución Mensual'
				},
				quarterlyBar: {
					data: vm.processedData.byQuarter,
					dimensions: ['quarter'],
					groups: ['total'],
					width: 600,
					height: 300,
					margins: { top: 10, right: 50, bottom: 50, left: 50 },
					xAxisLabel: 'Trimestre',
					yAxisLabel: 'Total',
					title: 'Evolución Trimestral'
				}
			};
		}

		// Public methods for chart interactions
		vm.refreshCharts = function() {
			$scope.$broadcast('refreshCharts');
		};

		vm.exportData = function(format) {
			DashboardDatasetService.exportData(vm.data, format);
		};
	}

})();