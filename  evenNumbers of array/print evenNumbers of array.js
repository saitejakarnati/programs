function evenNum(arr) {
    x = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            x.push(arr[i])
        }
    }
    return x
}
y = evenNum([2, 3, 4, 5, 6, 7, 8, 22, 23, 33, 35, 34, 32])
console.log(y)