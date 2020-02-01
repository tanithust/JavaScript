var num=[12,5,61,23,48];
document.getElementById("sort").innerHTML=num;
function myFunction(){
    num.sort(function(a,b){return a-b});
    document.getElementById("sort").innerHTML=num;
}