window.editCtrl = function($scope, $http, $location, $routeParams){
    $scope.titleEdit = "Đây là trang edit"
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
        }
    })
    $scope.Add = function () {
        var flag = true;
        //notification 
        $scope.thongBao = {
            name: false,
            sdt: false,
            email: false,
            chucvu: false,
            ngaysinh: false
        }
        //check trống
        if (!$scope.inputEmploy || !$scope.inputEmploy.hoten) {
            flag = false,
            $scope.thongBao.name = true 
        }
        if(!$scope.inputEmploy || !$scope.inputEmploy.sdt || isNaN($scope.inputEmploy.sdt)){
            flag = false
            $scope.thongBao.sdt = true
        }
        if(!$scope.inputEmploy || !$scope.inputEmploy.email){
            flag = false
            $scope.thongBao.email = true
        }
        if(!$scope.inputEmploy || !$scope.inputEmploy.chucvu){
            flag = false
            $scope.thongBao.chucvu = true
        }
        if(!$scope.inputEmploy || !$scope.inputEmploy.ngaysinh){
            flag = false
            $scope.thongBao.ngaysinh = true
        }
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let checkEmail = emailRegex.test($scope.inputEmploy.email);
        if(!checkEmail){
            flag = false
            $scope.thongBao.email = true
        }
        var dateNow = new Date()
        if(dateNow < $scope.inputEmploy.ngaysinh){
            flag = false;
            $scope.thongBao.ngaysinh = true
        }
        
        if (flag) {

            var newEmployee = {
                ho_ten: $scope.inputEmploy.hoten,
                sdt: $scope.inputEmploy.sdt,
                email: $scope.inputEmploy.email,
                chuc_vu: $scope.inputEmploy.chucvu,
                ngay_sinh: $scope.inputEmploy.ngaysinh
            }
            $http.put(`${linkApi}/${id}`, newEmployee).then(function (response) {
                if (response.status == 200) {
                    alert("Sửa nhân viên thành công")
                    $location.path('/list-employee')
                }
            })
        }
    }
}