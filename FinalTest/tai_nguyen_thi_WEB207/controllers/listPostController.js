window.listPostCtrl = function($scope, $http, $location){
    $scope.titleList = "Đây là trang danh sách bài viết"
    const linkApi = "http://localhost:3000/post";
    function getAll(){
        $http.get(linkApi).then(function(response){
            if(response.status == 200){
                $scope.listPost = response.data
                console.log(response)
            }
            else{
                console.log("không thể truy cập dữ liệu")
            }
        })
    }  
    getAll() 
    $scope.delete = function(id){
        let confirm = window.confirm("Bạn có muốn xóa bài viết này không!");
        if(confirm){
            $http.delete(`${linkApi}/${id}`).then(function(response){
                if(response == 200){
                    alert("Bạn đã xóa thành công")
                    getAll();
                }
            })
        }
    }
} 