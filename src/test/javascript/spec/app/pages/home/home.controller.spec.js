'use strict';

describe('Controller Tests', function () {

    beforeEach(module('webApp'));

    describe('HomeController', function () {
        var $scope;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('HomeController as vm',
                {
                    $scope: $scope
                });
        }));

        it('should have title', function () {
            expect($scope.vm.title).toBe('Home Page');
        });
    });
});
