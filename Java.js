function startlog(){
var net1 = document.getElementById('username').value + document.getElementById('password').value;
var net2 = ('isran') + ('123');
if (net1 == net2) {
var logakses = document.getElementById('akses').innerHTML = 'Login Successfully';
}
else {
var logakses = document.getElementById('akses').innerHTML = 'Login Failed';
}
};