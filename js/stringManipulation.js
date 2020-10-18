// length
var txt='qwerty';
document.getElementById('demo').innerHTML=txt.length;

// indexOf
var txt2='nama saya riski abidin, umur saya 28 tahun';
document.getElementById('demo2').innerHTML=txt2.indexOf('riski');

// substr
var txt3="apple, microsoft, linux";
document.getElementById('demo3').innerHTML=txt3.substr(0,5);

// replace
var txt4="Please visit us";
document.getElementById('demo4').innerHTML=txt4.replace("us","kami");

// toUpperCase
var txt5="please visit us";
document.getElementById('demo5').innerHTML=txt5.toUpperCase();

// toLowerCase
var txt6="please visit us";
document.getElementById('demo6').innerHTML=txt6.toLowerCase();

// charAt
var txt7="please visit us";
document.getElementById('demo7').innerHTML=txt7.charAt(0);

// split
var txt8="a,b,c,d,e";
var txtArray=txt8.split(",");
document.getElementById('demo8').innerHTML=txtArray[0];
console.log(txtArray);


//bonus array length
var ara=[
    {nama:'riski abidin', age:28},
    {nama:'riski', age:29},
    {nama:'abidin', age:30}
];
console.log(ara.length);