(function () {
    'use strict';
    angular
        .module('componentes')
        .directive('graficoLineaSimple', graficoLineaSimple);

    graficoLineaSimple.$inject = ['$timeout'];

    function graficoLineaSimple($timeout) {
        //console.log('--- grafico_lineas_simple.js graficoLinea');
        var directive = {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'app/modules/shared/directives/front/graficos/graflinea/graflinea.html',
            scope: {
                idGrafico: '@',
                data: '=',
                categorias: '=',
                tituloyaxis: '=?',
                cambiarData: '&'
            },
            controller: graficoLineaSimpleController,
            controllerAs: 'vm',
            bindToController: true,
            link: link
        };

        return directive;
    }

    function graficoLineaSimpleController($timeout) {
        //console.log('--- grafico_lineas_simple.js graficoLineasSimpleController');
        var vm = this;
        vm.$onInit = onInit;
        //console.log('vm', vm);
        vm.meses_nombre = [];
        vm.options_graf = {
            chart: {
                type: 'spline',
                height: 350
            },
            credits: {
                enabled: false
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            legend: {
                align: 'center',
                verticalAlign: 'top',
                floating: false
            },
            tooltip: {
                shared: true,
                crosshairs: true,
                useHTML: true,
                formatter: function () {

                    var a = '';
                    var total = 0;
                    if (this.points) {
                        for (var i = 0; i < this.points.length; i++) {
                            total += this.points[i].y;
                        }
                        a += '<table class="table table-condensed table-tooltip">';
                        a += '<thead>';
                        a += '<tr>';
                        a += '<th colspan="2">';
                        a += this.x + '';
                        a += '</th>';
                        a += '</tr>';
                        a += '</thead>';
                        a += '<tbody>';
                        for (var i = 0; i < this.points.length; i++) {
                            a += '<tr>';
                            a += '<td style="padding-right:10px;">';
                            a += '<b style="font-weight:bold;color:' + this.points[i].color + ';">' + this.points[i].point.series.name + '</b>';
                            a += '</td>';
                            a += '<td class="numero">';
                            a += $.number(this.points[i].y, 0);
                            a += '</td>';
                            a += '</tr>';
                        }
                        a += '</tbody>';
                    }
                    a += '</table>';

                    return a;
                }
            },
            xAxis: {
                categories: []
            },
            yAxis: {
                title: {
                    text: ''
                }//,
//                labels: {
//                    formatter: function () {
//                        console.log(this.value); 
//                        if(this.value >= 1000)
//                            return this.value; 
//                    }
//                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
            },
            colors: ['#1d4080', '#ff7800', '#73c6a0', '#345593', '#ff9639', '#a3e0c4', '#516fa6', '#ffad64', '#d4f4e6', '#061f4e', '#9b4900', '#2e9063', '#0f2f69', '#c65d00', '#4ba97e'],
            series: []
        };

        //vm.funcion = funcion;



        function onInit() {
            //console.log('--------grafico_lineas_simple.js onInit');
            //$timeout(function () { Highcharts.chart(vm.idGrafico, vm.opt_evolucion); }, 500);
        }
    }

    function link(scope, el, attr, vm) {
        console.log('--- grafico_lineas_simple.js link');
        console.log('scope', scope);
        //vm.opt_evolucion.series = vm.data;
        var default_meses_nombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        vm.meses_nombre = scope.$parent.meses_nombre == undefined ? default_meses_nombre : scope.$parent.vm.meses_nombre;
        vm.tituloyaxis = vm.tituloyaxis == undefined ? 'MM$' : vm.tituloyaxis;

        scope.$watch('vm.data', function (v1, v2) {
            //mensaje('watch grafico_lineas_simple', 'info');
            //console.log('v1', v1);
            //console.log('v2', v2);
            if (v1 === v2) {
                //$timeout(function () { });
            } else {
                vm.options_graf.yAxis.title.text = vm.tituloyaxis;
                vm.options_graf.xAxis.categories = vm.categorias;
                vm.options_graf.series = v1;
                Highcharts.chart(vm.idGrafico, vm.options_graf);
                Highcharts.setOptions({
                    lang: {
                        numericSymbols: ['m', 'M']
                    }
                });
            }
        }, true);
    }
})();
