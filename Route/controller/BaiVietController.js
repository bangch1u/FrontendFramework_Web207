window.BaiVietController = function($scope, $routeParams){
    $scope.title = 'Đây là bài viết';
    //$routeParams nó sẽ chữa toàn bộ giá trị mà ta đưa lên Url
    console.log($routeParams)
    console.log($routeParams.hoTen)
    console.log($routeParams.namSinh)
    console.log($routeParams.tuoi)

    $scope.myFunction = function(item){
        // lấy dữ liệu trong form
        console.log($scope.name)
        // let a = parseFloat($scope.inputValue.a)
        // let b = parseFloat($scope.inputValue.b)
        // $scope.tongAB =  a + b

        let tk = $scope.inputValue.tk
        let mk = $scope.inputValue.mk
        let login = 'bangntph30138'
        if(tk == login && mk == login){
            alert('Chào mừng tài khoản ' + tk)
        } 
        else{
            if(tk != login){
                $scope.inputValue.tk = 'lỗi'
            
            }
            else if(mk != login){
                $scope.inputValue.mk = 'lỗi'
            }
            
        }
        
    }
    //tạo 1 form nhập vào 2 số, sau khi nhập và ấn submit thì sẽ tính tổng 2 số và hiển thị ra màn hình
    //tạo 1 form đăng nhập tài khoản và mật khẩu là mã sinh viên. nếu nhập đúng tài khoản và mật khẩu thì hiển thị alert đăng nhập thành công
    // alert: "Chào mừng tài khoản 'tên tài khoản'"
    // nếu tài khoản mk sai thông báo đỏ dưới ô input
}