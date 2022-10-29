const Loader = require("../../src/utils/loader");
const mockPath = "./test/day_3/mock.txt";
const dataPath = "./test/day_3/data.txt";

const loader = new Loader();

describe("Loader", () => {
  describe("Basic functionality", () => {
    it("Number of rows should be correct.", () => {
      const rows = loader.load(mockPath);
      expect(rows.length).toEqual(12);
    });
    it("Number of rows should be correct.", () => {
      const rows = loader.load(dataPath);
      expect(rows.length).toEqual(1000);
    });
  });
});