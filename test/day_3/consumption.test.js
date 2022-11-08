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
    it("Should be the array for this column.", () => {
      const recd = ["0", "1", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"];
      const value = consumption.getColumn(mockRows, 0);
      expect(value).toEqual(recd);
    });
    it("Should be the most common bit for this column array.", () => {
      const col = ["0", "1", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"];
      const value = consumption.getMostCommonBit(col);
      expect(value).toEqual("1");
    });
    it("Should be the most common bit for this column.", () => {
      consumption.reset();
      const colArray = consumption.getColumn(mockRows, 0);
      const value = consumption.getMostCommonBit(colArray);
      expect(value).toEqual("1");
    });
    it("Should be the most common bit for this column.", () => {
      consumption.reset();
      const colArray = consumption.getColumn(mockRows, 1);
      const value = consumption.getMostCommonBit(colArray);
      expect(value).toEqual("0");
    });
    it("Should be the least common bit for this column array.", () => {
      consumption.reset();
      const col = ["0", "1", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0"];
      const value = consumption.getLeastCommonBit(col);
      expect(value).toEqual("0");
    });
    it("Should be the least common bit for this column.", () => {
      consumption.reset();
      const colArray = consumption.getColumn(mockRows, 0);
      const value = consumption.getLeastCommonBit(colArray);
      expect(value).toEqual("0");
    });
    it("Should be the least common bit for this column.", () => {
      consumption.reset();
      const colArray = consumption.getColumn(mockRows, 1);
      const value = consumption.getLeastCommonBit(colArray);
      expect(value).toEqual("1");
    });
    it("Should be the gamma rate in binary.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const value = consumption.getGamma();
      expect(value).toEqual("10110");
    });
    it("Should be the gamma rate in decimal.", () => {
      const value = consumption.getDecimalGamma();
      expect(value).toEqual(22);
    });
    it("Should be the epsilon rate in binary.", () => {
      const value = consumption.getEpsilon();
      expect(value).toEqual("01001");
    });
    it("Should be the epsilon rate in decimal.", () => {
      const value = consumption.getDecimalEpsilon();
      expect(value).toEqual(9);
    });
    it("Should be the multiplication of the gamma rate and the epsilon rate.", () => {
      value = consumption.getGammaEpsilonMultiply();
      expect(value).toEqual(198);
    });
    it("Should be the gamma rate in binary.", () => {
      consumption.reset();
      consumption.exec(dataRows);
      const value = consumption.getGamma();
      expect(value).toEqual("000010111110");
    });
    it("Should be the gamma rate in decimal.", () => {
      const value = consumption.getDecimalGamma();
      expect(value).toEqual(190);
    });
    it("Should be the epsilon rate in binary.", () => {
      const value = consumption.getEpsilon();
      expect(value).toEqual("111101000001");
    });
    it("Should be the decimal rate in binary.", () => {
      const value = consumption.getDecimalEpsilon();
      expect(value).toEqual(3905);
    });
    it("Should be the multiplication of the gamma rate and the epsilon rate.", () => {
      value = consumption.getGammaEpsilonMultiply();
      expect(value).toEqual(741950);
    });
    it("Should be an array with the filter element by this char and position.", () => {
      const recd = [
        "11110",
        "10110",
        "10111",
        "10101",
        "11100",
        "10000",
        "11001",
      ];
      const value = consumption.filterElementByCharInPosition(mockRows, 1, 0);
      expect(value).toEqual(recd);
    });
    it("Should be the most common bit for this column.", () => {
      const col = consumption.getColumn(mockRows, 0);
      const value = consumption.getMostCommonBitForCriteria(col);
      expect(value).toEqual("1");
    });
    it("Should be the oxygen generator rating in binary.", () => {
      const value = consumption.getOxygenBinary(mockRows);
      expect(value).toEqual(["10111"]);
    });
    it("Should be the oxygen generator rating in binary.", () => {
      const value = consumption.getOxygenBinary(dataRows);
      expect(value).toEqual(["000100011010"]);
    });
    it("Should be the oxygen generator rating in decimal.", () => {
      const value = consumption.getDecimalOxygen(mockRows);
      expect(value).toEqual(23);
    });
    it("Should be the oxygen generator rating in decimal.", () => {
      const value = consumption.getDecimalOxygen(dataRows);
      expect(value).toEqual(282);
    });
    it("Should be the most common bit for this column.", () => {
      const col = consumption.getColumn(mockRows, 0);
      const value = consumption.getLeastCommonBitForCriteria(col);
      expect(value).toEqual("0");
    });
    it("Should be the oxygen generator rating in binary.", () => {
      const value = consumption.getCO2Binary(mockRows);
      expect(value).toEqual(["01010"]);
    });
    it("Should be the oxygen generator rating in binary.", () => {
      const value = consumption.getCO2Binary(dataRows);
      expect(value).toEqual(["110010000101"]);
    });
    it("Should be CO2 scrubber rating in decimal.", () => {
      const value = consumption.getDecimalCO2(mockRows);
      expect(value).toEqual(10);
    });
    it("Should be CO2 scrubber rating in decimal.", () => {
      const value = consumption.getDecimalCO2(dataRows);
      expect(value).toEqual(3205);
    });
    it("Should be the multiplication of the oxygen generator rate and the CO2 scrubber rate.", () => {
      const value = consumption.getOxygenCO2Multiply(mockRows);
      expect(value).toEqual(230);
    });
    it("Should be the multiplication of the oxygen generator rate and the CO2 scrubber rate.", () => {
      const value = consumption.getOxygenCO2Multiply(dataRows);
      expect(value).toEqual(903810);
    });
  });
});
