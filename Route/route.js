// Định nghĩa module
let myApp = angular.module('myApp', ['ngRoute']);


// Định nghĩa các router
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/trang-chu', { // tên của Router
            templateUrl: 'view/home.html', // đường dẫn đến view muốn hiển thị
            controller: HomeController 
        })
        .when('/bai-viet/:hoTen/:namSinh/:tuoi', 
        {
            templateUrl: 'view/baiViet.html',
            controller: BaiVietController
        })
        .otherwise({
            redirectTo: '/trang-chu'
        });
}]);
