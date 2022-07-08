import { UniversoTonal } from "../UniversoTonal";
import { Chord } from "../Chord";

test(`Create default tonal university
it should have 24 tonalityies in dictonary`, () => {
  let u = new UniversoTonal();
  //   console.log(u);
  expect(u.universeDictionary.length).toBe(24);
  expect(u.tonalityMain.name).toBe("CM");
});

test("Should set main tonality with function", () => {
  let u = new UniversoTonal();
  u.changeMainTonality("Am");

  expect(u.getMainTonality().base).toBe(9);
  expect(u.getMainTonality().kind).toBe("m");
});

test("Should get tonality main from function", () => {
  let u = new UniversoTonal();
  u.changeMainTonality("G#m");
  expect(u.getMainTonality().base).toBe(8);
  expect(u.getMainTonality().kind).toBe("m");
});

test("Should get tonality by name string", () => {
  let u = new UniversoTonal();
  expect(u.getTonalityByName("FM")?.base).toBe(5);
  expect(u.getTonalityByName("FM")?.kind).toBe("M");
  expect(u.getTonalityByName("Dm")?.base).toBe(2);
  expect(u.getTonalityByName("Dm")?.kind).toBe("m");
});

test("Should return undefined if tonality name not valid", () => {
  let u = new UniversoTonal();
  expect(u.getTonalityByName("FxM")).toBe(undefined);
});

test("Should calculate functions of CM chord", () => {
  let u = new UniversoTonal();
  let chord = new Chord([0, 3, 7]);
  let coord = u.calculateFunctions(chord);

  expect(coord.length).toBe(24);
  expect(coord[0][0]).toBe(0);
  expect(coord[3][0]).toBe(6);
});

test("Should print csv table from funcitonality", () => {
  let u = new UniversoTonal();
  let chord = new Chord([0, 3, 7]);
  let table = u.calculateTableCSV(chord);

  expect(typeof table).toBe("string");
});
