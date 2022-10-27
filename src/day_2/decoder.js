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
  iterate(data) {
    try {
      for (let i = 0; i < data.length; i++) {
        this.decode(data[i]);
      }
    } catch (error) {
      console.error("Error while grouping: ", error.message || error);
    }
  }
  decode(data) {
    try {
      if (data[0] == "up") {
        this.movement({ direction: 1, inc: data[1] });
      }
      if (data[0] == "down") {
        this.movement({ direction: 2, inc: data[1] });
      }
      if (data[0] == "forward") {
        this.movement({ direction: 0, inc: data[1] });
      }
    } catch (error) {
      console.error(error.message || error);
    }
  }
  movement(data) {
    try {
      if (data.direction == "0") {
        // this.x = +data.inc;
      }
      if (data.direction == "1") {
        // this.y = -data.inc;
      }
      if (data.direction == "2") {
        // this.y = +data.inc;
      }
    } catch (error) {
      console.error(error.message || error);
    }
  }
}

module.exports = Decoder;
