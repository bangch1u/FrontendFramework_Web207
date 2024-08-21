window.addCtrl = function ($scope, $http, $location) {
    $scope.titleAdd = "Đây là trang thêm bài viết"
    let linkApi = "http://localhost:3000/post"

    $scope.Add = function () {
        let flag = true;
        $scope.thongBao = {
            tieuDe: false,
            noiDung: false,
            tacGia : false,
            theLoai : false,
            ngayDang : false,
        }
        if (!$scope.inputValue || !$scope.inputValue.tieuDe) {
            flag = false
            $scope.thongBao.tieuDe = true
        }
        if (!$scope.inputValue || !$scope.inputValue.noiDung) {
            flag = false
            $scope.thongBao.noiDung = true
        }
        if (!$scope.inputValue || !$scope.inputValue.tacGia) {
            flag = false
            $scope.thongBao.tacGia = true
        }
        if (!$scope.inputValue || !$scope.inputValue.theLoai) {
            flag = false
            $scope.thongBao.theLoai = true
        }
        if (!$scope.inputValue || !$scope.inputValue.ngayDang) {
            flag = false
            $scope.thongBao.ngayDang = true
        }
        if (flag) {
            let newPost = {
                tieu_de: $scope.inputValue.tieuDe,
                noi_dung: $scope.inputValue.noiDung,
                tac_gia: $scope.inputValue.tacGia,
                the_loai: $scope.inputValue.theLoai,
                ngay_dang: $scope.inputValue.ngayDang

            }
            $http.post(linkApi, newPost).then(function(response){
                if(response.status == 201){
                    $location.path('/list-post')
                }
            })
        }
    }
}