let myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/list-employee',{
        templateUrl: "views/list.html",
        controller: listCtrl
    })
    .when('/employee/add',{
        templateUrl:"views/add.html",
        controller:addCtrl
    })
    .when('/detail/employee/:id',{
        templateUrl:"views/detail.html",
        controller: detailCtrl
    })
    .when('/edit/employee/:id',{
        templateUrl: "views/edit.html",
        controller: editCtrl
    })
}])