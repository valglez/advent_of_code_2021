class Bingo {
  getNumbers(data) {
    let arr = [];
    let res = [];
    for (let i = 0; i < data.length; i++) arr.push(data.slice(i, i + 1));
    arr.forEach((element) => {
      res.push(element);
    });
    return res;
  }
  getBalls(arr) {
    return arr[0];
  }
}

module.exports = Bingo;
