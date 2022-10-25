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
  const mock2Rows = loader.load(mock2Path);
  const dataRows = loader.load(dataPath);
  const data2Rows = loader.load(data2Path);
  describe("Depth measurement", () => {
    it("Should be the same as the resolved one.", () => {
      const value = measurement.calculate(mockRows);
      expect(value).toEqual(7);
    });
    it("Should be the same as the resolved one.", () => {
      const value = measurement.calculate(dataRows);
      expect(value).toEqual(1559);
    });
    it("Should return triple sliding arrays.", () => {
      const value = measurement.group(mock2Rows, 3);
      expect(value).toEqual([
        ["199", "200", "208"],
        ["200", "208", "210"],
        ["208", "210", "200"],
        ["210", "200", "207"],
        ["200", "207", "240"],
        ["207", "240", "269"],
        ["240", "269", "260"],
        ["269", "260", "263"],
      ]);
    });
    it("Should return an array with the sum of each triple.", () => {
      const value = measurement.sum(mock2Rows);
      expect(value).toEqual([607, 618, 618, 617, 647, 716, 769, 792]);
    });
    it("Should be the same as the resolved one.", () => {
      const sum = measurement.sum(mock2Rows)
      const value = measurement.calculate(sum);
      expect(value).toEqual(5);
    });
    it("Should be the same as the resolved one.", () => {
      const sum = measurement.sum(data2Rows)
      const value = measurement.calculate(sum);
      expect(value).toEqual(1600);
    });
  });
});
