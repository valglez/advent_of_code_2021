class LifeSupport {
  constructor(consumption) {
    this.consumption = consumption;
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
      return "1";
    }
    return "0";
  }
  check1stPosition(raw, mcb) {
    let first = [];
    for (let i = 0; i < raw.length; i++) {
      if (raw[i].startsWith(mcb) == true) {
        first.push(raw[i]);
      }
    }
    return first;
  }
  checkMostCommon2ndBit(arr) {
    let bits = [];
    let second = [];
    let countOne = 0;
    for (let i = 0; i < arr.length; i++) {
      bits.push(arr[i][1]);
    }
    for (let j = 0; j < bits.length; j++) {
      if (bits[j] == 1) {
        countOne++;
      }
    }
    if (countOne > bits.length / 2) {
      if (arr[k][1].startsWith(1) == true) {
        second.push(arr[k]);
      }
    } else {
      for (let l = 0; l < arr.length; l++) {
        if (arr[l][1].startsWith(0) == true) {
          second.push(arr[l]);
        }
      }
    }
    return second;
  }
  checkMostCommon3rdBit(arr) {
    let bits = [];
    let third = [];
    let countOne = 0;
    for (let i = 0; i < arr.length; i++) {
      bits.push(arr[i][2]);
    }
    for (let j = 0; j < bits.length; j++) {
      if (bits[j] == 1) {
        countOne++;
      }
    }
    if (countOne > bits.length / 2) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[k][2].startsWith(1) == true) {
          third.push(arr[k]);
        }
      }
    } else {
      for (let l = 0; l < arr.length; l++) {
        if (arr[l][2].startsWith(0) == true) {
          third.push(arr[l]);
        }
      }
    }
    return third;
  }
  checkMostCommon4thBit(arr) {
    let bits = [];
    let fourth = [];
    let countOne = 0;
    for (let i = 0; i < arr.length; i++) {
      bits.push(arr[i][3]);
    }
    for (let j = 0; j < bits.length; j++) {
      if (bits[j] == 1) {
        countOne++;
      }
    }
    if (countOne > bits.length / 2) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[k][3].startsWith(1) == true) {
          fourth.push(arr[k]);
        }
      }
    } else {
      for (let l = 0; l < arr.length; l++) {
        if (arr[l][3].startsWith(0) == true) {
          fourth.push(arr[l]);
        }
      }
    }
    return fourth;
  }
  checkMostCommon5thBit(arr) {
    let bits = [];
    let fifth = [];
    let countOne = 0;
    let countZero = 0;
    for (let i = 0; i < arr.length; i++) {
      bits.push(arr[i][4]);
    }
    for (let j = 0; j < bits.length; j++) {
      if (bits[j] == 1) {
        countOne++;
      }
      if (bits[j] == 0) {
        countZero++;
      }
    }
    if (countOne == countZero) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[k][4].startsWith(1) == true) {
          fifth.push(arr[k]);
        }
      }
    }
    return fifth;
  }
  exec(arr) {
    for (let i = 0; i < arr[0].length; i++) {
      this.getMostCommonBit(this.getColumn(arr, i));
    }
  }
}

module.exports = LifeSupport;
