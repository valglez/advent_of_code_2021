const Loader = require("../../src/utils/loader");
const Bingo = require("../../src/day_4/bingo");

const loader = new Loader();
const bingo = new Bingo();

const mockPath = "./test/day_4/mock.txt";
const dataPath = "./test/day_4/data.txt";

describe("Day 4", () => {
  const mockRows = loader.load3(mockPath);
  const dataRows = loader.load(dataPath);
  describe("Test", () => {
    it("Should show an array with the bingo balls.", () => {
      console.log(mockRows);
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getBalls(num);
      expect(value).toEqual([
        "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1",
      ]);
    });
    it("Should count the number of bingo cards.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getNumberOfCards(num);
      expect(value).toEqual(3);
    });
    // it("Should return the N card.", () => {
    //   const num = bingo.getNumbers(mockRows);
    //   const value = bingo.getSingleCard(num, 1);
    //   expect(value).toEqual(0);
    // });
  });
});
