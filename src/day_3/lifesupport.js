class LifeSupport {
  constructor(consumption) {
    this.consumption = consumption;
    this.oxigen = [];
  }
  mcbArrayFormat(mcb) {
    let arr = [];
    for (let i = 0; i < mcb.length; i++) {
      arr.push(mcb[i]);
    }
    return arr;
  }
  checkPosition(raw, mcb) {
    for (let i = 0; i < raw.length; i++) {
      if (raw[i].startsWith(mcb) == true) {
        this.oxigen.push(raw[i]);
      }
    }
  }
  reset() {
    this.oxigen = [];
  }
  result() {
    return this.oxigen;
  }
}

module.exports = LifeSupport;
