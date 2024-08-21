window.postCtrl = function($scope, $http){
    $scope.titlePost = "Đây là trang danh sách bài viết"
    let linkApi = "http://localhost:3000/post"
    function getAll(){
        $http.get(linkApi).then(function(response){
            if(response.status == 200){
                $scope.listPost = response.data
                console.log(response.data)
            }
        })
    }
    getAll()
    $scope.deletePost = function(id){
        let confirm = window.confirm("Bạn có muons xóa không")
        if(confirm){
            $http.delete(`${linkApi}/${id}`).then(function(response){
                if(response.status == 200){
                    alert("Bạn đã xóa thành công")
                    getAll()
                }
            })
        }
    }
}