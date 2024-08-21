window.editCtrl= function($scope, $http, $location, $routeParams){
    let linkApi = "http://localhost:3000/post"
    
    let id = $routeParams.id
    $http.get(`${linkApi}/${id}`).then(function(response){
        if(response.status == 200){
            $scope.inputValue = {
                id: response.data.id,
                tieuDe: response.data.tieu_de,
                noiDung: response.data.noi_dung,
                tacGia: response.data.tac_gia,
                theLoai:response.data.the_loai,
                ngayDang: new Date(response.data.ngay_dang)
            }
        }
    })
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
                ngay_dang: new Date($scope.inputValue.ngayDang)

            }
            $http.put(`${linkApi}/${id}`, newPost).then(function(response){
                if(response.status == 200){
                    $location.path('/list-post')
                    alert("Sửa thành công")
                }
            })
        }
    }

}