export interface ChordDef {
  name: string;
  notes: number[];
}
export const chordDictionary: ChordDef[] = [
  { name: "M", notes: [0, 4, 7] },
  { name: "m", notes: [0, 3, 7] },
  { name: "o", notes: [0, 3, 6] },
  { name: "+", notes: [0, 4, 8] },
  { name: "M7", notes: [0, 4, 7, 11] },
  { name: "D7", notes: [0, 4, 7, 10] },
  { name: "m7", notes: [0, 3, 7, 10] },
  { name: "o/7", notes: [0, 3, 6, 10] },
  { name: "o7", notes: [0, 3, 6, 9] },
  { name: "mM7", notes: [0, 3, 7, 11] },
  { name: "D7*5", notes: [0, 4, 10] },
  { name: "DM9*5", notes: [0, 2, 4, 10] },
  { name: "Dm9*5", notes: [0, 1, 4, 10] },

  { name: "5", notes: [0, 7] },
  { name: "Sus4", notes: [0, 5, 7] },
  { name: "Sus2", notes: [0, 2, 7] },
  { name: "9", notes: [0, 2, 4, 7, 10] },
  { name: "m9", notes: [0, 2, 3, 7, 10] },
  { name: "M9", notes: [0, 2, 4, 7, 11] },
  { name: "mM9", notes: [0, 2, 3, 7, 11] },
  { name: "11", notes: [0, 2, 4, 5, 7, 10] },
  { name: "m11", notes: [0, 2, 3, 5, 7, 10] },
  { name: "M11", notes: [0, 2, 4, 5, 7, 11] },
  { name: "mM11", notes: [0, 2, 3, 5, 7, 11] },
  { name: "13", notes: [0, 2, 4, 7, 9, 10] },
  { name: "m13", notes: [0, 2, 3, 7, 9, 10] },
  { name: "M13", notes: [0, 2, 4, 7, 9, 11] },
  { name: "mM13", notes: [0, 2, 3, 7, 9, 11] },
  { name: "add9", notes: [0, 2, 4, 7] },
  { name: "Madd9", notes: [0, 2, 3, 7] },
  { name: "6add9", notes: [0, 2, 4, 7, 9] },
  { name: "m6add9", notes: [0, 2, 3, 7, 9] },
  { name: "D7add11", notes: [0, 4, 5, 7, 10] },
  { name: "M7add11", notes: [0, 4, 5, 7, 11] },
  { name: "m7add11", notes: [0, 3, 5, 7, 10] },
  { name: "mM7add11", notes: [0, 3, 5, 7, 11] },
  { name: "D7add13", notes: [0, 4, 7, 9, 11] },
  { name: "M7add13", notes: [0, 4, 7, 9, 11] },
  { name: "m7add13", notes: [0, 3, 7, 9, 10] },
  { name: "mM7add13", notes: [0, 3, 7, 9, 11] },
  { name: "7b5", notes: [0, 4, 6, 10] },
  { name: "7#5", notes: [0, 4, 8, 10] },
  { name: "7b9", notes: [0, 1, 4, 7, 10] },
  { name: "7#9", notes: [0, 3, 4, 7, 10] },
  { name: "7#5b9", notes: [0, 1, 4, 8, 10] },
  { name: "m7#5", notes: [0, 3, 8, 10] },
  { name: "m7b9", notes: [0, 1, 3, 7, 10] },
  { name: "9#11", notes: [0, 2, 4, 6, 7, 11] },
  { name: "9b13", notes: [0, 2, 4, 7, 8, 11] },
  { name: "6sus4", notes: [0, 5, 7, 9] },

  { name: "7sus4", notes: [0, 5, 7, 10] },
  { name: "M7sus4", notes: [0, 5, 7, 11] },
  { name: "9sus4", notes: [0, 2, 5, 7, 10] },
  { name: "M9sus4", notes: [0, 2, 5, 7, 11] },

  { name: "2m", notes: [0, 1] },
  { name: "2M", notes: [0, 2] },
  { name: "3m", notes: [0, 3] },
  { name: "3M", notes: [0, 4] },
  { name: "4P", notes: [0, 5] },
  { name: "6+", notes: [0, 6] },
  { name: "5P", notes: [0, 7] },
  { name: "6m", notes: [0, 8] },
  { name: "6M", notes: [0, 9] },
  { name: "7m", notes: [0, 10] },
  { name: "7M", notes: [0, 11] },
];

export function str2Ac(tip: string) {
  const foundChord: ChordDef | undefined = chordDictionary.find(
    (e) => tip === e.name
  );
  return foundChord !== undefined ? foundChord.notes : [];
}

export function createNotesList(bas: number, tip: string) {
  const foundChord: ChordDef | undefined = chordDictionary.find(
    (e) => tip === e.name
  );
  const notes = foundChord !== undefined ? foundChord.notes : [];
  return notes.map((note) => bas + note);
}
