var num=[23,6,89,12,100];
document.getElementById("find max").innerHTML=num;
function myArrMax(){
    document.getElementById("max").innerHTML=Math.max.apply(null,num);
}