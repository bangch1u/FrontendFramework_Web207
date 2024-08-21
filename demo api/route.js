// Định nghĩa module
let myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/list-user', {
            templateUrl: 'view/listUser.html',
            controller: UsersController
        })
        .when('/add-user',{
            templateUrl: 'view/addUser.html',
            controller: AddController
        })
        .when('/edit-user/:id',{
            templateUrl: 'view/editUser.html',
            controller: EditController
        })
        .when('/detail-user/:id',{
            templateUrl: 'view/detailUser.html',
            controller: DetailsController
        })
        .otherwise({
            redirectTo: '/trang-chu'
        });
}]);
