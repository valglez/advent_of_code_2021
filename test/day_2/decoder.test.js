const Loader = require("../../src/utils/loader");
const Decoder = require("../../src/day_2/decoder");

const loader = new Loader();
const decoder = new Decoder();

const mockPath = "./test/day_2/mock.txt";
const dataPath = "./test/day_2/data.txt";

describe("Day 2", () => {
  const mockRows = loader.load2(mockPath);
  describe("Decoding of instructions for the calculation of coordinates", () => {
    it("Should be the same as the resolved one.", () => {
      const value = decoder.formatInstruction(mockRows);
      expect(value).toEqual([
        ["forward", 5],
        ["down", 5],
        ["forward", 8],
        ["up", 3],
        ["down", 8],
        ["forward", 2],
      ]);
    });
    it("Should return the decode of the 'forward' instruction.", () => {
      const value = decoder.decode(["forward", 5]);
      expect(value).toEqual({ direction: 0, inc: 5 });
    });
    it("Should return the decode of the 'up' instruction.", () => {
      const value = decoder.decode(["up", 3]);
      expect(value).toEqual({ direction: 1, inc: 3 });
    });
    it("Should return the decode of the 'down' instruction.", () => {
      const value = decoder.decode(["down", 5]);
      expect(value).toEqual({ direction: 2, inc: 5 });
    });
  });
});
