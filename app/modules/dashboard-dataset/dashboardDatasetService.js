(function() {
	'use strict';

	angular
		.module('dashboardDataset')
		.service('DashboardDatasetService', DashboardDatasetService);

	DashboardDatasetService.$inject = ['$http', '$q'];

	function DashboardDatasetService($http, $q) {
		var service = {
			loadCSVData: loadCSVData,
			exportData: exportData,
			parseCSVData: parseCSVData
		};

		return service;

		function loadCSVData() {
			return $http.get('dataset_valores_2024.csv')
				.then(function(response) {
					var csvData = response.data;
					var parsedData = parseCSVData(csvData);
					return { data: parsedData };
				})
				.catch(function(error) {
					console.error('Error loading CSV data:', error);
					return $q.reject(error);
				});
		}

		function parseCSVData(csvText) {
			var lines = csvText.split('\n');
			var headers = lines[0].split(',');
			var data = [];

			for (var i = 1; i < lines.length; i++) {
				if (lines[i].trim() === '') continue;
				
				var values = parseCSVLine(lines[i]);
				if (values.length === headers.length) {
					var row = {};
					for (var j = 0; j < headers.length; j++) {
						row[headers[j].trim()] = values[j].trim();
					}
					data.push(row);
				}
			}

			return data;
		}

		function parseCSVLine(line) {
			var result = [];
			var current = '';
			var inQuotes = false;

			for (var i = 0; i < line.length; i++) {
				var char = line[i];
				if (char === '"') {
					inQuotes = !inQuotes;
				} else if (char === ',' && !inQuotes) {
					result.push(current);
					current = '';
				} else {
					current += char;
				}
			}
			result.push(current);
			return result;
		}

		function exportData(data, format) {
			format = format || 'csv';
			
			switch (format.toLowerCase()) {
				case 'csv':
					exportToCSV(data);
					break;
				case 'json':
					exportToJSON(data);
					break;
				default:
					console.error('Unsupported export format:', format);
			}
		}

		function exportToCSV(data) {
			if (!data || data.length === 0) return;

			var headers = Object.keys(data[0]);
			var csvContent = headers.join(',') + '\n';

			data.forEach(function(row) {
				var values = headers.map(function(header) {
					var value = row[header] || '';
					// Escape commas and quotes
					if (value.toString().indexOf(',') !== -1 || value.toString().indexOf('"') !== -1) {
						value = '"' + value.toString().replace(/"/g, '""') + '"';
					}
					return value;
				});
				csvContent += values.join(',') + '\n';
			});

			downloadFile(csvContent, 'dashboard-dataset-export.csv', 'text/csv');
		}

		function exportToJSON(data) {
			var jsonContent = JSON.stringify(data, null, 2);
			downloadFile(jsonContent, 'dashboard-dataset-export.json', 'application/json');
		}

		function downloadFile(content, filename, contentType) {
			var blob = new Blob([content], { type: contentType });
			var url = window.URL.createObjectURL(blob);
			var a = document.createElement('a');
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}
	}

})();