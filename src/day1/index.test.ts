import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

import { part1, part2 } from "./index.ts";

Deno.test("day1", async (t) => {
  await t.step("part1", () => {
    const testInput = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`
      .split("\n")
      .filter(Boolean);
    assertEquals(part1(testInput), 142);
  });
  await t.step("part2 - test 1", () => {
    const testInput = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`
      .split("\n")
      .filter(Boolean);
    assertEquals(part2(testInput), 281);
  });
  await t.step("part2 - test 2", () => {
    const testInput = `
5ccchkjzvqh7
jdpnjqg3five48xmmptkzmvg
rgn146nineseven4six
eightonetwohsxms8six94
eight4znfqgsftghtrhfkvj
btmk5834eight8mlcccnrzrb
15ninemhmhmqlb
85skmrvhl74
dbvhkthj4
one6keight`
      .split("\n")
      .filter(Boolean);
    const values = [57, 38, 16, 84, 84, 58, 19, 84, 44, 18];
    assertEquals(testInput.length, values.length);
    assertEquals(
      part2(testInput),
      values.reduce((a, b) => a + b, 0)
    );
  });
});
