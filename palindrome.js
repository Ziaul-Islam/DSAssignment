function palindrome(str){
    if ((str.length === 1)||(str === '')) return true;
    else if (str.charAt(0) === str.charAt(str.length - 1)){
        return palindrome(str.substring(1,(str.length - 1)));
    }
    else return false;

    //return str.substring(1,(str.length - 1));
}

console.log(palindrome('krishna'));