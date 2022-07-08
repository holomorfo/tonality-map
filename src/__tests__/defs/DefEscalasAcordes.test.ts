import { calculateChords } from "../../defs/DefEscalasAcordes";

test("create default chordlist", () => {
  let chords = calculateChords();
  expect(chords.length).toBe(26);
  expect(chords[0]).toEqual([0, 4, 7]);
});
test(" create arms def list C major", () => {
  let chords = calculateChords(0, "M");
  expect(chords.length).toBe(26);
  expect(chords[0]).toEqual([0, 4, 7]);
});

test(" create arms def list a minor", () => {
  let chords = calculateChords(9, "m");
  expect(chords.length).toEqual(25);
  expect(chords[0]).toEqual([0 + 9, 3 + 9, 7 + 9]);
});
