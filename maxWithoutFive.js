function maxWithOutFive(n){
    let max = -Infinity;
    let str = n.toString();

    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == '5'){
            let checkStr = str.substring(0, i) + str.substring(i+1);
            let checkInt = parseInt(checkStr);
            if( checkInt > max) max = checkInt;
        }
    }
    return max;
}

console.log(maxWithOutFive(50000));