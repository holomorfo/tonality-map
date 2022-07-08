import { ChordDef, chordDictionary } from "./defs/DefAcordesJazz";
import { mod, equalArr, num2nota12 } from "./defs/Oper";

export class Chord {
  notes: number[] = [];
  notesReduced: number[] = [];
  chordDefinition: ChordDef = { name: "*", notes: [] };
  invertionValue: number;
  fundamentalValue: number = -1;
  isSeventh: boolean = false;

  constructor(notes: number[] = []) {
    this.notes = notes;
    this.notesReduced = notes
      // Modulo 12
      .map(mod(12))
      // Remove duplicates
      .filter((v, i, mod12) => mod12.indexOf(v) === i);

    let substract = 0;
    const foundChord: ChordDef | undefined = chordDictionary
      // Find if belongs in chord li>st
      .find((e) => {
        const { condition, minus } = this._belongsInList(e.notes);
        substract = condition ? minus : 0;
        return condition;
      });
    if (foundChord !== undefined) this.chordDefinition = foundChord;
    this.fundamentalValue = this._calculateFundamental(substract);
    this.invertionValue = this._calculateInversion(substract);
  }

  _belongsInList(notes: number[]) {
    let minus = 0;
    const foundChord = this.notesReduced
      // Search in chords dabases
      .find((note, _, ls) => {
        // substract each of the components of note simplified
        const substracted = ls.map((e) => mod(12)(e - note));
        substracted.sort((a, b) => a - b);
        minus = note;
        return equalArr(notes, substracted);
      });
    return { condition: foundChord !== undefined, minus };
  }

  _calculateFundamental(substract: number) {
    let index = -1;
    this.notes.forEach((val, i) => {
      if (mod(12)(val) === mod(12)(this.chordDefinition.notes[0] + substract))
        index = i;
    });

    return index > -1 ? mod(12)(this.notes[index]) : -1;
  }
  _calculateInversion(substract: number) {
    // Check which part of the structure the base note is is
    // Only checks the fundamental
    // TODO: set parts of other voices
    let bass = mod(12)(this.notes[0]);
    let index = -1;

    this.chordDefinition.notes.find((val, i) => {
      const cond = mod(12)(val + substract) === bass;
      if (cond) index = i;
      return cond;
    });
    return index;
  }

  _invertionString(invertion: number) {
    return ["", "6", "64"][invertion];
  }

  // TODO: separate into two functions
  invertion(isString: boolean = false) {
    const fundNum = this.invertionValue;
    return isString ? this._invertionString(fundNum) : fundNum;
  }

  isEquivalent(chord: Chord) {
    // Change to compare fundamentaland string
    return (
      mod(12)(this.fundamental()) === mod(12)(chord.fundamental()) &&
      this.chordDefinition.name === chord.chordDefinition.name
    );
  }

  // TODO: separate into two functions
  fundamentalString(accidental: string = "s") {
    return num2nota12(this.fundamentalValue, accidental);
  }

  fundamental() {
    return this.fundamentalValue;
  }
  chordName() {
    // TODO: #8 add and check fundamental
    return this.fundamentalString() + "" + this.chordDefinition.name;
  }
}
