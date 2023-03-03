function multiplyOf2Darr(A, B) {
    let C = []
    for (i = 0; i < A.length; i++) {
        C[i] = []
        for (k = 0; k < B[0].length; k++) {
            C[i][k] = 0
            for (j = 0; j < B.length; j++) {
                C[i][k] += A[i][j] * B[j][k]
            }
        }
    }
    return C + ""
}
let A = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
let B = [[1, 2], [3, 4], [5, 6]]
let x = multiplyOf2Darr(A, B)
console.log(x)