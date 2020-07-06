/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require("chai");

const { assert } = chai;
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
      const input = "1.5L";
      assert.equal(convertHandler.getNum(input), 1.5);
      done();
    });

    test("Fractional Input", (done) => {
      const input = "1/2L";
      assert.approximately(convertHandler.getNum(input), 0.5, 0.1);
      done();
    });

    test("Fractional Input w/ Decimal", (done) => {
      const input = "2.5/6L";
      assert.approximately(convertHandler.getNum(input), 0.41667, 0.1);
      done();
    });

    test("Invalid Input (double fraction)", (done) => {
      const input = "3/7.2/4kg";
      assert.isNull(convertHandler.getNum(input));
      done();
    });

    test("No Numerical Input", (done) => {
      const input = "kg";
      assert.equal(convertHandler.getNum(input), 1);
      done();
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
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase());
      });
      done();
    });

    test("Unknown Unit Input", (done) => {
      const input = "32g";
      assert.isNull(convertHandler.getUnit(input));
      done();
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
      const input = ["gal", "l", "mi", "km", "lbs", "kg"];
      const expect = [
        "gallon",
        "litre",
        "mile",
        "kilometer",
        "pound",
        "kilogram",
      ];
      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
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
      const input = [18.9271, "L"];
      const expected = 5;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Mi to Km", (done) => {
      const input = [10, "mi"];
      const expected = 16.0934;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Km to Mi", (done) => {
      const input = [16.0934, "km"];
      const expected = 10;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Lbs to Kg", (done) => {
      const input = [120, "lbs"];
      const expected = 54.43104;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Kg to Lbs", (done) => {
      const input = [54.43104, "kg"];
      const expected = 120;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
  });
});
