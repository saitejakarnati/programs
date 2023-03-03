function multiplyOf2Darr(A, B, a, b, c) {
    let C = []
    for (i = 0; i < a; i++) {
        C[i] = []
        for (k = 0; k < c; k++) {
            for (j = 0; j < 1; j++) {
                C[i][k] = A[i][j] * B[j][k] + A[i][j + 1] * B[j + 1][k] + A[i][j + 2] * B[j + 2][k] +
                    A[i][j + 3] * B[j + 3][k]

            }
        }
    }
    return C + ""
}
let A = [[1, 0, 0, 1], [0, 1, 0, 1]]
let B = [[1, 2], [1, 0], [2, 0], [1, 1]]
let a = 2; b = 4; c = 2

let x = multiplyOf2Darr(A, B, a, b, c)
console.log(x)