import { readLines } from "../utils.ts";

export const part1 = (lines: string[]): number => {
  const numbersMatrix = lines.map((line) =>
    line.split("").map(Number).filter(Number)
  );
  const calibrationValues = numbersMatrix.map(
    (numbers) => numbers.at(0)! * 10 + numbers.at(-1)!
  );
  // console.log(lines);
  const sum = calibrationValues.reduce((a, b) => a + b, 0);
  return sum;
};

const replaceWordWithNumber = (line: string): string => {
  return line
    .replace("one", "1")
    .replace("two", "2")
    .replace("three", "3")
    .replace("four", "4")
    .replace("five", "5")
    .replace("six", "6")
    .replace("seven", "7")
    .replace("eight", "8")
    .replace("nine", "9");
};

export const part2 = (lines: string[]): number => {
  // "xtwone3four" -> "x2ne34", not "xtw134"
  const fixedLines = lines.map((line) =>
    line
      .split("")
      .slice(2)
      .reduce(
        (prev, curr) => replaceWordWithNumber(prev + curr),
        line.slice(0, 2)
      )
  );
  return part1(fixedLines);
};

const main = () => {
  console.log("Day 1\n-----");
  const input = readLines("src/day1/input.txt");
  const result = part1(input);
  console.log(`  Part 1: ${result}`);
  const result2 = part2(input);
  console.log(`  Part 2: ${result2}`);
};

export default main;
