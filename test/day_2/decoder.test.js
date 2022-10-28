const Loader = require("../../src/utils/loader");
const Decoder = require("../../src/day_2/decoder");

const loader = new Loader();
const decoder = new Decoder();

const mockPath = "./test/day_2/mock.txt";
const dataPath = "./test/day_2/data.txt";

describe("Day 2", () => {
  const mockRows = loader.load2(mockPath);
  const dataRows = loader.load2(dataPath);
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
    it("Should return the coordinate for this direction.", () => {
      decoder.movement({ direction: 0, inc: 5 });
      decoder.movement({ direction: 0, inc: 10 });
      const value = decoder.getCoordX();
      expect(value).toEqual(15);
    });
    it("Should return the coordinate for this direction.", () => {
      decoder.movement({ direction: 1, inc: 3 });
      const value = decoder.getCoordY();
      expect(value).toEqual(-3);
    });
    it("Should return the coordinate for this direction.", () => {
      decoder.movement({ direction: 2, inc: 5 });
      decoder.movement({ direction: 2, inc: 8 });
      const value = decoder.getCoordY();
      expect(value).toEqual(10);
    });
    it("Should return the horizontal coordinate.", () => {
      decoder.reset();
      decoder.exec(mockRows);
      const value = decoder.getCoordX();
      expect(value).toEqual(15);
    });
    it("Should return the depth coordinate.", () => {
      decoder.reset();
      decoder.exec(mockRows);
      const value = decoder.getCoordY();
      expect(value).toEqual(10);
    });
    it("Should return the multiplication of the X and Y coordinates of the input mock", () => {
      decoder.reset();
      decoder.exec(mockRows);
      const value = decoder.getMultiplyCoord();
      expect(value).toEqual(150);
    });
    it("Should return the multiplication of the X and Y coordinates of the input data", () => {
      decoder.reset();
      decoder.exec(dataRows);
      const value = decoder.getMultiplyCoord();
      expect(value).toEqual(1947824);
    });
  });
});
