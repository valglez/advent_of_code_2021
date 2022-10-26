class Decoder {
  formatData(data) {
    try {
      const size = data.length;
      let arrs = [];
      for (let i = 0; i < size; i+=2) arrs.push(data.slice(i , i + 2));
      return arrs;
    } catch (error) {
      console.error("Error while grouping: ", error.message || error);
    }
  }
}

module.exports = Decoder;
