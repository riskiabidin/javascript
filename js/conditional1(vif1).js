//fungsi prompt untuk menggambil inputan dari user
var password=prompt("password:");
// membuat kondisi jika password bernilai belajarjs maka akan menjalankan blok code sesudah if
if(password=="belajarjs"){
    document.write("<h2>selamat anda berhasil login");
}
// jika kondisi tidak terpenuhi pada if maka akan menjalankan blok code sesudah else
else{
    document.write("<h2>maaf, password yang anda masukan salah, silahkan ulangi lagi");
}

document.write("<p>terimakasih sudah menggunakan aplikasi ini bro</p>");