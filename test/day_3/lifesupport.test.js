const Loader = require("../../src/utils/loader");
const Consumption = require("../../src/day_3/consumption");
const LifeSupport = require("../../src/day_3/lifesupport");

const loader = new Loader();
const consumption = new Consumption();
const lifesupport = new LifeSupport();

const mockPath = "./test/day_3/mock.txt";
const dataPath = "./test/day_3/data.txt";

describe("Day 3", () => {
  const mockRows = loader.load(mockPath);
  const dataRows = loader.load(dataPath);
  describe("Test", () => {
    // it("Should be the most common bit for this column.", () => {
    //   const colArray = consumption.getColumn(mockRows, 0);
    //   const value = consumption.getMostCommonBit(colArray);
    //   expect(value).toEqual("1");
    // });
    // it("Should be the 7 numbers with a 1 in the first position.", () => {
    //   const recd = [
    //     "11110",
    //     "10110",
    //     "10111",
    //     "10101",
    //     "11100",
    //     "10000",
    //     "11001",
    //   ];
    //   const colArray = consumption.getColumn(mockRows, 0);
    //   const mcb = consumption.getMostCommonBit(colArray);
    //   const value = lifesupport.check1stPosition(mockRows, mcb);
    //   expect(value).toEqual(recd);
    // });
    // it("Should be the 4 numbers with a 0 in the second position.", () => {
    //   const recd = ["10110", "10111", "10101", "10000"];
    //   const colArray = consumption.getColumn(mockRows, 0);
    //   const mcb = consumption.getMostCommonBit(colArray);
    //   const first = lifesupport.check1stPosition(mockRows, mcb);
    //   const value = lifesupport.checkMostCommon2ndBit(first);
    //   expect(value).toEqual(recd);
    // });
    // it("Should be the 3 numbers with a 1 in the third position.", () => {
    //   const recd = ["10110", "10111", "10101"];
    //   const colArray = consumption.getColumn(mockRows, 0);
    //   const mcb = consumption.getMostCommonBit(colArray);
    //   const first = lifesupport.check1stPosition(mockRows, mcb);
    //   const second = lifesupport.checkMostCommon2ndBit(first);
    //   const value = lifesupport.checkMostCommon3rdBit(second);
    //   expect(value).toEqual(recd);
    // });
    // it("Should be the 3 numbers with a 1 in the third position.", () => {
    //   const recd = ["10110", "10111"];
    //   const colArray = consumption.getColumn(mockRows, 0);
    //   const mcb = consumption.getMostCommonBit(colArray);
    //   const first = lifesupport.check1stPosition(mockRows, mcb);
    //   const second = lifesupport.checkMostCommon2ndBit(first);
    //   const third = lifesupport.checkMostCommon3rdBit(second);
    //   const value = lifesupport.checkMostCommon4thBit(third);
    //   expect(value).toEqual(recd);
    // });
    it("Should be the 3 numbers with a 1 in the third position.", () => {
      const recd = ["10111"];
      const colArray = consumption.getColumn(mockRows, 0);
      const mcb = consumption.getMostCommonBit(colArray);
      const first = lifesupport.check1stPosition(mockRows, mcb);
      const second = lifesupport.checkMostCommon2ndBit(first);
      const third = lifesupport.checkMostCommon3rdBit(second);
      const fourth = lifesupport.checkMostCommon4thBit(third);
      const value = lifesupport.checkMostCommon5thBit(fourth)
      expect(value).toEqual(recd);
    });
  });
});
