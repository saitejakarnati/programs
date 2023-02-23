function compare(x, y, z) {

    if (x > y && x > z) {
        return x
    } else if (y > z && y > x) {
        return y
    }
    return z
} 
let n=compare(45,12,3)
console.log(n)