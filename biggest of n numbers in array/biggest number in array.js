function maxvalue() {
    let max = -Infinity
    let n = arguments.length
    for (i = 0; i < n; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}
let x = maxvalue(-1, -2, -3, -400, -56, -34, -76)
console.log(x)