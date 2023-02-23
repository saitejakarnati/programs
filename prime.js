function isPrime(x) {

    if (x == 1) {
        return false
    }
    if (x == 2) {
        return true
    } else {
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return false
            }
        }
        return true
    }
}
function add(n1, n2) {
    return n1 + n2
}
let m = isPrime(53)
let n = add(6, 7)
console.log(n)
console.log(m)
