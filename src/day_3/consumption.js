class Consumption {
  constructor() {
    this.gamma = [];
    this.epsilon = [];
    this.decimalGamma = 0;
    this.decimalEpsilon = 0;
    this.raw = [];
  }
  exec(arr) {
    for (let i = 0; i < arr[0].length; i++) {
      this.getMostCommonBit(this.getColumn(arr, i));
      this.getLeastCommonBit(this.getColumn(arr, i));
    }
  }
  getColumn(arr, n) {
    let column = [];
    for (let i = 0; i < arr.length; i++) {
      column.push(arr[i][n]);
    }
    return column;
  }
  getRowsForMCB(data, mcb) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].startsWith(mcb) == true) {
        this.raw.push(data[i]);
      }
    }
    return this.raw;
  }
  getMostCommonBit(col) {
    let countOne = 0;
    for (let i = 0; i < col.length; i++) {
      if (col[i] == 1) {
        countOne++;
      }
    }
    if (countOne > col.length / 2) {
      return (this.gamma += "1");
    }
    return (this.gamma += "0");
  }
  getLeastCommonBit(col) {
    let countOne = 0;
    for (let i = 0; i < col.length; i++) {
      if (col[i] == 1) {
        countOne++;
      }
    }
    if (countOne > col.length / 2) {
      return (this.epsilon += "0");
    }
    return (this.epsilon += "1");
  }
  getGamma() {
    return this.gamma;
  }
  getDecimalGamma(bitGamma) {
    return (this.decimalGamma += parseInt(bitGamma, 2));
  }
  getEpsilon() {
    return this.epsilon;
  }
  getDecimalEpsilon(bitEpsilon) {
    return (this.decimalEpsilon += parseInt(bitEpsilon, 2));
  }
  getMultiply() {
    return this.decimalGamma * this.decimalEpsilon;
  }
  reset() {
    this.gamma = [];
    this.epsilon = [];
    this.decimalEpsilon = 0;
    this.decimalGamma = 0;
  }
}

module.exports = Consumption;
