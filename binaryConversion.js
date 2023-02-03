function binaryConversion(num){
    if(num === 1) return 1;
    return binaryConversion(Math.trunc(num/2)) * 10 + (num%2);
}

console.log(binaryConversion(3452));