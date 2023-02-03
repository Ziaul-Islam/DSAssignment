function linearBinarySearch(arr, first, last, srch){
    console.log(arr, first, last, srch);
    if(first > last){
        return -1;
    }
    let mid = Math.trunc((first + last)/2);
    if(srch === arr[mid]) return mid;
    if(srch > arr[mid]) return linearBinarySearch(arr, mid + 1, last, srch);
    if(srch < arr[mid]) return linearBinarySearch(arr, first, mid - 1, srch);
}

console.log(linearBinarySearch([-1,0,1,2,3,4,5,7,10,20], 0, [-1,0,1,2,3,4,5,7,10,20].length - 1, 10));