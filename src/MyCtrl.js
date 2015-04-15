/**
 * Created by dan on 15/04/15.
 */
/// <reference path="../typings/angularjs/angular.d.ts" />
var MyCtrl = (function () {
    function MyCtrl($window) {
        this.$window = $window;
        this.title = "My TypeScript App!";
        this.message = "Much better";
        this.sayHello = function () {
            alert("bla");
        };
    }
    return MyCtrl;
})();
/// <reference path="MyCtrl.d.ts />
angular.module("App").controller("MyCtrl", MyCtrl);
//# sourceMappingURL=MyCtrl.js.map