function minvalue() {
    let min = Infinity
    let n = arguments.length
    for (i = 0; i < n; i++) {
        if (arguments[i] < min) {
            min = arguments[i]
        }
    }
    return min
}
let x = minvalue(-1, -2, -34, -45, -345, -400)
console.log(x)