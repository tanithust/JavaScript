var sport=['football','badminton','volleyball'];
var x=sport.length;
var y=sport.sort();
var Text;
document.getElementById("length").innerHTML=x;
Text ="<ol>";
sport.forEach(myFunction);
Text +="</ol>";
document.getElementById("sort").innerHTML=Text;
function myFunction(value){
Text += "<li>" + value + "</li>";
}