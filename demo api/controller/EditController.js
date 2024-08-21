window.EditController = function($scope, $http, $routeParams, $location){
    $scope.title = "Đây là trang edit user"
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
    $scope.editUser = function () {

        //tạo 1 biến kiểm tra lỗi
        let flag = true;
        //tạo 1 biến để bật tắt lỗi bên giao diên người dùng
        //nếu là false sẽ không hiển thị lỗi
        $scope.kiemTra = {
            hoTen: false,
            email: false,
            ngaySinh: false,
            sdt: false
        }
        //kiểm tra lỗi
        if (!$scope.userInput || !$scope.userInput.hoTen) {
            flag = false;
            //nếu có lỗi thì bật lỗi lên
            $scope.kiemTra.hoTen = true;
        }
        if (!$scope.userInput || !$scope.userInput.email) {
            flag = false;
            $scope.kiemTra.email = true;
        }
        if (!$scope.userInput || !$scope.userInput.ngaySinh) {
            flag = false;
            $scope.kiemTra.ngaySinh = true;
        }
        if (!$scope.userInput || !$scope.userInput.sdt) {
            flag = false;
            $scope.kiemTra.sdt = true;
        }
        //check email
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let checkEmail = emailRegex.test($scope.userInput.email);
        //nếu email nhập sai định dạng => false
        //đúng định dạng => true
        if(!checkEmail){
            flag = false;
            $scope.kiemTra.email = true;
        }
        let phoneNumberRegex = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;
        let checkPhone = phoneNumberRegex.test($scope.userInput.sdt);
        if(!checkPhone){
            flag = false;
            $scope.kiemTra.sdt = true;
        }

        
        //nếu biến flag == true -> không có lỗi gì => tiến hành create user
        if (flag) {
            //alert("123")
            //lấy dữ liệu từ form nhập
            let newUser = {
                hoTen: $scope.userInput.hoTen,
                email: $scope.userInput.email,
                ngaySinh: $scope.userInput.ngaySinh,
                sdt: $scope.userInput.sdt
            }
            //console.log(newUser)
            //thêm dữ liệu
            $http.put(
                `${apiUsers}/${id}`, //link api
                newUser)// dữ liệu cần thêm
                .then(function (response) {
                    if (response.status == 200) {
                        //nếu thêm thành công quay trở về trang list
                        alert("Bạn đã sửa thành công")
                        $location.path('/list-user')
                    }
                });
        }




    }

}