function sortarray(arr) {
    let i = 0, j = i + 1
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                subarr = arr[i]
                arr[i] = arr[j]
                arr[j] = subarr
            }
        }
    }
    return console.log(arr)
}

sortarray([5, 1, 2, 7, 4, 6, -6, -20, 0, 12, 35, 23, 456, 33, 234, -9])
