(function () {
    'use strict';
    angular
        .module('componentes')
        .directive('elementSize', elementSize);

    elementSize.$inject = [];

    function elementSize() {
        //console.log('--- combo.js elementSize');
        var directive = {
            restrict: 'A',
            //require: 'ngModel',
            scope: {
                
            },
            controller: elementSizeController,
            controllerAs: 'vm',
            bindToController: true,
            link: link
        };

        return directive;
    }

    function elementSizeController() {
        //console.log('--- combo.js elementSizeController');
        var vm = this;
        vm.$onInit = onInit;
        //console.log('vm', vm);
        
        function onInit() {
            
        }
    }

    function link(scope, el, attr, vm) {
        //console.log('--- combo.js link');
        vm.$validators.elementSize = function (modelValue, viewValue) {
            return (viewValue != "0" && viewValue != undefined && viewValue != "" && viewValue != null);
        }
    }
})();
