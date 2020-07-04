/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require("chai");

const { assert } = chai;
const { suite, test } = require("mocha");
const ConvertHandler = require("../controllers/convertHandler.js");

const convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  suite("Function convertHandler.getNum(input)", () => {
    test("Whole number input", (done) => {
      const input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", (done) => {
      // done();
    });

    test("Fractional Input", (done) => {
      // done();
    });

    test("Fractional Input w/ Decimal", (done) => {
      // done();
    });

    test("Invalid Input (double fraction)", (done) => {
      // done();
    });

    test("No Numerical Input", (done) => {
      // done();
    });
  });

  suite("Function convertHandler.getUnit(input)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      const input = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG",
      ];
      input.forEach((ele) => {
        // assert
      });
      done();
    });

    test("Unknown Unit Input", (done) => {
      // done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      const input = ["gal", "l", "mi", "km", "lbs", "kg"];
      const expect = ["l", "gal", "km", "mi", "kg", "lbs"];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", () => {
    test("For Each Valid Unit Inputs", (done) => {
      // see above example for hint
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", () => {
    test("Gal to L", (done) => {
      const input = [5, "gal"];
      const expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); // 0.1 tolerance
      done();
    });

    test("L to Gal", (done) => {
      // done();
    });

    test("Mi to Km", (done) => {
      // done();
    });

    test("Km to Mi", (done) => {
      // done();
    });

    test("Lbs to Kg", (done) => {
      // done();
    });

    test("Kg to Lbs", (done) => {
      // done();
    });
  });
});
