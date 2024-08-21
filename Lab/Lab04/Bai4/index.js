var myApp = angular.module("myApp", []);

        myApp.controller("myCtrl", function($scope){
            
            $scope.save = function(){
                var a = parseFloat($scope.inputValue.Score);
                if(a < 5){
                    $scope.inputValue.grade = "Rớt";
                } else {
                    $scope.inputValue.grade= "Đậu";
                }
            };
        });