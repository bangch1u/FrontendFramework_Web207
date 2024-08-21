//định nghĩa vùng sử dụng 
let vungSD = angular.module('buoi6', []);
//  Định nghĩa controller (viết tắt)
vungSD.controller("vtCtrl", function ($scope) {
    console.log("test viet tat");
    $scope.title = "Danh sach sinh vien";
    //khai báo mảng (Mảng đối tượng)
    $scope.listNym = [
        {
            hoTen: 'Nguyễn Thị 1',
            diaChi: 'Bắc Ninh',
            sdt: '0123456789',
            gioiTinh: 1,
            ngaySinh: new Date("2003-10-04"), //Ngày tháng năm phải được khởi tạo bằng 1 đối tượng 
            luong: 7000000
        },
        {
            hoTen: 'Nguyễn Thị E',
            diaChi: 'Hà NỘi',
            sdt: '0123456789',
            gioiTinh: 1,
            ngaySinh: new Date("2003-05-15"), //Ngày tháng năm phải được khởi tạo bằng 1 đối tượng 
            luong: 7500000
        },
        {
            hoTen: 'Nguyễn Thị C',
            diaChi: 'Hà NỘi',
            sdt: '0123456789',
            gioiTinh: 0,
            ngaySinh: new Date("2003-07-14"), //Ngày tháng năm phải được khởi tạo bằng 1 đối tượng 
            luong: 500000
        }
    ];
    // khi sử dụng bộ lọc(filter) với ng-repeat: angularjs sẽ áp dụng bộ lọc này 
    // cho mỗi phần tử trong mảng được cung cấp và chỉ hiện các phần tử mà bộ lọc trả về 'true'
    //khi bộ lọc trả về false: phần tử sẽ không được hiển thị
    $scope.customFilter = function (value) {
        if ($scope.timKiem == null) {
            return true;// khi hàm bộ lọc (filter function) trả về true nghĩa là không có bộ lọc được áp dụng và tất cả mảng sẽ hiển thị do các phần tử khi so sánh trong filter đểu == true nên đều được hiện thị
        }
        var search = $scope.timKiem.toLowerCase();
        var gender = value.gioiTinh ? "nữ" : "nam";
        return (
            value.hoTen.toLowerCase().includes(search) || //includes() phương thức dùng để so sánh trong js. check xem chuỗi searchQuery có tồn tại trong hoTen không
            value.diaChi.toLowerCase().includes(search) ||
            value.sdt.toLowerCase().includes(search) ||
            gender.includes(search) ||
            value.ngaySinh.toLocaleDateString("en-GB").includes(search) || //en-GB là định dạng ngày tgabgs, số và các dữ liệu theo phong cách Anh đ/MM/yyyy
            value.luong.toString().includes(search)
        );
    };


});
