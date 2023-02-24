function findElement(x,array) {
    let n = array.length
    for (i = 0; i < n; i++) {
        if (x == array[i]) {
            return true
        }
    } return false

}
let m = findElement(3,[1, 4, 5, 6,3])
console.log(m)