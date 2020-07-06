/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

const safeEval = require("safe-eval");

const unitsMap = {
  gal: "l",
  l: "gal",
  lbs: "kg",
  kg: "lbs",
  mi: "km",
  km: "mi",
};

function ConvertHandler() {
  this.getNum = (input) => {
    const result = safeEval(input);

    return Number(result.toFixed(5));
  };

  this.getUnit = (input) => {
    const result = input.toLowerCase();

    return result;
  };

  this.getReturnUnit = (initUnit) => {
    const result = unitsMap[initUnit.toLowerCase()];

    return result;
  };

  this.spellOutUnit = (unit) => {
    let result;

    switch (unit) {
      case "gal":
        result = "gallon";
        break;
      case "l":
        result = "litre";
        break;
      case "kg":
        result = "kilogram";
        break;
      case "lbs":
        result = "pound";
        break;
      case "mi":
        result = "mile";
        break;
      case "km":
        result = "kilometer";
        break;
      default:
        break;
    }

    return result;
  };

  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        break;
    }

    return Number(result.toFixed(5));
  };

  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    const formattedInitUnit = initNum === 1 ? `${initUnit}` : `${initUnit}s`;
    const formattedReturnUnit =
      returnNum === 1 ? `${returnUnit}` : `${returnUnit}s`;

    const result = `${initNum} ${formattedInitUnit} converts to ${returnNum} ${formattedReturnUnit}`;

    return result;
  };
}

module.exports = ConvertHandler;
