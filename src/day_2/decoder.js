class Decoder {
  formatInstruction(data) {
    try {
      const size = data.length;
      let arrs = [];
      for (let i = 0; i < size; i += 2) arrs.push(data.slice(i, i + 2));
      return arrs;
    } catch (error) {
      console.error("Error while grouping: ", error.message || error);
    }
  }
  decode(data) {
    const instruction = this.formatInstruction(data);
    try {
      for (let i = 0; i < instruction.length; i++) {
        switch (instruction[i][0]) {
          case "up":
            return { direction: 1, inc: Number(instruction[0][1]) };
          case "down":
            return { direction: 2, inc: Number(instruction[0][1]) };
          case "forward":
            return { direction: 0, inc: Number(instruction[0][1]) };
        }
      }
    } catch (error) {
      console.error(error.message || error);
    }
  }
}

module.exports = Decoder;
