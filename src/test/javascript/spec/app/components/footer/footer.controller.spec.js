'use strict';

describe('Controller Tests', function () {

    beforeEach(module('webApp'));

    describe('FooterController', function () {
        var $scope;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('FooterController as vm',
                {
                    $scope: $scope
                });
        }));

        it('should have title', function () {
            expect($scope.vm.title).toBe('Footer');
        });
    });
});
