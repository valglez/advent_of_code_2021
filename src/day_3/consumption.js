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
    const mcb = [...this.gamma];
    mcb[mcb.length - 1] = "1";
    while (arr.length > 1) {
      for (let i = 0; i < mcb.length; i++) {
        arr = this.filterElementByCharInPosition(arr, mcb[i], posicion);
        posicion++;
      }
    }
    return arr;
  }
  getCO2Binary(arr) {
    let posicion = 0;
    const lcb = [...this.epsilon];
    while (arr.length > 1) {
      arr = this.filterElementByCharInPosition(arr, lcb[posicion], posicion);
      posicion++;
    }
    return arr;
  }
  getOxygen(res) {
    const result = this.getOxygenBinary(res);
    const decimal = parseInt(result, 2);
    return decimal;
  }
  getCO2(res) {
    const result = this.getCO2Binary(res);
    const decimal = parseInt(result, 2);
    return decimal;
  }
  getResult(res) {
    const oxy = this.getOxygenBinary(res);
    const decimalOxy = parseInt(oxy, 2);
    const CO2 = this.getCO2Binary(res);
    const decimalCO2 = parseInt(CO2, 2);
    return decimalOxy * decimalCO2;
  }
  getMostCommonBit(col) {
    let countOne = 0;
    for (let i = 0; i < col.length; i++) {
      if (col[i] == 1) {
        countOne++;
      }
    }
    if (countOne > col.length / 2) {
      return (this.gamma += 1);
    }
    return (this.gamma += 0);
  }
  getLeastCommonBit(col) {
    let countOne = 0;
    for (let i = 0; i < col.length; i++) {
      if (col[i] == 1) {
        countOne++;
      }
    }
    if (countOne > col.length / 2) {
      return (this.epsilon += 0);
    } else {
      return (this.epsilon += 1);
    }
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
