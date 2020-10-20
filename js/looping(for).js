// contoh looping menggunakan for
for (var i = 0; i < 50; i++) {
    document.write("<p>riski abidin " + i + "<p>");
}

document.write("<hr>");

// contoh foreach menggunakan operator in
var cars=["bugati","avanza","BMW"];
for(j in cars){
    // variable j menandakan index di operator in
    document.write("<p>"+cars[j]+"</p>");
}

document.write("<hr>");

// perulangan menggunakan method foreach
var brands=["gucci","lv","vans"];
brands.forEach(function(brand){
    document.write("<p>"+brand+"</p>")
});