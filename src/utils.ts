export const readLines = (filename: string): string[] => {
  const fileContent = Deno.readTextFileSync(filename);
  const lines = fileContent.split("\n").filter(Boolean);
  return lines;
};
