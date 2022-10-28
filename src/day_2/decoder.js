class Decoder {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  formatInstruction(rawData) {
    try {
      let arr = [];
      for (let i = 0; i < rawData.length; i += 2) arr.push(rawData.slice(i, i + 2));
      for (let i in arr) {
        arr[i][1] = +arr[i][1];
      }
      return arr;
    } catch (error) {
      console.error("Error while grouping: ", error.message || error);
    }
  }
  exec(rawData) {
    const formatedData = this.formatInstruction(rawData);
    formatedData.map((instruction) => this.movement(this.decode(instruction)));
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
  movement(decodedInstruction) {
    try {
      if (decodedInstruction.direction == "0") {
        return (this.x += decodedInstruction.inc);
      }
      if (decodedInstruction.direction == "1") {
        return (this.y -= decodedInstruction.inc);
      }
      if (decodedInstruction.direction == "2") {
        return (this.y += decodedInstruction.inc);
      }
    } catch (error) {
      console.error(error.message || error);
    }
  }
  getCoordX() {
    return this.x;
  }
  getCoordY() {
    return this.y;
  }
  getMultiplyCoord() {
    return this.x * this.y;
  }
  reset() {
    this.x = 0;
    this.y = 0;
  }
}

module.exports = Decoder;
