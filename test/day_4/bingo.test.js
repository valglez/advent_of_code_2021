const Loader = require("../../src/utils/loader");
const Bingo = require("../../src/day_4/bingo");

const loader = new Loader();
const bingo = new Bingo();

const mockPath = "./test/day_4/mock.txt";
const dataPath = "./test/day_4/data.txt";

describe("Day 4", () => {
  const mockRows = loader.load3(mockPath);
  const dataRows = loader.load3(dataPath);
  describe("Test", () => {
    it("Should show an array with the bingo balls.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getBalls(num);
      expect(value).toEqual([
        7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
        18, 20, 8, 19, 3, 26, 1,
      ]);
    });
    it("Should count the number of bingo cards.", () => {
      const num = bingo.getNumbers(mockRows);
      const cards = bingo.getTotalCards(num);
      const value = cards.length;
      expect(value).toEqual(3);
    });
    it("Should return the N card.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getSingleCard(num, 1);
      expect(value).toEqual([
        22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5,
        1, 12, 20, 15, 19,
      ]);
    });
    it("Should return the N card.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getSingleCard(num, 2);
      expect(value).toEqual([
        3, 15, 0, 2, 22, 9, 18, 13, 17, 5, 19, 8, 7, 25, 23, 20, 11, 10, 24, 4,
        14, 21, 16, 12, 6,
      ]);
    });
    it("Should return the N card.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getSingleCard(num, 3);
      expect(value).toEqual([
        14, 21, 17, 24, 4, 10, 16, 15, 9, 19, 18, 8, 23, 26, 20, 22, 11, 13, 6,
        5, 2, 0, 12, 3, 7,
      ]);
    });
    it("Should return the total number of numbers that each card has.", () => {
      const num = bingo.getNumbers(mockRows);
      const card = bingo.getSingleCard(num, 3);
      const value = card.length;
      expect(value).toEqual(25);
    });
    it("Should count the number of bingo cards.", () => {
      const num = bingo.getNumbers(dataRows);
      const cards = bingo.getTotalCards(num);
      const value = cards.length;
      expect(value).toEqual(100);
    });
    it("Should return the N card.", () => {
      const num = bingo.getNumbers(dataRows);
      const value = bingo.getSingleCard(num, 0);
      expect(value).toEqual([
        42, 44, 71, 26, 70, 92, 77, 45, 6, 18, 79, 54, 31, 34, 64, 32, 16, 55,
        81, 11, 90, 10, 21, 87, 0, 84, 8, 23, 1, 12, 60, 20, 57, 68, 61, 82, 49,
        59, 22, 2, 63, 33, 50, 39, 28, 30, 88, 41, 69, 72, 98, 73, 7, 65, 53,
        35, 96, 67, 36, 4, 51, 75, 24, 86, 97, 85, 66, 29, 74, 40, 93, 58, 9,
        62, 95, 91, 80, 99, 14, 19, 43, 37, 27, 56, 94, 25, 83, 48, 17, 38, 78,
        15, 52, 76, 5, 13, 46, 89, 47, 3,
      ]);
    });
    it("Should return an array of this row with the occurrences removed for this slice.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getTotalCardsFormated(num);
      expect(value).toEqual([
        [
          22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5,
          1, 12, 20, 15, 19,
        ],
        [
          3, 15, 0, 2, 22, 9, 18, 13, 17, 5, 19, 8, 7, 25, 23, 20, 11, 10, 24,
          4, 14, 21, 16, 12, 6,
        ],
        [
          14, 21, 17, 24, 4, 10, 16, 15, 9, 19, 18, 8, 23, 26, 20, 22, 11, 13,
          6, 5, 2, 0, 12, 3, 7,
        ],
      ]);
    });
    it("Should return the total number of numbers that each card has.", () => {
      const num = bingo.getNumbers(dataRows);
      const card = bingo.getSingleCard(num, 3);
      const value = card.length;
      expect(value).toEqual(25);
    });
    it("Should return the same number of numbers for all cards.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.VerifyNumberOfNumbersCards(num);
      expect(value).toEqual(true);
    });
    it("Should return the same number of numbers for all cards.", () => {
      const num = bingo.getNumbers(dataRows);
      const value = bingo.VerifyNumberOfNumbersCards(num);
      expect(value).toEqual(true);
    });
    it("Should return the row 2 for card 1.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getCardRows(num, 1, 2);
      expect(value).toEqual([8, 2, 23, 4, 24]);
    });
    it("Should return the column 1 for card 1.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.getCardColumns(num, 1, 1);
      expect(value).toEqual([22, 8, 21, 6, 1]);
    });
    it("Should return an array with the occurrences for this slice.", () => {
      const num = bingo.getNumbers(mockRows);
      const card = 1;
      const sliceIni = 0;
      const sliceFin = 5;
      const value = bingo.getOccurrences(num, card, sliceIni, sliceFin);
      expect(value).toEqual([7, 4, 9, 5, 11]);
    });
    it("Should return an array of this row with the occurrences removed for this slice.", () => {
      const num = bingo.getNumbers(mockRows);
      const card = 1;
      const row = 1;
      const value = bingo.updateRow(num, card, row, 0, 5);
      expect(value).toEqual([22, 13, 17, 0]);
    });
    it("Should return an array of all rows with the occurrences removed for this slice.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.updateAllRows(num, 0, 5);
      expect(value).toEqual([
        [22, 13, 17, 0],
        [8, 2, 23, 24],
        [21, 14, 16],
        [6, 10, 3, 18],
        [1, 12, 20, 15, 19],
        [3, 15, 0, 2, 22],
        [18, 13, 17],
        [19, 8, 25, 23],
        [20, 10, 24],
        [14, 21, 16, 12, 6],
        [14, 21, 17, 24],
        [10, 16, 15, 19],
        [18, 8, 23, 26, 20],
        [22, 13, 6],
        [2, 0, 12, 3],
      ]);
    });
    it("Should return updated single card for this slice.", () => {
      const num = bingo.getNumbers(mockRows);
      const value = bingo.updateSingleCard(num, 1, 0, 5);
      expect(value).toEqual([
        22, 13, 17, 0, 8, 2, 23, 24, 21, 14, 16, 6, 10, 3, 18, 1, 12, 20, 15,
        19,
      ]);
    });
  });
});
