function longestSubstring(str){
    let set = new Set();
    let sub = '';
    let k = 0, max =0;

    for(let i of str){
        console.log(i);
        sub += i;
        if(!set.has(i)){
            set.add(i);
        }

    }
}

longestSubstring("Hello");