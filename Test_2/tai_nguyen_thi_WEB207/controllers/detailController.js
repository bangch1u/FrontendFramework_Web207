window.detailCtrl = function($scope, $http, $routeParams){
    const linkApi = "http://localhost:3000/nhanvien"
    let id = $routeParams.id
   
    $http.get(`${linkApi}/${id}`).then(function (response) {
        if (response.status == 200) {
            $scope.inputEmploy = {
                id: response.data.id,
                hoten: response.data.ho_ten,
                sdt: response.data.sdt,
                email: response.data.email,
                chucvu: response.data.chuc_vu,
                ngaysinh: new Date(response.data.ngay_sinh)
            }
            console.log(response.data)
        }
    })
}