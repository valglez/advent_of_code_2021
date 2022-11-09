class Bingo {
  getNumbers(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) arr.push(data.slice(i, i + 1));
    return arr;
  }
  getBalls(num) {
    const balls = num[0][0].split(",");
    return balls.map(Number);
  }
  getTotalCards(num) {
    let res = [];
    for (let i = 1; i < num.length; i++) {
      res.push(num[i]);
    }
    return res;
  }
  getSingleCard(num, n) {
    const card = num[n][0].replace(/[\s\n]+/g, ",").split(",");
    let arr = card.filter((x) => x !== "");
    return arr.map(Number);
  }
  VerifyCards(num) {
    const size = this.getTotalCards(num).length;
    let count = 0;
    for (let i = 1; i < size + 1; i++) {
      if (this.getSingleCard(num, i).length === 25) {
        count++;
      }
    }
    return count === size ? true : false;
  }
}

module.exports = Bingo;
