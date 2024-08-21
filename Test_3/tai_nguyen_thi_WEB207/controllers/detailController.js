window.detailCtrl = function($scope, $http, $routeParams){
    $scope.titlePost = "Đây là trang danh sách bài viết"
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
}