//perbedaan do while dan while adalah jika do while mengeksekusi blok dulu walaupun kondisi program salah, kalau while mengeksekusi blok jika kondisi blok tersebut benar masih dalam range kondisi
var repeat = confirm("ulangin klik terus saja");
var counter = 0;

do {
    counter++;
    repeat = confirm("ulangin klik terus saja");
}while (repeat);

document.write("anda sudah mengulangi sebanya"+counter);
