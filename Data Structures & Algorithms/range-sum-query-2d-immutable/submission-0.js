class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    prefixMatrix;
    constructor(matrix) {
        this.prefixMatrix = Array.from({ length: matrix.length + 1 }, () =>
            new Array(matrix[0].length + 1).fill(0),
        );


        for (let i = 1; i < this.prefixMatrix.length; i++) {
            for (let j = 1; j < this.prefixMatrix[i].length; j++) {
                let sum =
                    this.prefixMatrix[i][j - 1] +
                    matrix[i - 1][j - 1] +
                    this.prefixMatrix[i - 1][j] -
                    this.prefixMatrix[i - 1][j - 1];


                this.prefixMatrix[i][j] = sum;   
            }
        }

        console.log(this.prefixMatrix)
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        
        const square = this.prefixMatrix[row2 + 1][col2 + 1]
        const withoutTop = square - this.prefixMatrix[row1][col2 + 1];
        const withoutLeft = withoutTop - this.prefixMatrix[row2 + 1][col1];
        const res = withoutLeft + this.prefixMatrix[row1][col1]

        return res;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
