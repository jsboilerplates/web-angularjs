(function() {
    'use strict';

    angular
        .module('webApp')
        .controller('SampleController', SampleController);

    SampleController.$inject = ['$scope', '$state'];

    function SampleController ($scope, $state) {
        var vm = this;
        vm.title = 'Sample';
    }
})();
