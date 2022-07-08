import { Tonality } from "../Tonality";
import { Chord } from "../Chord";

//  🇵🇷

test("should create a default tonality CM", () => {
  let t = new Tonality();
  expect(t.notes).toEqual([0, 2, 4, 5, 7, 9, 11]);
  expect(t.base).toBe(0);
  expect(t.kind).toEqual("M");
});

test("should create  tonality Cm", () => {
  let t = new Tonality(0, "m");
  expect(t.notes).toEqual([0, 2, 3, 5, 7, 8, 10]);
  expect(t.base).toBe(0);
  expect(t.kind).toEqual("m");
});

test("should calculate distance between tonalities", () => {
  let cM = new Tonality(0, "M");
  let gM = new Tonality(7, "M");
  expect(cM.distance(gM)).toEqual(1);
});

test("should get degrees of tonality notes in Major", () => {
  let cM = new Tonality(0, "M");
  expect(cM.degreeNote(0)).toEqual(1);
  expect(cM.degreeNote(2)).toEqual(2);
  expect(cM.degreeNote(4)).toEqual(3);
  expect(cM.degreeNote(5)).toEqual(4);
  expect(cM.degreeNote(7)).toEqual(5);
  expect(cM.degreeNote(9)).toEqual(6);
  expect(cM.degreeNote(11)).toEqual(7);
});

test("should check if notes belong to C Mayor tonality", () => {
  let cM = new Tonality(0, "M");
  expect(cM.noteBelongs(0)).toBe(true);
  expect(cM.noteBelongs(1 + 12)).toBe(false);
  expect(cM.noteBelongs(2 + 12 * 3)).toBe(true);
  expect(cM.noteBelongs(3)).toBe(false);
  expect(cM.noteBelongs(4 + 12 * 4)).toBe(true);
  expect(cM.noteBelongs(5)).toBe(true);
  expect(cM.noteBelongs(6 + 12)).toBe(false);
  expect(cM.noteBelongs(7)).toBe(true);
  expect(cM.noteBelongs(8)).toBe(false);
  expect(cM.noteBelongs(9 + 12 * 2)).toBe(true);
  expect(cM.noteBelongs(10)).toBe(false);
  expect(cM.noteBelongs(11)).toBe(true);
});

test("should return percentage of notes belonging on tonality", () => {
  let cM = new Tonality(0, "M");
  let notes = [0, 1, 2, 3, 4];
  expect(cM.percentageNotes(notes)).toBe(0.6);
});

test("Should check kind of triad number degree number, CM", () => {
  let cM = new Tonality(0, "M");
  expect(cM.getTriadType(0)).toBe("M");
  expect(cM.getTriadType(1)).toBe("m");
  expect(cM.getTriadType(2)).toBe("m");
  expect(cM.getTriadType(3)).toBe("M");
  expect(cM.getTriadType(4)).toBe("M");
  expect(cM.getTriadType(5)).toBe("m");
  expect(cM.getTriadType(6)).toBe("o");
});

test("Should check kind of triad number degree number, am", () => {
  let am = new Tonality(9, "m");
  expect(am.getTriadType(0)).toBe("m");
  expect(am.getTriadType(1)).toBe("o");
  expect(am.getTriadType(2)).toBe("+");
  expect(am.getTriadType(3)).toBe("m");
  expect(am.getTriadType(4)).toBe("M");
  expect(am.getTriadType(5)).toBe("M");
  expect(am.getTriadType(6)).toBe("o");
});

test("Should return degree of chord", () => {
  let cM = new Tonality(0, "M");
  // const chord = new Chord([0, 4, 7]);
  const chordAmin = new Chord([0, 4, 9]);
  const chordBdim = new Chord([2, 5, 11]);
  // expect(cM.gradoSencillo(chord)).toBe(1);
  expect(cM.degreeChord(chordAmin)).toBe(6);
  expect(cM.degreeChord(chordBdim)).toBe(7);
});
