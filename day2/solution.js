const fs = require("fs");
const path = require("path");

// Transforms raw string data into object
const transformIntoObjects = (item) => {
  const pattern = /(\d?\d)\-(\d?\d)\s([a-z])\:\s([a-z]*)/gm;
  const matchGroups = pattern.exec(item);

  return {
    min: parseInt(matchGroups[1]),
    max: parseInt(matchGroups[2]),
    char: matchGroups[3],
    password: matchGroups[4].split(""),
  };
};

// get input
const inputArray = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), {
    encoding: "utf-8",
  })
  .split("\n")
  .map((x) => transformIntoObjects(x));

// Part A
const partA = () => {
  let partAValidPasswords = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const password = inputArray[i].password;
    const char = inputArray[i].char;
    let charCount = 0;
    for (let c = 0; c < password.length; c++) {
      if (password[c] === char) {
        charCount++;
      }
    }

    if (charCount >= inputArray[i].min && charCount <= inputArray[i].max) {
      partAValidPasswords++;
    }
  }
  console.log({ partAValidPasswords }); // 586
};

// PART B
const partB = () => {
  let partBValidPasswords = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let positionsFound = 0;
    const password = inputArray[i].password;
    const char = inputArray[i].char;
    const min = inputArray[i].min;
    const max = inputArray[i].max;

    if (password[min - 1] === char) {
      positionsFound++;
    }

    if (password[max - 1] === char) {
      positionsFound++;
    }

    if (positionsFound === 1) {
      partBValidPasswords++;
    }
  }
  console.log({ partBValidPasswords }); // 352
};

partA();
partB();
