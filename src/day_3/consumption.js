class Consumption {
  constructor() {
    this.gamma = [];
    this.epsilon = [];
  }
  getColumn(arr, n) {
    let column = [];
    for (let i = 0; i < arr.length; i++) {
      column.push(arr[i][n]);
    }
    return column;
  }
  getMostCommonBit(col) {
    let countOne = 0;
    for (let i = 0; i < col.length; i++) {
      if (col[i] == 1) {
        countOne++;
      }
    }
    if (countOne > col.length / 2) {
      return 1;
    }
    return 0;
  }
  getGamma(most) {
    let common = most;
    return (this.gamma += common);
  }
//   getDecimalGamma() {
//     console.log(this.gamma)
//     const decimal = parseInt(this.gamma, 10)
//     return decimal
//   }
}

module.exports = Consumption;
