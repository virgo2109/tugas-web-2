function validasi() {
    var depan = document.getElementById("depan").value;
    var belakang = document.getElementById("belakang").value;
    var alamat = document.getElementById("alamat").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if (depan != "" && belakang!="" && alamat !="" && user !="" && pass !="") {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}