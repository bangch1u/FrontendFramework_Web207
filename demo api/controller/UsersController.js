window.UsersController = function ($scope, $http, $location) {
    $scope.listTitle = "Danh sách người dùng";
    $scope.addTitle = "Thêm người dùng"
    // Link API
    const apiUsers = 'http://localhost:3000/users';

    // Lấy dữ liệu từ API
    function getAll() {
        // Call API lấy ra dữ liệu 
        // $http dùng để truy cập đến phương thức HTTP để call API 
        // Phương thức HTTP: GET, POST, PUT, DELETE
        $http.get(apiUsers).then(function (response) {

            console.log(response.data);

            if (response.status == 200) {
                $scope.listUser = response.data;
            } else {
                alert("Không thể truy cập dữ liệu")
            }
        });
    }
    getAll();

    //hàm xóa người dungf
    $scope.deleteUser = function (id) {
        let confirm = window.confirm("Bạn có muốn xóa không");
        if (confirm) {
            // nếu ấn OK  thì chạy tiếp vào đây

            //call api để xóa dữ liệu 
            $http.delete(
                //http://localhost:3000/users/id
                apiUsers + '/' + id
                //`${apiUsers}/${id}`
            ).then(function (response) {
                //console.log(response);
                if (response.status == 200) {

                    alert("Bạn đã xóa thành công")
                    getAll();
                }
            });
        }
    }

    //xử lý thêm dữ liệu 
    $scope.createUser = function () {

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
            $http.post(
                apiUsers, //link api
                newUser)// dữ liệu cần thêm
                .then(function (response) {
                    if (response.status == 201) {
                        //nếu thêm thành công quay trở về trang list
                        alert("Bạn đã thêm thành công")
                        $location.path('/list-user')
                    }
                });
        }




    }
}
