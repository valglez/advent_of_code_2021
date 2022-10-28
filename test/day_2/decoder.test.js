const Loader = require("../../src/utils/loader");
const Decoder = require("../../src/day_2/decoder");
const mockPath = "./test/day_2/mock.txt";

const loader = new Loader();
const decoder = new Decoder();

describe("Day 2", () => {
  const mockRows = loader.load2(mockPath);
  describe("Instructions decoder", () => {
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
    it("Should decode the instruction for 'forward'.", () => {
      const value = decoder.decode(["forward", 5]);
      expect(value).toEqual({ direction: 0, inc: 5 });
    });
    it("Should decode the instruction for 'up'.", () => {
      const value = decoder.decode(["up", 3]);
      expect(value).toEqual({ direction: 1, inc: 3 });
    });
    it("Should decode the instruction for 'down'.", () => {
      const value = decoder.decode(["down", 5]);
      expect(value).toEqual({ direction: 2, inc: 5 });
    });
    // it("Should return the coordenade for this direction.", () => {
    //   decoder.movement({ direction: 0, inc: 5 });
    //   decoder.movement({ direction: 0, inc: 10 });
    //   const value = decoder.getCoordX();
    //   expect(value).toEqual(15);
    // });
    // it("Should return the coordenade for this direction.", () => {
    //   decoder.movement({ direction: 1, inc: 3 });
    //   const value = decoder.getCoordY();
    //   expect(value).toEqual(-3);
    // });
    // it("Should return the coordenade for this direction.", () => {
    //   decoder.movement({ direction: 2, inc: 5 });
    //   decoder.movement({ direction: 2, inc: 8 });
    //   const value = decoder.getCoordY();
    //   expect(value).toEqual(10);
    // });
    it("Should return the coordenade for 'forward'.", () => {
      decoder.reset();
      decoder.exec(mockRows);
      const value = decoder.getCoordX();
      expect(value).toEqual(15);
    });
    it("Should return the coordenade for 'depth'.", () => {
      decoder.exec(mockRows);
      const value = decoder.getCoordY();
      expect(value).toEqual(10);
    });
  });
});
