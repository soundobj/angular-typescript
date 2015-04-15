/**
 * Created by dan on 15/04/15.
 */
/// <reference path="../typings/angularjs/angular.d.ts" />

class MyCtrl {
    public title = "My TypeScript App!";
    public message = "Much better";

    constructor(private $window: ng.IWindowService) {

    }

    public sayHello = () => {
        alert("bla");
    }
}

/// <reference path="MyCtrl.d.ts />
angular.module("App").controller("MyCtrl", MyCtrl);