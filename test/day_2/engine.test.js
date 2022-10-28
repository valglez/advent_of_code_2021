const Loader = require("../../src/utils/loader");
const Decoder = require("../../src/day_2/decoder");
const Engine = require("../../src/day_2/engine");

const loader = new Loader();
const decoder = new Decoder();
const engine = new Engine(decoder);

const mockPath = "./test/day_2/mock.txt";
const dataPath = "./test/day_2/data.txt";

describe("Day 2", () => {
  const mockRows = loader.load2(mockPath);
  const dataRows = loader.load2(dataPath);
  describe("Decoding of instructions for the calculation of coordinates", () => {
    it("Should return the coordinate for this direction.", () => {
      engine.movement({ direction: 0, inc: 5 });
      engine.movement({ direction: 0, inc: 10 });
      const value = engine.getCoordX();
      expect(value).toEqual(15);
    });
    it("Should return the coordinate for this direction.", () => {
      engine.movement({ direction: 1, inc: 3 });
      const value = engine.getCoordY();
      expect(value).toEqual(-3);
    });
    it("Should return the coordinate for this direction.", () => {
      engine.movement({ direction: 2, inc: 5 });
      engine.movement({ direction: 2, inc: 8 });
      const value = engine.getCoordY();
      expect(value).toEqual(10);
    });
    it("Should return the horizontal coordinate.", () => {
      engine.reset();
      engine.exec(mockRows);
      const value = engine.getCoordX();
      expect(value).toEqual(15);
    });
    it("Should return the depth coordinate.", () => {
      engine.reset();
      engine.exec(mockRows);
      const value = engine.getCoordY();
      expect(value).toEqual(10);
    });
    it("Should return the multiplication of the X and Y coordinates of the input mock", () => {
      engine.reset();
      engine.exec(mockRows);
      const value = engine.getMultiplyCoord();
      expect(value).toEqual(150);
    });
    it("Should return the multiplication of the X and Y coordinates of the input data", () => {
      engine.reset();
      engine.exec(dataRows);
      const value = engine.getMultiplyCoord();
      expect(value).toEqual(1947824);
    });
  });
});
