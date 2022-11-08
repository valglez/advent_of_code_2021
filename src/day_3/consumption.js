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
      col[i] == 1 ? countOne++ : 0;
    }
    return countOne > col.length / 2 ? (this.gamma += 1) : (this.gamma += 0);
  }
  getLeastCommonBit(col) {
    let countOne = 0;
    for (let i = 0; i < col.length; i++) {
      col[i] == 1 ? countOne++ : 0;
    }
    return countOne > col.length / 2
      ? (this.epsilon += 0)
      : (this.epsilon += 1);
  }
  exec(arr) {
    for (let i = 0; i < arr[0].length; i++) {
      this.getMostCommonBit(this.getColumn(arr, i));
      this.getLeastCommonBit(this.getColumn(arr, i));
    }
  }
  getMostCommonBitForCriteria(col) {
    let countOne = 0;
    let countZero = 0;
    for (let i = 0; i < col.length; i++) {
      col[i] == 0 ? countZero++ : countOne++;
    }
    return countZero > countOne ? "0" : "1";
  }
  getLeastCommonBitForCriteria(col) {
    let countOne = 0;
    let countZero = 0;
    for (let i = 0; i < col.length; i++) {
      col[i] == 0 ? countZero++ : countOne++;
    }
    return countZero > countOne ? "1" : "0";
  }
  filterElementByCharInPosition(arr, char, position) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i].charAt(position) == char ? result.push(arr[i]) : 0;
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
  getGamma() {
    return this.gamma;
  }
  getDecimalGamma() {
    return parseInt(this.gamma, 2);
  }
  getEpsilon() {
    return this.epsilon;
  }
  getDecimalEpsilon() {
    return parseInt(this.epsilon, 2);
  }
  getGammaEpsilonMultiply() {
    return this.getDecimalGamma() * this.getDecimalEpsilon();
  }
  getDecimalOxygen(res) {
    return parseInt(this.getOxygenBinary(res), 2);
  }
  getDecimalCO2(res) {
    return parseInt(this.getCO2Binary(res), 2);
  }
  getOxygenCO2Multiply(res) {
    return this.getDecimalOxygen(res) * this.getDecimalCO2(res);
  }
  reset() {
    this.gamma = [];
    this.epsilon = [];
  }
}

module.exports = Consumption;
