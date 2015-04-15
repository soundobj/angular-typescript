describe("MyCtrl", function() {

    beforeEach(module("App"));

    var scope, controller;

    beforeEach(angular.mock.inject(
        function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller("MyCtrl as myCtrl", {$scope: scope});
        }
    ));

    it("should set title to 'My TypeScript App!'", function() {
        expect(controller.title).toEqual('My TypeScript App!');
    });

    it("should set 'myCtrl on the $scope", function () {
        expect(scope.myCtrl).toEqual(controller);
    });
});