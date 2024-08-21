let myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/list-post',{
            templateUrl:'views/listPost.html',
            controller: listPostCtrl
        })
        .when('/add-post',{
            templateUrl: 'views/addPost.html',
            controller: addCtrl
        })
        .when('/detail-post/:id',{
            templateUrl:'views/detailPost.html',
            controller:detailCtrl
        })
        .when('/edit-post/:id',{
            templateUrl:'views/editPost.html',
            controller:editCtrl
        })
}])