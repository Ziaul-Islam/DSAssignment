// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = A.reduce((a, b) => Math.max(a, b));
    let level = 1, strokes = 0;
    let broken = true;
    let arr = [...A];
    //console.log(max);

    while(level <= max){

    //console.log('level : '+level);
      for(let i = 0; i < arr.length; i++){

          if(arr[i] >= 1){
              if(broken){
                  strokes++;
                  broken = false
              }
            arr[i]--
          }
          else{
              broken = true;
          }
        //console.log(strokes);
      }
      level++;
      broken = true;
    }

    //console.log(strokes);
    return strokes > 1000000000 ? -1 : strokes;
}
