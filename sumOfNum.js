function nsum(num){
    if(num === 1) return 1;
    return num + nsum(num - 1);
}

console.log(nsum(10));