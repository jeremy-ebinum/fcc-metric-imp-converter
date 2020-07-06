/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

// const { expect } = require("chai");

const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = (app) => {
  const convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const { input } = req.query;

    if (!input) return res.json({ error: "invalid number and unit" });

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    if (initUnit && !initNum) {
      return res.json({ error: "invalid number" });
    }

    if (initNum && !initUnit) {
      return res.json({ error: "invalid unit" });
    }

    if (!initNum && !initUnit) {
      return res.json({ error: "invalid number and unit" });
    }

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
