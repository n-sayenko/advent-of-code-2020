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
  for (let traversed = 0; traversed * down < inputArray.length; traversed++) {
    const column = (traversed * right) % inputArray[traversed].length;
    const x = traversed * down;
    if (inputArray[x][column] === "#") {
      hit++;
    }
  }
  console.log(right, down, hit);

  return hit;
};

checkTrees(3, 1); //187

// part B

const partB = () => {
  const answer =
    checkTrees(3, 1) *
    checkTrees(1, 1) *
    checkTrees(5, 1) *
    checkTrees(7, 1) *
    checkTrees(1, 2);

  return answer;
};

console.log(partB());
