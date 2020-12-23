const fs = require("fs");
const path = require("path");

// get input
const inputArray = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), {
    encoding: "utf-8",
  })
  .trim()
  .split("\n\n")
  .map((line) => {
    return line.split("\n").join(" ");
  });

const partA = () => {
  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

  let validPassports = 0;

  for (let i = 0; i < inputArray.length; i++) {
    let codes = 0;
    for (let j = 0; j < requiredFields.length; j++) {
      if (inputArray[i].includes(requiredFields[j])) {
        codes++;
      }

      if (codes === 7) {
        validPassports++;
      }
    }
  }
  console.log({ validPassports });
};

partA();
