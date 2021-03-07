
// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (!matrix || matrix.length == 0) return [];

    for (let i = 1; i < matrix.length; i += 2) {
        let temp = matrix[i].reverse();
        matrix.splice(i, 1, temp);
    }
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        let t = matrix[i]
        for (let j = 0; j < t.length; j++) {
            res.push(t[j])
        }

    }

    return res;





}
