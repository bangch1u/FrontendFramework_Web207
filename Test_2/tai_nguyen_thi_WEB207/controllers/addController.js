window.addCtrl = function ($scope, $location, $http) {
    $scope.titleAdd = "Trang thêm nhân viên"
    const linkApi = "http://localhost:3000/nhanvien"
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
            $http.post(linkApi, newEmployee).then(function (response) {
                if (response.status == 201) {
                    alert("Thêm nhân viên thành công")
                    $location.path('/list-employee')
                }
            })
        }
    }
}