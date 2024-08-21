window.listCtrl = function($scope, $http, $location){
    $scope.titleList = "Đây là trang danh sách nhân viên"
    const linkApi = "http://localhost:3000/nhanvien"

    function getAll(){
        $http.get(linkApi).then(function(response){
            if(response.status == 200){
                $scope.listEmployee = response.data
                console.log(response.data)
            }
        })
    }
    getAll();
    $scope.DeleteEmploy = function(id){
        let confirm = window.confirm("Bạn có muốn xóa nhân viên này không!")
        if(confirm){
            $http.delete(`${linkApi}/${id}`).then(function(response){
                if(response.status == 200){
                    alert("Xóa thành công")
                    getAll()
                }
            })
        }
    }
}