// method length
var nama=["riski","abidin","riski2"];

for(var i=0;i< nama.length;i++){
    console.log(nama[i]);
}

//method join berfungsi mengatur separator/pembatas di array
var countrys=["indonesia","jepang","belanda","inggris"];
// default separator dari join adalah koma(,).
var join=countrys.join();
//merubah separator dari join dengan tanda -
var join2=countrys.join(" - ");
console.log(join);
console.log(join2);

//method push fungsinya menambah value(element) array di akhir array
countrys.push("amerika","australia","italia");
console.log(countrys);

//method pop fungsinya menghapus value(element) array di akhir array
countrys.pop();
console.log(countrys);

