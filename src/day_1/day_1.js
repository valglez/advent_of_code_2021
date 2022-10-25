class Measurement {
  group(data, size) {
    try {
      let arrs = [];
      for (let i = 0; i < data.length; i++) arrs.push(data.slice(i, i + size));
      return arrs.splice(0, data.length - 2);
    } catch (error) {
      console.error("Error while grouping: ", error.message || error);
    }
  }
  sum(data) {
    try {
      const arr = this.group(data, 3);
      return arr.map((i) => i.reduce((sum, item) => (sum += Number(item)), 0));
    } catch (error) {
      console.error("Error while calculating; ", error.message || error);
    }
  }
  calculate(data) {
    let counter = 0;
    try {
      for (let i = 1; i < data.length; i++) {
        if (Number(data[i - 1]) < Number(data[i])) {
          counter++;
        }
      }
      return counter;
    } catch (error) {
      console.error("Error while calculating; ", error.message || error);
    }
  }
}

module.exports = Measurement;
