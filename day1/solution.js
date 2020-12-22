// https://adventofcode.com/2020/day/1

const fs = require("fs");
const path = require("path");

// get input
const inputArray = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), {
    relative: true,
    encoding: "utf-8",
  })
  .split("\n")
  .map((x) => parseInt(x));

// PART A
for (let i = 0; i < inputArray.length + 1; i++) {
  const found = inputArray.find((element) => inputArray[i] + element === 2020);

  if (found) {
    console.log(inputArray[i] * found); // 996075
    break;
  }
}

// PART B
const partB = () => {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      const sumOfIJ = inputArray[i] + inputArray[j];

      if (sumOfIJ > 2020) continue;
      const found = inputArray.find((element) => 2020 - sumOfIJ === element);

      if (found) {
        console.log(inputArray[i] * inputArray[j] * found); // 51810360
      }
      break;
    }
  }
};

// measure time
const measurePartB = () => {
  console.time("partB");
  partB();
  console.timeEnd("partB");
};

measurePartB();
