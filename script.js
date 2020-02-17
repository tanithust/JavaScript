var input = "javascriptloops";
var vowel = [],
    consonant = [];
var arr = input.split("");
var i;
for (i = 0; i < arr.length; i++) {
    if (arr[i] == 'a' || arr[i] == 'i' || arr[i] == 'e' || arr[i] == 'o' || arr[i] == 'u')
        vowel.push(arr[i]);
    else consonant.push(arr[i]);
}
for (i = 0; i < vowel.length; i++) {
    console.log(vowel[i]);
}