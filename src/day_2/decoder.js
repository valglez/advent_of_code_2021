class Decoder {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  formatInstruction(data) {
    try {
      let arrs = [];
      for (let i = 0; i < data.length; i += 2) arrs.push(data.slice(i, i + 2));
      for (let i in arrs) {
        arrs[i][1] = +arrs[i][1];
      }
      return arrs;
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
  movement(data) {
    try {
      if (data.direction == "0") {
        this.x += data.inc;
      }
      if (data.direction == "1") {
        this.y -= data.inc;
      }
      if (data.direction == "2") {
        this.y += data.inc;
      }
    } catch (error) {
      console.error(error.message || error);
    }
  }
  reset() {
    this.x = 0;
    this.y = 0;
  }
  getCoordX() {
    return this.x;
  }
  getCoordY() {
    return this.y;
  }
}

module.exports = Decoder;
