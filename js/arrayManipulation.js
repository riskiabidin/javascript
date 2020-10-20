// menambahkan Array
var handPhone=[];
handPhone[0]="vivo";
handPhone[1]="oppo";
console.log(handPhone);
for(i in handPhone){
    document.write("<br>"+handPhone[i]);
}

//menghapus array
handPhone[0]=undefined;
console.log(handPhone);

for(i in handPhone){
    document.write("<br>."+handPhone[i]);
}
