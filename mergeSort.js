function mergeSort(arr, left, right){
    if(left < right){ // atleast two element
        let mid = Math.trunc((left + right)/2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid+1, right);
        return merge(arr, left, mid, right);
    }
}

function merge(arr, left, mid, right){
    let i = left
}