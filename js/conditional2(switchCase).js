var undian = prompt("selamat anda memenangkan lomba dayung, silahkan pilih hadiah yang diinginkan, pilih antara 1-3");
var hadiah = "";

switch (undian) {
    case "1":
        hadiah = "kaos";
        // fungsi break disini untuk mengakhiri case atau mengakhiri kondisi  yang dipilih
        break;
    case "2":
        hadiah = "topi";
        break;
    case "3":
        hadiah = "sarung tangan";
        break;

    //default digunakan untuk case default diluar case yang sudah dijabarkan diatas
    default:
        document.write("<h2>hadiah yang dipilih harus diantara 1-3, coba diulangi lagi</h2>")
}

//tanda === berfungsi sampai membaca tipe data
if (hadiah === "") {
    document.write("<h4>kamu gagal mendapatkan hadiah, makanya jangan asal");
} else {
    document.write("<h1>Selamat</h1>");
    document.write("<b>selamat anda mendapatkan hadiah: " + hadiah);

}