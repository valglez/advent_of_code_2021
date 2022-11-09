class Bingo {
  getNumbers(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) arr.push(data.slice(i, i + 1));
    return arr;
  }
  getBalls(num) {
    return num[0]
  }
  getNumberOfCards(num) {
    let res = []
    for (let i = 1; i < num.length; i++) {
        res.push(num[i])
    }
    return res.length
  }
}

module.exports = Bingo;
