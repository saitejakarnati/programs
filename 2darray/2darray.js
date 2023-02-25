function array2d(a) {
    let x = []
    for (let i = 0; i < a; i++) {

        x[i] = []
    }

    return x
}
let l = array2d(2)
m = array2d(3)
n = [l, m]

console.log(l)
console.log(m)
console.log(n)