function reverseString(str){
    if(str === '') return '';
    //return reverseString(str-1);
    return str.charAt(str.length - 1) + reverseString(str.substring(0,(str.length -1)));
}
console.log(reverseString('abc'));
