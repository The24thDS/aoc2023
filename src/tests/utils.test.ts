import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

import { readLines } from "../utils.ts";

Deno.test("readLines", async (t) => {
  await t.step("should read lines from a file", () => {
    const filename = "src/tests/lines.txt";
    const lines = readLines(filename);
    assertEquals(lines, ["line 1", "line 2", "line 3"]);
  });
  await t.step("should return an empty array if the file is empty", () => {
    const filename = "src/tests/empty.txt";
    const lines = readLines(filename);
    assertEquals(lines, []);
  });
});
