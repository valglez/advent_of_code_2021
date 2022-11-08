const Loader = require("../../src/utils/loader");
const Consumption = require("../../src/day_3/consumption");

const loader = new Loader();
const mockPath = "./test/day_3/mock.txt";
const mockRows = loader.load(mockPath);
const consumption = new Consumption();

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
    it("Should be 10110.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const value = consumption.getGamma();
      expect(value).toEqual("10110");
    });
    it("Should be 22.", () => {
      const gamma = consumption.getGamma();
      const value = consumption.getDecimalGamma(gamma);
      expect(value).toEqual(22);
    });
    it("Should be 01001.", () => {
      const value = consumption.getEpsilon();
      expect(value).toEqual("01001");
    });
    it("Should be 9.", () => {
      const epsilon = consumption.getEpsilon();
      const value = consumption.getDecimalEpsilon(epsilon);
      expect(value).toEqual(9);
    });
    it("Should be 198.", () => {
      value = consumption.getMultiply();
      expect(value).toEqual(198);
    });
    it("Should be 000010111110.", () => {
      consumption.reset();
      consumption.exec(dataRows);
      const value = consumption.getGamma();
      expect(value).toEqual("000010111110");
    });
    it("Should be 190.", () => {
      const gamma = consumption.getGamma();
      const value = consumption.getDecimalGamma(gamma);
      expect(value).toEqual(190);
    });
    it("Should be 111101000001.", () => {
      const value = consumption.getEpsilon();
      expect(value).toEqual("111101000001");
    });
    it("Should be 3905.", () => {
      const epsilon = consumption.getEpsilon();
      const value = consumption.getDecimalEpsilon(epsilon);
      expect(value).toEqual(3905);
    });
    it("Should be 741950.", () => {
      value = consumption.getMultiply();
      expect(value).toEqual(741950);
    });
    it("Should be an array with the filter element by this char and position.", () => {
      consumption.reset();
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
    it("Should be the oxygen generator rating in binary.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const recd = ["10111"];
      const value = consumption.getOxygenBinary(mockRows);
      expect(value).toEqual(recd);
    });
    it("Should be the oxygen generator rating in binary.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const recd = ["101111011100"];
      const value = consumption.getOxygenBinary(dataRows);
      expect(value).toEqual(recd);
    });
    it("Should be the oxygen generator rating in decimal.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const value = consumption.getOxygen(mockRows);
      expect(value).toEqual(23);
    });
    it("Should be the oxygen generator rating in decimal.", () => {
      consumption.reset();
      consumption.exec(dataRows);
      const value = consumption.getOxygen(dataRows);
      expect(value).toEqual(191);
    });
    it("Should be an array with the filter element by this char and position.", () => {
      consumption.reset();
      const recd = ["00100", "01111", "00111", "00010", "01010"];
      const value = consumption.filterElementByCharInPosition(mockRows, 0, 0);
      expect(value).toEqual(recd);
    });
    it("Should be an array with the filter element by this char and position.", () => {
      consumption.reset();
      const input = ["00100", "01111", "00111", "00010", "01010"];
      const recd = ["01111", "01010"];
      const value = consumption.filterElementByCharInPosition(input, 1, 1);
      expect(value).toEqual(recd);
    });
    it("Should be an array with the filter element by this char and position.", () => {
      consumption.reset();
      const input = ["01111", "01010"];
      const recd = ["01010"];
      const value = consumption.filterElementByCharInPosition(input, 0, 2);
      expect(value).toEqual(recd);
    });
    it("Should be the CO2 scrubber rating in binary.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const recd = ["01010"];
      const value = consumption.getCO2Binary(mockRows);
      expect(value).toEqual(recd);
    });
    it("Should be the CO2 scrubber rating in binary.", () => {
      consumption.reset();
      consumption.exec(dataRows);
      const recd = ["111101000110"];
      const value = consumption.getCO2Binary(dataRows);
      expect(value).toEqual(recd);
    });
    it("Should be CO2 scrubber rating in decimal.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const value = consumption.getCO2(mockRows);
      expect(value).toEqual(10);
    });
    it("Should be CO2 scrubber rating in decimal.", () => {
      consumption.reset();
      consumption.exec(dataRows);
      const value = consumption.getCO2(dataRows);
      expect(value).toEqual(3910);
    });
    it("Should be the result.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const value = consumption.getResult(mockRows);
      expect(value).toEqual(230);
    });
    it("Should be the result.", () => {
      consumption.reset();
      consumption.exec(dataRows);
      const value = consumption.getResult(dataRows);
      expect(value).toEqual(746810);
    });
  });
});
