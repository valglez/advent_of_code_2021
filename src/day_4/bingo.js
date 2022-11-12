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
  getTotalCardsFormated(numArr) {
    const totalCards = this.getTotalCards(numArr);
    let res = [];
    for (let i = 1; i < totalCards.length + 1; i++) {
      res.push(this.getSingleCard(numArr, i));
    }
    return res;
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
  getOccurrences2(numArr, ini, fin) {
    const balls = this.getBalls(numArr);
    const card = this.getTotalCardsFormated(numArr);
    const sliceBalls = balls.slice(ini, fin);
    let res = [];
    for (let i = 0; i < sliceBalls.length; i++) {
      for (let j = 0; j < card.length; j++) {
        card[j].forEach((element) => {
          if (element === sliceBalls[i]) {
            res.push(element);
          }
        });
      }
    }
    return res;
  }
  updateRow(numArr, n, row, ini, fin) {
    const cardRow = this.getCardRows(numArr, n, row);
    const occu = this.getOccurrences(numArr, n, ini, fin);
    let res = [];
    for (let i = 0; i < occu.length; i++) {
      cardRow.forEach((element) => {
        if (element === occu[i]) {
          res.push(element);
        }
      });
    }
    return cardRow.filter((x) => !res.includes(x));
  }
  updateAllRows(numArr, ini, fin) {
    const size = this.getTotalCards(numArr).length;
    let cards = this.getAllCardsRows(numArr);
    let occu = [];
    let arr = [];
    for (let i = 0; i < 15; i++) {
      for (let j = 1; j < size + 1; j++) {
        for (let k = 1; k < 6; k++) {
          occu.push(this.updateRow(numArr, j, k, ini, fin));
        }
      }
      arr.push(cards[i].filter((card) => occu[i].includes(card)));
    }
    return arr;
  }
  getAllCardsRows(numArr) {
    const size = this.getTotalCards(numArr).length;
    let res = [];
    for (let j = 1; j < size + 1; j++) {
      for (let k = 1; k < 6; k++) {
        res.push(this.getCardRows(numArr, j, k));
      }
    }
    return res;
  }
  getOccurrences(numArr, n, ini, fin) {
    const balls = this.getBalls(numArr);
    const card = this.getSingleCard(numArr, n);
    const sliceBalls = balls.slice(ini, fin);
    let res = [];
    for (let i = 0; i < sliceBalls.length; i++) {
      card.forEach((element) => {
        if (element === sliceBalls[i]) {
          res.push(element);
        }
      });
    }
    return res;
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
