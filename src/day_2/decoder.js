class Decoder {
  formatInstruction(rawData) {
    try {
      let arr = [];
      for (let i = 0; i < rawData.length; i += 2)
        arr.push(rawData.slice(i, i + 2));
      for (let i in arr) {
        arr[i][1] = +arr[i][1];
      }
      return arr;
    } catch (error) {
      console.error("Error while grouping: ", error.message || error);
    }
  }
  decode(instruction) {
    try {
      if (instruction[0] == "up") {
        return { direction: 1, inc: instruction[1] };
      }
      if (instruction[0] == "down") {
        return { direction: 2, inc: instruction[1] };
      }
      if (instruction[0] == "forward") {
        return { direction: 0, inc: instruction[1] };
      }
    } catch (error) {
      console.error(error.message || error);
    }
  }
}

module.exports = Decoder;
