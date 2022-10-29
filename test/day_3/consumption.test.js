const Loader = require("../../src/utils/loader");
const Consumption = require("../../src/day_3/consumption");

const loader = new Loader();
const consumption = new Consumption();

const mockPath = "./test/day_3/mock.txt";
const dataPath = "./test/day_3/data.txt";

describe("Day 3", () => {
  const mockRows = loader.load(mockPath);
  const dataRows = loader.load(dataPath);
  describe("Test", () => {
    it("Should be the same as the resolved one.", () => {
      const value = consumption.getColumn(mockRows, 0);
      expect(value).toEqual([
        "0",
        "1",
        "1",
        "1",
        "1",
        "0",
        "0",
        "1",
        "1",
        "1",
        "0",
        "0",
      ]);
    });
  });
});
