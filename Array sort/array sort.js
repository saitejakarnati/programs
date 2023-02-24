function sortarray(arr) {                  // Sort Alphabetically
    return arr.sort()
}
function sortarray1(arr) {                 // Sort Numerically
    return arr.sort(function (a, b) {
        return a - b
    })
}

let x = sortarray([1, 23, 25, 47, 41, 3, 65, 56, 4, 6, 7])
console.log(x)

let y = sortarray1([1, 23, 25, 47, 41, 3, 65, 56, 4, 6, 7])
console.log(y)
