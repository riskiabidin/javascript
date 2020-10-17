function setName() {
    document.getElementById('name').innerHTML = "riski abidin";
}
function setNama() {
    var txtNama = document.getElementById('txtNama').value;
    document.getElementById('namaLengkap').innerHTML = txtNama;
    // bisa menggunakan cara lain:
    // var txtNama=document.getElementById('txtNama');
    // document.getElementById('namaLengkap').innerHTML=txtNama.value;
}