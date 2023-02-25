function average(arr) {
    let sum = 0
    let n = arr.length
    for (i = 0; i < n; i++) {
        sum += arr[i]
        avg= sum / n
    }
    return avg
}
let x = average([-1, -2, -3, -4])
console.log(x)