import { numRomano, num2nota12 } from "../../defs/Oper";

test("Should convert integer to roman string", () => {
  expect(numRomano(1)).toMatch("I");
  expect(numRomano(2)).toMatch("II");
  expect(numRomano(3)).toMatch("III");
  expect(numRomano(4)).toMatch("IV");
  expect(numRomano(5)).toMatch("V");
  expect(numRomano(6)).toMatch("VI");
  expect(numRomano(7)).toMatch("VII");
  expect(numRomano(0)).toMatch("*");
  expect(numRomano(8)).toMatch("*");
});

test("Should convert number to string note", () => {
  expect(num2nota12(0)).toMatch("c");
  expect(num2nota12(1)).toMatch("c#");
  expect(num2nota12(2)).toMatch("d");
  expect(num2nota12(3)).toMatch("d#");
  expect(num2nota12(4)).toMatch("e");
  expect(num2nota12(5)).toMatch("f");
  expect(num2nota12(6)).toMatch("f#");
  expect(num2nota12(7)).toMatch("g");
  expect(num2nota12(8)).toMatch("g#");
  expect(num2nota12(9)).toMatch("a");
  expect(num2nota12(10)).toMatch("a#");
  expect(num2nota12(11)).toMatch("b");
  // flat

  expect(num2nota12(0, "b")).toMatch("c");
  expect(num2nota12(1, "b")).toMatch("db");
  expect(num2nota12(2, "b")).toMatch("d");
  expect(num2nota12(3, "b")).toMatch("eb");
  expect(num2nota12(4, "b")).toMatch("e");
  expect(num2nota12(5, "b")).toMatch("f");
  expect(num2nota12(6, "b")).toMatch("gb");
  expect(num2nota12(7, "b")).toMatch("g");
  expect(num2nota12(8, "b")).toMatch("ab");
  expect(num2nota12(9, "b")).toMatch("a");
  expect(num2nota12(10, "b")).toMatch("bb");
  expect(num2nota12(11, "b")).toMatch("b");
  expect(num2nota12(11, "b")).toMatch("b");
});

test("Should return original note if accidental is not s or b", () => {
  expect(num2nota12(0, "x")).toMatch("");
});
