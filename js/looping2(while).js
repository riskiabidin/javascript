// perulangan menggunakan while termasuk kategori uncounted(tak terbatas dan bisa membuat crash) tapi bisa dirubah menjadi counted dengan menambahkan kondisi yang membatasinya.
var repeat = confirm("ulangin klik oke terus saja");

var counter=0;
while (repeat) {
    counter++;
    repeat=confirm("ulangin terus saja");
}
document.write("anda sudah mengulangi ini sebanyak"+counter);