$(document).ready(function () {
    var i= 1;
    $("#btnContact").click(function () {
        $("#modalContact").modal();
    });
    $("#btnLogIn").click(function () {
        $("#logInModal").modal();
    });
    $("#btnRegister").click(function () {
        $("#registerModal").modal();
    });
    $("#btndathang").click(function () {
        $("#nhanhang").modal();
    })
    // thông tin liên hệ
    function kiemTraSDT() {
        var re =/^(0){1}[0-9]{9}$/;
        if ($("#txtPhone").val()=="") {
            $("#tbPhone").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPhone").val())) {
            $("#tbPhone").html("* Nhập số phone theo mẫu : 0XXXXXXXXX");
            return false;
        }
        $("#txtPhone").html("*");
        return true;
    }
    $("#txtPhone").blur(kiemTraSDT);
    function kiemTraName() {
        var re = /[^[A-Z]{1}[a-z]]*$/;
        if ($("#txtName").val()=="") {
            $("#tbName").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtName").val())) {
            $("#tbName").html("* Nhập tên theo mẫu : nguyen van a");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(kiemTraName);
    function kiemTraCompany() {
        var re = /[^[A-Z]{1}[a-z]]*$/;
        if ($("#txtCompany").val()=="") {
            $("#tbCompany").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtCompany").val())) {
            $("#tbCompany").html("* Nhập tên theo mẫu : Company Name");
            return false;
        }
        $("#tbCompany").html("*");
        return true;
    }
    $("#txtCompany").blur(kiemTraCompany);
   
    function kiemTraEmail() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ($("#txtEmail").val()=="") {
            $("#tbEmail").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtEmail").val())) {
            $("#tbEmail").html("* Nhập Email theo mẫu : xxxxxx@gmail.com");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(kiemTraEmail);
    $("#btnSave").click(function () {
        if(kiemTraUserName()==false||kiemTraName()==false||kiemTraCompany()==false||kiemTraEmail()==false)
        alert("vui lòng điền đầy đủ thông tin");
    })
    // đăng nhập
    function kiemTraUserName() {
        var re = /^[a-z0-9_-]{3,16}$/;
        if ($("#txtUserName").val()=="") {
            $("#tbUserName").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtUserName").val())) {
            $("#tbUserName").html("* Tên đăng nhập không hợp lệ");
            return false;
        }
        $("#tbUserName").html("*");
        return true;
    }
    $("#txtUserName").blur(kiemTraUserName);

    function kiemTraPass() {
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ($("#txtPass").val()=="") {
            $("#tbPass").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPass").val())) {
            $("#tbPass").html("* Mật khẩu phải có chữ và số");
            return false;
        }
        $("#tbPass").html("*");
        return true;
    }
    $("#txtPass").blur(kiemTraPass);
    $("#btndangnhap").click(function () {
        if(kiemTraSDT()==false||kiemTraPass()==false)
        alert("thông tin tài khoản hoặc mật khẩu không đúng");
    })
    // kiểm tra đăng ký
    function kiemTraUserNameRegister() {
        var re = /^[a-z]\w*/;
        if ($("#txtUserNameRegister").val()=="") {
            $("#tbUserNameRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtUserNameRegister").val())) {
            $("#tbUserNameRegister").html("* Tên đăng nhập không hợp lệ");
            return false;
        }
        $("#tbUserNameRegister").html("*");
        return true;
    }
    $("#txtUserNameRegister").blur(kiemTraUserNameRegister);
    function kiemTraPassRegister() {
        var re = /((?=.*\d)(?=.*[A-Z])(?=.*\W).{6,})$/;
        if ($("#txtPassRegister").val()=="") {
            $("#tbPassRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPassRegister").val())) {
            $("#tbPassRegister").html("* Mật khẩu ít nhất 6 kí tự phải có ít nhất 1 chữ,số và kí tự đặc biệt");
            return false;
        }
        $("#tbPassRegister").html("*");
        return true;
    }
    $("#txtPassRegister").blur(kiemTraPassRegister);

    function KiemTraXacNhanPassWord()
    {
        if($("#txtPassRegister").val() != $("#txtPassConfirm").val()){
            $("#tbPassConfirm").html(" *phải giống ô mật khẩu");
            return false;
        }
        else{
            $("#tbPassConfirm").html("*");
            return true;
        }
    }
        $("txtnpw").blur(KiemTraXacNhanPassWord);

    function kiemTraEmailRegister() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ($("#txtEmailRegister").val()=="") {
            $("#tbEmailRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtEmailRegister").val())) {
            $("#tbEmailRegister").html("* Nhập Email theo mẫu : xxxxxx@gmail.com");
            return false;
        }
        $("#tbEmailRegister").html("*");
        return true;
    }
    $("#txtEmailRegister").blur(kiemTraEmailRegister);
    function kiemTraPhoneRegister() {
        var re =/^(0){1}[0-9]{9}$/;
        if ($("#txtPhoneRegister").val()=="") {
            $("#tbPhoneRegister").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtPhoneRegister").val())) {
            $("#tbPhoneRegister").html("* Nhập số phone theo mẫu : 0XXXXXXXXX");
            return false;
        }
        $("#txtPhoneRegister").html("*");
        return true;
    }
    $("#txtPhoneRegister").blur(kiemTraPhoneRegister);
    $("#btndangky").click(function () {
        if(kiemTraUserNameRegister()==false||kiemTraPassRegister()==false||kiemTraEmailRegister()==false||kiemTraPhoneRegister()==false)
        {
            alert("bạn chưa nhập đủ thông tin");
        }
        else{
         var tt1= $("#txtUserNameRegister").val();
         var tt2 = $("#txtPassRegister").val();
         var tt3 = $("#txtPhoneRegister").val();
         var tt4 = $("#txtEmailRegister").val();
         var w = open("home.html","Ketqua");
         w.document.write("<B>THONG TIN Đăng ký</b><br>");
         w.document.write("username:"+tt1+"<br>");
         w.document.write("password:"+tt2+"<br>");
         w.document.write("số điện thoại:"+tt3+"<br>");
         w.document.write("Email đăng ký:"+tt4+"<br>");
     }
    })
    // thông tin đặt hàng
    function kiemtraten() {
        let re = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#txthoten").val()=="")
        {
        $("#tbhoten").html("vui lòng nhập họ tên");
        return false
        }
        if(!re.test($("#txthoten").val())){
        $("#tbhoten").html("mỗi chữ đầu dòng sau dấu cách phải viết hoa");
        return false
        }
        $("#tbhoten").html("*");
        return true;
    }
    $("#txthoten").blur(kiemtraten);
    function kiemtragamil() {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if ($("#txtgmail").val()=="") {
            $("#tbgmail").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtgmail").val())) {
            $("#tbgmail").html("* Nhập Email theo mẫu : xxxxxx@gmail.com");
            return false;
        }
        $("#tbgmail").html("*");
        return true;
    }
    $("#txtgmail").blur(kiemtragamil);
    function kiemtradt() {
        var re =/^(0){1}[0-9]{9}$/;
        if ($("#txtsodienthoai").val()=="") {
            $("#tbsodienthoai").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtsodienthoai").val())) {
            $("#tbsodienthoai").html("* Nhập số phone theo mẫu : 0XXXXXXXXX");
            return false;
        }
        $("#tbsodienthoai").html("*");
        return true;
    }
    $("#txtsodienthoai").blur(kiemtradt);
    function kiemtradiachi() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if($("#txtdiachi").val() == ""){
            $("#tbdiachi").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#txtdiachi").val())){
            $("#tbdiachi").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        else{
            $("#tbdiachi").html("*");
        return true;
        }
   
    }
    $("#txtdiachi").blur(kiemtradiachi);
    $("#btndkynhanhang").click(function () {
        if(kiemtraten()==false||kiemtragamil()==false||kiemtradt()==false||kiemtradiachi()==false)
        alert("bạn cần nhập đủ thông tin để đặt hàng");
        else{
            var tt1= $("#txthoten").val();
            var tt2 = $("#txtdiachi").val();
            var tt3 = $("#txtsodienthoai").val();
            var tt4 = $("#txtgmail").val();
            var tt5 = document.getElementsByName("gender").value;
            var w = open("home.html","Ketqua");
            w.document.write("<b>THONG TIN đặt hàng</b><br>");
            w.document.write("họ tên:"+tt1+"<br>");
            w.document.write("địa chỉ:"+tt2+"<br>");
            w.document.write("số điện thoại:"+tt3+"<br>");
            w.document.write("Email:"+tt4+"<br>");
        }
    })
})
function chuyendoigiohang(itemgiohang) {
    var html = "";
    return html;
    
}