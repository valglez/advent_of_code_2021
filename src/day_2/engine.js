class Engine {
  constructor(decoder) {
    this.x = 0;
    this.y = 0;
    this.decoder = decoder;
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
  exec(rawData) {
    const formatedData = this.decoder.formatInstruction(rawData);
    formatedData.map((instruction) =>
      this.movement(this.decoder.decode(instruction))
    );
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

module.exports = Engine;
