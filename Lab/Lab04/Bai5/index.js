var myApp = angular.module("myApp", [])

myApp.controller("myCtrl", function($scope){
    $scope.calculate = function(){
        
        var a = parseFloat($scope.inputValue.width);
        var b = parseFloat($scope.inputValue.length);
      
        $scope.inputValue.acreage = a * b;
        $scope.inputValue.perimeter = (a+b)*2;
    }
})