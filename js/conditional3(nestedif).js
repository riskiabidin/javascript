var userName = prompt("inputkan username anda");
var password = prompt("inputkan password anda");

if (userName == "riski") {
    if (password == "abidin") {
        document.write("<h2>Selamat datang pak </h2>" + userName);
    }
    else{
        document.write("coba lagi pak "+userName+" password anda tidak benar");
    }
} else {
    document.write("maaf anda salah menginputkan user atau password");
}