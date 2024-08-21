window.DetailsController = function($scope, $http, $routeParams){
    $scope.detailTitle = " Đây là trang Details User"
    let id = $routeParams.id
    // Link API
    const apiUsers = 'http://localhost:3000/users';

    //call api get to data in user
    $http.get(`${apiUsers}/${id}`).then(function(response){
        console.log(response)
        if(response.status == 200){
            console.log(response.data)
            $scope.userInput = {
                id:response.data.id,
                hoTen: response.data.hoTen,
                email: response.data.email,
                ngaySinh: new Date(response.data.ngaySinh),
                sdt: response.data.sdt
            }
        }
    });
}