//method splice(menyambung/menambal) berfungsi untuk menambah dan menghilangkan pada posisi dimanapun di array
var countrys=["indonesia","jepang","belanda"]
//(0,0) mau menambahkan value di index keberapa, dan menghapus value berapa
countrys.splice(1,0,"australia","amerika");
console.log(countrys);
//contoh yang lainnya
countrys.splice(1,1,"italia");
console.log(countrys);

//method slice(memotong) 
var angka1=[1,2,3,4,5,6,7,8,9];
// slice(3,6)index dari 3 sampai 6
var angka2=angka1.slice(3,6);
console.log(angka1);
console.log(angka2);

//foreach
angka1.forEach(function(a){
    console.log(a);
});
