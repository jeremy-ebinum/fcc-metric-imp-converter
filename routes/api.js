/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

// const { expect } = require("chai");
const safeEval = require("safe-eval");
const ConvertHandler = require("../controllers/convertHandler.js");

const units = ["gal", "l", "lbs", "kg", "mi", "km"];

const testInvalidNum = (str) => {
  let result = false;

  if (/[^0-9./]/.test(str)) result = true;

  if (/$([\D])/.test(str)) result = true;

  if ((str.match(/\./g) || []).length > 1) result = true;

  if ((str.match(/\//g) || []).length > 1) result = true;

  try {
    safeEval(str);
  } catch (e) {
    result = true;
  }

  return result;
};

module.exports = (app) => {
  const convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const { input } = req.query;

    let num;

    if (!input) return res.json({ error: "Invalid number and unit" });

    const unitIndex = input.search(/[a-z]/i);

    if (unitIndex === -1) return res.json({ error: "no unit" });

    const unit = input.slice(unitIndex);

    if (unitIndex === 0) num = 1;
    else num = input.slice(0, unitIndex);

    const unitIsInvalid = !units.includes(unit.toLowerCase());
    const numIsInvalid = testInvalidNum(num);

    if (numIsInvalid && !unitIsInvalid) {
      return res.json({ error: "Invalid number" });
    }

    if (unitIsInvalid && !numIsInvalid) {
      return res.json({ error: "Invalid unit" });
    }

    if (unitIsInvalid && numIsInvalid) {
      return res.json({ error: "Invalid number and unit" });
    }

    const initNum = convertHandler.getNum(num);
    const initUnit = convertHandler.getUnit(unit);
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const toString = convertHandler.getString(
      initNum,
      convertHandler.spellOutUnit(initUnit),
      returnNum,
      convertHandler.spellOutUnit(returnUnit)
    );

    return res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: toString,
    });
  });
};
