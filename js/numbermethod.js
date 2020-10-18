var txtNumber=12.3456;

// toString (merubah typeof dari angka ke string).
console.log(typeof(txtNumber));
console.log(typeof(txtNumber.toString()));
console.log(txtNumber.toString());

// toFixed (membulatkan angka).
console.log(txtNumber.toFixed());


// toFixed dengan parameter (membulatkan dua angka dibelakang koma).
console.log(txtNumber.toFixed(2));

//global method (Number()) digunakan untuk mengkonversi dari string ke number
var txtnumber2="12.3456"    //dari type string
console.log(txtnumber2);
console.log(typeof(Number(txtnumber2))); //fungsi number untuk merubah dari string ke number

//parseInt (merubah typeof dar string ke number).
console.log(parseInt(txtnumber2));
console.log(typeof(parseInt(txtnumber2)));