function nNumbers(arr) {
    let max = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

let x = nNumbers([12, 23, 56, 76, 89, 90,1000,4567,7890])
console.log(x)