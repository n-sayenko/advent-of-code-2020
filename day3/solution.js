const fs = require("fs");
const path = require("path");

// get input
const inputArray = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), {
    relative: true,
    encoding: "utf-8",
  })
  .split("\n")
  .map((x) => x.split(""));

// Part A
const checkTrees = (right, down) => {
  let hit = 0;
  for (let traversed = 0; traversed < inputArray.length; traversed += down) {
    const column = (traversed * right) % inputArray[traversed].length;
    if (inputArray[traversed][column] === "#") {
      hit++;
    }
  }
  console.log(right, down, hit);

  return hit;
};

checkTrees(3, 1); //187
