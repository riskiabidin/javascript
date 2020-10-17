var x=1;
var y=8;

function add(){
    var one=1;
    var two=2;
    console.log(one+two);
}
function add2(){
    var one=1;
    var two=2;
    return one+two;
}
function add3(satu){
    return satu+5;
}
function add4(satu, dua){
    return satu+dua;
}
function multyplyOneAndTwo(){
    return x*y;
}
add();
console.log(add2());

var result=add2();
console.log(result);

console.log(add3(x));
console.log(add4(x,y));
console.log(multyplyOneAndTwo());