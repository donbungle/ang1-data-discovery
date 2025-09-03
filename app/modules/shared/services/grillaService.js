(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:grillaService
	* @description
	* # grillaService
	* Service of the app
	*/

	angular.module('componentes')
	.factory('grillaService', grillaService);

	grillaService.$inject = ['$http', '$q'];

	function grillaService($http, $q) {
		var opt_grilla = {
			height:"400px",
			layout:"fitColumns",
			//ajaxURL:"/exampledata/ajaxprogressive",
			headerVisible:false,
			progressiveLoad:"scroll",
			paginationSize:20,
			placeholder:"Sin datos",
			dependencies:{
				DateTime:luxon.DateTime,
			},
			persistence:{
				sort:true,
				filter:true,
				columns:true,
			},
			persistenceID:"examplePerststance",
			//enable range selection
			selectableRange:1,
			selectableRangeColumns:true,
			selectableRangeRows:true,
			selectableRangeClearCells:true,
			//change edit trigger mode to make cell navigation smoother
			editTriggerEvent:"dblclick",

			//configure clipboard to allow copy and paste of range format data
			clipboard:true,
			clipboardCopyStyled:false,
			clipboardCopyConfig:{
				rowHeaders:false,
				columnHeaders:false,
			},
			clipboardCopyRowRange:"range",
			clipboardPasteParser:"range",
			clipboardPasteAction:"range",

			//rowHeader:{
			//	resizable: false, 
			//	frozen: true, 
			//	width:40, 
			//	hozAlign:"center", 
			//	formatter: "rownum", 
			//	cssClass:"range-header-col bg-rojo", 
			//	editor:true
			//},

			rowHeader:{
				width:40,
				headerSort:false, 
				resizable: false, 
				frozen:true, 
				headerHozAlign:"center", 
				hozAlign:"center", 
				formatter:"rowSelection", 
				titleFormatter:"rowSelection", cellClick:function(e, cell){
					cell.getRow().toggleSelect();
				}
			},

			//setup cells to work as a spreadsheet
			columnDefaults:{
				//headerSort:false,
				//headerHozAlign:"center",
				//editor:"input",
				resizable:false,
				//width:100,
			},
			
			columns:[
				{title:"Nombre", field:"firstName", sorter:"string"},
				{title:"Apellido", field:"lastName", sorter:"string"},
				//{title:"Line Chart", field:"line", width:160, formatter:grillaService.chartFormatter, formatterParams:{type:"line"}},
				{title:"Gender", field:"gender", hozAlign:"center", sorter:"string", width:100},
				{title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100}, //, bottomCalc:"avg"
				{title:"Empresa", field:"company", sorter:"string"},
				{title:"Fecha ingreso", field:"creation_date", width:120, formatter:"datetime", hozAlign:"center", formatterParams:{
					inputFormat:"yyyy-MM-dd",
					outputFormat:"dd/MM/yyyy",
					invalidPlaceholder:"(fecha no válida)",
					timezone:"America/Santiago",
				}},
				{title:"Empleado", field:"employed", formatter:"tickCross", width:120, hozAlign:"center", sorter:"boolean"},
			],
		};

		function get_opt_grilla(){
			return opt_grilla;
		}

		var service = {
            get_opt_grilla: get_opt_grilla,
        };
        return service;

	}

})();
