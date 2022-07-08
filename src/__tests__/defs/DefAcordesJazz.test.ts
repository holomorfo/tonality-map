import * as chords from "../../defs/DefAcordesJazz";

test("should create arms def list", () => {
  let a = chords.chordDictionary;
  expect(a.length).toBe(65);
});

test("should create empty chord array if not valid string entered", () => {
  let a = chords.createNotesList(7, "x");
  expect(a).toEqual([]);
});

test("should create chord from base and string", () => {
  let a = chords.createNotesList(7, "M");
  expect(a).toEqual([7, 11, 14]);
});

test("should create empty chord from not valid string", () => {
  let a = chords.str2Ac("x");
  expect(a).toEqual([]);
});
test("should create chord from string", () => {
  let a = chords.str2Ac("M");
  expect(a).toEqual([0, 4, 7]);
});

test("should create Sus4 chord from string", () => {
  let a = chords.str2Ac("Sus4");
  expect(a).toEqual([0, 5, 7]);
});
