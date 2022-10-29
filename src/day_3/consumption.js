class Consumption {
  getColumn(arr, n) {
    let column = [];
    for (let i = 0; i < arr.length; i++) {
      column.push(arr[i][n]);
    }
    console.log(column)
    return column;
  }
}

module.exports = Consumption;
