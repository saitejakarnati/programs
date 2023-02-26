function sortarray(arr) {
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]) {
            arr[i]=arr[i+1]
            arr[i+1]=arr[i]
        }
    }
    return console.log(arr)
}

sortarray([1,3,2,5,7,10,23,45,4,6])