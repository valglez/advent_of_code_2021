const Loader = require("../../src/utils/loader");
const Motor = require("../../src/day_2/motor");
const Decoder = require("../../src/day_2/decoder");
const mockPath = "./test/day_2/mock.txt";

const motor = new Motor();
const loader = new Loader();
const decoder = new Decoder();

describe("Day 2", () => {
  const mockRows = loader.load2(mockPath);
  describe("Depth measurement", () => {
    it("Should be the instruction for 'forward'.", () => {
      const deco = decoder.decode(mockRows);
      const value = motor.movement(mockRows);
      expect(value).toEqual(150);
    });
  });
});
