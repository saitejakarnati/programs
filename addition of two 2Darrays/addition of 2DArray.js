function sum2dArray(A, B) {
    C = []
    for (i = 0; i < A.length; i++) {
        C[i] = []
        for (j = 0; j < A[0].length; j++) {
            C[i][j] = A[i][j] + B[i][j]
        }
    }
    return C + ""
}

let A = [[1, 1, 1], [2, 2, 2]]
let B = [[1, 1, 1], [2, 2, 2]]
let x = sum2dArray(A, B)
console.log(x)

