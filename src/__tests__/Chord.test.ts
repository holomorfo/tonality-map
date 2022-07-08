import { Chord } from "../Chord";

test("should create an empty harmony", () => {
  let a = new Chord();
  expect(a.notes).toEqual([]);
});

test("should create an harmony with an Array", () => {
  let a = new Chord([0, 4, 7]);
  expect(a.notes).toEqual([0, 4, 7]);
});

test("should get set simplificado of mayor chord", () => {
  let a = new Chord([0 + 12, 4 + 12, 7 + 12]);
  expect(a.notesReduced).toEqual([0, 4, 7]);
});

test("should simplify of mayor chord with repeated notes", () => {
  let a = new Chord([0 + 12, 4 + 12, 7 + 12, 4]);
  expect(a.notesReduced).toEqual([0, 4, 7]);
});

test("should set kind of chord type string", () => {
  let a = new Chord([0, 4, 7]);
  expect(a.chordDefinition.name).toEqual("M");
});

test(`should set kind of chord with 
          multiple dispositions`, () => {
  let a = new Chord([7, 4, 4 + 12, 0]);
  expect(a.chordDefinition.name).toEqual("M");
});

test("Should get inversion value on am6", () => {
  let a = new Chord([0, 4, 9]);
  expect(a.chordName()).toBe("am");
  expect(a.chordDefinition.name).toEqual("m");
  expect(a.invertion()).toEqual(1);
});

test("Should get inversion value on CM6", () => {
  let a = new Chord([64, 67, 72]);
  expect(a.chordDefinition.name).toEqual("M");
  expect(a.invertion()).toEqual(1);
});

test("Should get inversion value on CM64", () => {
  let a = new Chord([67, 64, 72]);
  expect(a.chordDefinition.name).toEqual("M");
  expect(a.invertion()).toEqual(2);
});
test("Should get inversion string value on CM64", () => {
  let a = new Chord([67, 64, 72]);
  expect(a.chordDefinition.name).toEqual("M");
  expect(a.invertion(true)).toEqual("64");
});
test("Should get inversion value on CM6 as string", () => {
  let a = new Chord([64, 67, 72]);
  expect(a.chordDefinition.name).toEqual("M");
  expect(a.invertion(true)).toEqual("6");
});

test("Should verify that two equivalent chords are equal", () => {
  let a = new Chord([64, 67, 72]);
  let b = new Chord([0, 4, 7]);
  expect(a.isEquivalent(b)).toBe(true);
  expect(b.isEquivalent(a)).toBe(true);
});

test(`Should verify that two non equivalent 
chords are different`, () => {
  let a = new Chord([64, 67, 72]);
  let b = new Chord([0, 5, 7]);
  expect(a.isEquivalent(b)).toBe(false);
  expect(b.isEquivalent(a)).toBe(false);
});

test("Should get fundamental number of a structured c# chord", () => {
  let a = new Chord([65, 68, 73]);
  expect(a.fundamental()).toBe(1);
  let b = new Chord([65, 69, 74]);
  expect(a.fundamental()).toBe(1);
  expect(b.fundamental()).toBe(2);
});

test(`Should get fundamental string of a 
structured chord with sharps #`, () => {
  let a = new Chord([65, 68, 73]);
  expect(a.fundamentalString()).toBe("c#");
});

test("Should get chord name", () => {
  let a = new Chord([65, 68, 73]);
  expect(a.chordName()).toBe("c#M");
});

test("Should test GD7 chord", () => {
  let a = new Chord([7 + 2, 0 + 2, 4 + 2, 10 + 2]);
  expect(a.fundamental()).toBe(2);
  expect(a.invertion()).toBe(2);
  expect(a.chordName()).toBe("dD7");
});

test("Should not assign structure if not identified", () => {
  let a = new Chord([1, 1, 1, 1]);
  expect(a.fundamental()).toBe(-1);
  expect(a.invertion()).toBe(-1);
  expect(a.chordName()).toBe("b*");
});
// If chord has no structure, return base
// Check notes reduced
// Check definition
// check multiple chords
