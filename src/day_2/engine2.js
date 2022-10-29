class Engine2 {
  constructor(decoder) {
    this.x = 0;
    this.y = 0;
    this.aim = 0;
    this.decoder = decoder;
  }
  movement(decodedInstruction) {
    try {
      if (decodedInstruction.direction == "0") {
        switch (this.aim) {
          case 0:
            return (this.x += decodedInstruction.inc);
          default:
            (this.x += decodedInstruction.inc),
              (this.y += decodedInstruction.inc * this.aim);
        }
      }
      if (decodedInstruction.direction == "1") {
        return (this.aim -= decodedInstruction.inc);
      }
      if (decodedInstruction.direction == "2") {
        return (this.aim += decodedInstruction.inc);
      }
    } catch (error) {
      console.error(error.message || error);
    }
  }
  exec(rawData) {
    const formatedData = this.decoder.formatInstruction(rawData);
    formatedData.map((instruction) =>
      this.movement(this.decoder.decode(instruction))
    );
  }
  getAim() {
    return this.aim;
  }
  getHorizontal() {
    return this.x;
  }
  getDepth() {
    return this.y;
  }
  getMultiply() {
    return this.x * this.y;
  }
  reset() {
    this.x = 0;
    this.y = 0;
    this.aim = 0;
  }
}

module.exports = Engine2;
