class Consumption {
  constructor() {
    this.gamma = [];
    this.epsilon = [];
    this.decimalGamma = 0;
    this.decimalEpsilon = 0;
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
  getMostCommonBitForCriteria(col) {
    let countOne = 0;
    let countZero = 0;
    for (let i = 0; i < col.length; i++) {
      if (col[i] == 0) {
        countZero++;
      } else {
        countOne++;
      }
    }
    return countZero > countOne ? "0" : "1";
  }
  getLeastCommonBitForCriteria(col) {
    let countOne = 0;
    let countZero = 0;
    for (let i = 0; i < col.length; i++) {
      if (col[i] == 0) {
        countZero++;
      } else {
        countOne++;
      }
    }
    return countZero > countOne ? "1" : "0";
  }
  filterElementByCharInPosition(arr, char, position) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].charAt(position) == char) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  getOxygenBinary(arr) {
    let posicion = 0;
    while (arr.length > 1) {
      arr = this.filterElementByCharInPosition(
        arr,
        this.getMostCommonBitForCriteria(this.getColumn(arr, posicion)),
        posicion
      );
      posicion++;
    }
    return arr;
  }
  getCO2Binary(arr) {
    let posicion = 0;
    while (arr.length > 1) {
      arr = this.filterElementByCharInPosition(
        arr,
        this.getLeastCommonBitForCriteria(this.getColumn(arr, posicion)),
        posicion
      );
      posicion++;
    }
    return arr;
  }
  getOxygen(res) {
    return parseInt(this.getOxygenBinary(res), 2);
  }
  getCO2(res) {
    return parseInt(this.getCO2Binary(res), 2);
  }
  getResult(res) {
    return this.getOxygen(res) * this.getCO2(res);
  }
  getMostCommonBit(col) {
    let countOne = 0;
    for (let i = 0; i < col.length; i++) {
      if (col[i] == 1) {
        countOne++;
      }
    }
    return countOne > col.length / 2 ? (this.gamma += 1) : (this.gamma += 0);
  }
  getLeastCommonBit(col) {
    let countOne = 0;
    for (let i = 0; i < col.length; i++) {
      if (col[i] == 1) {
        countOne++;
      }
    }
    return countOne > col.length / 2 ? (this.epsilon += 0) : (this.epsilon += 1);
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
