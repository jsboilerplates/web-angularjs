(function() {
    'use strict';

    angular
        .module('webApp', [
            'ngResource',
            'ngAria',
            'ui.router'
        ])
        .run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
