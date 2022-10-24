const Loader = require("../../src/utils/loader");
const mockPath = "./test/day_1/mock.txt";
const dataPath = "./test/day_1/data.txt";

const loader = new Loader();

describe("Loader", () => {
  describe("Basic functionality", () => {
    it("Number of rows should be correct.", () => {
      const rows = loader.load(mockPath);
      expect(rows.length).toEqual(10);
    });
    it("Number of my puzzle rows should be correct.", () => {
      const rows = loader.load(dataPath);
      expect(rows.length).toEqual(2000);
    });
  });
});
