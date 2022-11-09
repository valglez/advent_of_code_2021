const Loader = require("../../src/utils/loader");
const Bingo = require("../../src/day_4/bingo");

const loader = new Loader();
const bingo = new Bingo();

const mockPath = "./test/day_4/mock.txt";
const dataPath = "./test/day_4/data.txt";

describe("Day 4", () => {
  const mockRows = loader.load(mockPath);
  const dataRows = loader.load(dataPath);
  describe("Test", () => {
    it("Test.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getBalls(num);
      expect(value).toEqual([
        "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1",
      ]);
    });
  });
});
