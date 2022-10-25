const Loader = require("../../src/utils/loader");
const Coordinates = require("../../src/day_2/coordinates");
const mockPath = "./test/day_2/mock.txt";

const loader = new Loader();
const coordinates = new Coordinates();

describe("Day 2", () => {
  const mockRows = loader.load2(mockPath);
  describe("Depth measurement", () => {
    it("Should be the same as the resolved one.", () => {
      const value = coordinates.group(mockRows);
      expect(value).toEqual([
        ["forward", "5"],
        ["down", "5"],
        ["forward", "8"],
        ["up", "3"],
        ["down", "8"],
        ["forward", "2"],
      ]);
    });
  });
});
