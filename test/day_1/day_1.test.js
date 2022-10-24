const Loader = require("../../src/utils/loader");
const Measurement = require("../../src/day_1/day_1");
const mockPath = "./test/day_1/mock.txt";
const mock2Path = "./test/day_1/mock_2.txt";
const dataPath = "./test/day_1/data.txt";
const data2Path = "./test/day_1/data_2.txt";

const loader = new Loader();
const measurement = new Measurement();

describe("Day 1", () => {
  const mockRows = loader.load(mockPath);
  const dataRows = loader.load(dataPath);
  describe("Depth measurement", () => {
    it("Should be the same as the resolved one.", () => {
      const value = measurement.calculate(mockRows);
      expect(value).toEqual(7);
    });
    it("Should be the same as the resolved one.", () => {
      const value = measurement.calculate(dataRows);
      expect(value).toEqual(1559);
    });
  });
});
