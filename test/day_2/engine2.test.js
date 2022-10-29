const Loader = require("../../src/utils/loader");
const Decoder = require("../../src/day_2/decoder");
const Engine2 = require("../../src/day_2/engine2");

const loader = new Loader();
const decoder = new Decoder();
const engine2 = new Engine2(decoder);

const mockPath = "./test/day_2/mock.txt";
const dataPath = "./test/day_2/data.txt";

describe("Day 2", () => {
  const mockRows = loader.load2(mockPath);
  const dataRows = loader.load2(dataPath);
  describe("Interpretation of decoded instructions to obtain the coordinates and subsequent multiplication of both", () => {
    it("Should return the 'aim'.", () => {
      engine2.reset();
      engine2.movement({ direction: 0, inc: 5 });
      engine2.movement({ direction: 2, inc: 5 });
      engine2.movement({ direction: 0, inc: 8 });
      engine2.movement({ direction: 1, inc: 3 });
      engine2.movement({ direction: 2, inc: 8 });
      engine2.movement({ direction: 0, inc: 2 });
      const value = engine2.getAim();
      expect(value).toEqual(10);
    });
    it("Should return the depth coordinate.", () => {
      engine2.reset();
      engine2.movement({ direction: 0, inc: 5 });
      engine2.movement({ direction: 2, inc: 5 });
      engine2.movement({ direction: 0, inc: 8 });
      engine2.movement({ direction: 1, inc: 3 });
      engine2.movement({ direction: 2, inc: 8 });
      engine2.movement({ direction: 0, inc: 2 });
      const value = engine2.getDepth();
      expect(value).toEqual(60);
    });
    it("Should return the horizontal coordinate.", () => {
      engine2.reset();
      engine2.movement({ direction: 0, inc: 5 });
      engine2.movement({ direction: 2, inc: 5 });
      engine2.movement({ direction: 0, inc: 8 });
      engine2.movement({ direction: 1, inc: 3 });
      engine2.movement({ direction: 2, inc: 8 });
      engine2.movement({ direction: 0, inc: 2 });
      const value = engine2.getHorizontal();
      expect(value).toEqual(15);
    });
    it("Should return the multiplication of depth and horizontal position.", () => {
      engine2.reset();
      engine2.movement({ direction: 0, inc: 5 });
      engine2.movement({ direction: 2, inc: 5 });
      engine2.movement({ direction: 0, inc: 8 });
      engine2.movement({ direction: 1, inc: 3 });
      engine2.movement({ direction: 2, inc: 8 });
      engine2.movement({ direction: 0, inc: 2 });
      const value = engine2.getMultiply();
      expect(value).toEqual(900);
    });
    it("Should return the 'aim' from input mock.", () => {
      engine2.reset();
      engine2.exec(mockRows);
      const value = engine2.getAim();
      expect(value).toEqual(10);
    });

    it("Should return the depth coordinate from input mock.", () => {
      engine2.reset();
      engine2.exec(mockRows);
      const value = engine2.getDepth();
      expect(value).toEqual(60);
    });
    it("Should return the horizontal coordinate from input mock.", () => {
      engine2.reset();
      engine2.exec(mockRows);
      const value = engine2.getHorizontal();
      expect(value).toEqual(15);
    });
    it("Should return the multiplication of depth and horizontal position from input mock.", () => {
      engine2.reset();
      engine2.exec(mockRows);
      const value = engine2.getMultiply();
      expect(value).toEqual(900);
    });
    it("Should return the depth coordinate from input data.", () => {
      engine2.reset();
      engine2.exec(dataRows);
      const value = engine2.getDepth();
      expect(value).toEqual(997833);
    });
    it("Should return the horizontal coordinate from input data.", () => {
      engine2.reset();
      engine2.exec(dataRows);
      const value = engine2.getHorizontal();
      expect(value).toEqual(1817);
    });
    it("Should return the multiplication of depth and horizontal position from input data.", () => {
      engine2.reset();
      engine2.exec(dataRows);
      const value = engine2.getMultiply();
      expect(value).toEqual(1813062561);
    });
  });
});
