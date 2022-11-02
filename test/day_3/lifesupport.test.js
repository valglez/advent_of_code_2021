const Loader = require("../../src/utils/loader");
const Consumption = require("../../src/day_3/consumption");
const LifeSupport = require("../../src/day_3/lifesupport");

const loader = new Loader();
const consumption = new Consumption();
const lifesupport = new LifeSupport(consumption);

const mockPath = "./test/day_3/mock.txt";
const dataPath = "./test/day_3/data.txt";

describe("Day 3", () => {
  const mockRows = loader.load(mockPath);
  const dataRows = loader.load(dataPath);
  describe("Test", () => {
    it("Should be 10110.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const value = consumption.getGamma();
      expect(value).toEqual("10110");
    });
    it("Should be an array of each most common bit.", () => {
      consumption.reset();
      consumption.exec(mockRows);
      const gamma = consumption.getGamma();
      const value = lifesupport.mcbArrayFormat(gamma);
      expect(value).toEqual(["1", "0", "1", "1", "0"]);
    });
    it("Should be 000010111110.", () => {
      consumption.reset();
      consumption.exec(dataRows);
      const value = consumption.getGamma();
      expect(value).toEqual("000010111110");
    });
    it("Should be an array of each most common bit.", () => {
      consumption.reset();
      consumption.exec(dataRows);
      const recd = ["0", "0", "0", "0", "1", "0", "1", "1", "1", "1", "1", "0"];
      const gamma = consumption.getGamma();
      const value = lifesupport.mcbArrayFormat(gamma);
      expect(value).toEqual(recd);
    });
    it("Should be the numbers with the MCB in the first position.", () => {
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
      consumption.exec(mockRows);
      const gamma = consumption.getGamma();
      lifesupport.checkPosition(mockRows, gamma[0]);
      const value = lifesupport.result();
      expect(value).toEqual(recd);
    });
  });
});
