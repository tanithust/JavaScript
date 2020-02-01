var num=[23,6,89,12,100];
function findMin(arr){
    var len =arr.length;
    var min=Infinity;
    while(len--){
        if (arr[len]<min)
            min=arr[len];
    }
    return min;
}
document.write(findMin(num));
