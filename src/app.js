import angular from 'angular';
class App { // class App
    constructor(){this.info = "as";}
}
angular.module("myApp", []) //creates a 'myApp' module
    .controller("App", App);


