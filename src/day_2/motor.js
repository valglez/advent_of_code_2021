const Decoder = require("./decoder");

const decoder = new Decoder();

// TO-DO
// The 'movement' method only receive the first array from the formatted instructions
//

class Motor {
  movement(data) {
    const moves = decoder.decode(data);
    console.log(moves);
    let forward = 0;
    let depth = 0;
    try {
      switch (moves.direction) {
        case 0:
          return (forward = +moves.inc);
        case 1:
          return (depth = +moves.inc);
        case 2:
          return (depth = -moves.inc);
      }
      let multi = forward;
      return forward;
    } catch (error) {
      console.error(error.message || error);
    }
  }
}

module.exports = Motor;
