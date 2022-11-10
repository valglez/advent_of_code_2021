class Bingo {
  getNumbers(input) {
    let numArr = [];
    for (let i = 0; i < input.length; i++) numArr.push(input.slice(i, i + 1));
    return numArr;
  }
  getBalls(numArr) {
    const balls = numArr[0][0].split(",");
    return balls.map(Number);
  }
  getTotalCards(numArr) {
    let res = [];
    for (let i = 1; i < numArr.length; i++) {
      res.push(numArr[i]);
    }
    return res;
  }
  getSingleCard(numArr, n) {
    const card = numArr[n][0].replace(/[\s\n]+/g, ",").split(",");
    let arr = card.filter((x) => x !== "");
    return arr.map(Number);
  }
  VerifyNumberOfNumbersCards(numArr) {
    const size = this.getTotalCards(numArr).length;
    let count = 0;
    for (let i = 1; i < size + 1; i++) {
      if (this.getSingleCard(numArr, i).length === 25) {
        count++;
      }
    }
    return count === size ? true : false;
  }
  getCardRows(numArr, n, row) {
    const card = this.getSingleCard(numArr, n);
    switch (row) {
      case 1:
        return card.slice(0, 5);
      case 2:
        return card.slice(5, 10);
      case 3:
        return card.slice(10, 15);
      case 4:
        return card.slice(15, 20);
      case 5:
        return card.slice(20, 25);
    }
  }
  getCardColumns(numArr, n, col) {
    const card = this.getSingleCard(numArr, n);
    let column = [];
    switch (col) {
      case 1:
        column.push(card[0], card[5], card[10], card[15], card[20]);
        return column;
      case 2:
        column.push(card[1], card[6], card[11], card[16], card[21]);
        return column;
      case 3:
        column.push(card[2], card[7], card[12], card[17], card[22]);
        return column;
      case 4:
        column.push(card[3], card[8], card[13], card[18], card[23]);
        return column;
      case 5:
        column.push(card[4], card[9], card[14], card[19], card[24]);
        return column;
    }
  }
}

module.exports = Bingo;
