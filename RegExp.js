var arr=[12,34,52]
var str="1, 23 ,45 ,61 ,32 ,31 ,13";
var pat1=/(23|13)/g;
var result=str.match(/(23|13)/g);
document.write(result.length,"\t");
document.write(arr);