
function flatten(array){

    let temp = [];
    //console.log(array);
    //Logic is 
    for(let i = 0; i < array.length; i++){
        //check if the element is array 
        if(!Array.isArray(array[i])){
            temp.push(array[i]);
        }
        else{
            //temp.concat(flatten(array[i]));
            temp = temp.concat(flatten(array[i]));
            //console.log(temp);
            
        }
    }
    return temp;
}
// function flatten(array){
//     let temp = [];
//     for(let i = 0; i < array.length; i++){
//         if(!Array.isArray(array[i])){
//             temp.push(array[i]);
//         }
//         else{
//             temp = temp.concat(flatten(array[i]));
//             //console.log(temp);
//         } 
//     }
//     //console.log(temp);
//     return temp;
// }
console.log(flatten(["This is a string", 1, 2, [3], [4, [5, 6]], [[7]], 8, "[10, 11]"]));
console.log(flatten([1, 2, [3, 4,[5, 6]]]));
