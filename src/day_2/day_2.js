class Measurement {
    calculate(data) {
      let counter = 0;
      try {
        for (let i = 1; i < data.length; i++) {
          if (Number(data[i - 1]) < Number(data[i])) {
            counter++;
          }
        }
        return counter;
      } catch (error) {
        console.error("Error while calculating; ", error.message || error);
      }
    }
  }
  
  module.exports = Measurement;
  