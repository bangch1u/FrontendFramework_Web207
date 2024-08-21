let myApp = angular.module('myApp', ['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider  
        .when('/list-post',{
            templateUrl: "views/list.html",
            controller: postCtrl
        })
        .when('/post/add',{
            templateUrl:"views/add.html",
            controller: addCtrl
        })
        .when('/detail/post/:id',{
            templateUrl: "views/details.html",
            controller: detailCtrl
        })
        .when('/edit/post/:id',{
            templateUrl: "views/edit.html",
            controller: editCtrl
        })
}])