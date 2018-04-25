'use strict';

describe('Controller Tests', function () {

    beforeEach(module('webApp'));

    describe('NavbarController', function () {
        var $scope;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('NavbarController as vm',
                {
                    $scope: $scope
                });
        }));

        it('should have title', function () {
            expect($scope.vm.title).toBe('Navbar');
        });
    });
});
