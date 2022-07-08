import { calculateChords } from "./defs/DefEscalasAcordes";
import { Chord } from "./Chord";

export class Tonality {
  notes: number[] = [];
  base: number = 0;
  kind: string = "";
  defEscAcordes: number[][];

  constructor(base: number = 0, kind: string = "M") {
    //     doMRef = new Tonalidad(0, "M");
    let major = [0, 2, 4, 5, 7, 9, 11];
    //        float[] menArm = { 0, 2, 3, 5, 7, 8, 11 };
    let minorHarmonic = [0, 2, 3, 5, 7, 8, 10];

    //notasTonalidad = new float[12];
    this.notes = [];
    this.base = base;
    switch (kind) {
      case "M":
        for (let i = 0; i < major.length; i++) {
          // notasTonalidad[i] = (this.baseEsc + mayor[i]) % 12;
          this.notes.push((this.base + major[i]) % 12);
        }
        break;

      case "m":
        for (let i = 0; i < minorHarmonic.length; i++) {
          //notasTonalidad[i] = (this.baseEsc + menArm[i]) % 12;
          this.notes.push((this.base + minorHarmonic[i]) % 12);
        }
        break;
    }
    this.kind = kind;
    this.defEscAcordes = calculateChords(this.base, kind);
  }

  percentageNotes(listaNotas: number[]) {
    let numNotas = 0;
    for (let i = 0; i < listaNotas.length; i++)
      if (this.noteBelongs(listaNotas[i])) numNotas++;

    let reg = numNotas / listaNotas.length;
    return reg;
  }

  noteBelongs(notaAc: number) {
    return this.notes.indexOf(notaAc % 12) > -1;
  }

  degreeNote(notaAc: number) {
    let reg = 0;
    let grad = this.notes.indexOf(notaAc % 12);
    if (grad > -1) reg = grad + 1;
    return reg;
  }

  getTriadType(grado: number) {
    let str = "";
    let mayor = ["M", "m", "m", "M", "M", "m", "o"];
    let menor = ["m", "o", "+", "m", "M", "M", "o"];
    switch (this.kind) {
      case "M":
        str = mayor[grado % this.notes.length];
        break;
      case "m":
        str = menor[grado % this.notes.length];
        break;
    }
    return str;
  }

  distance(ton: Tonality) {
    let cuantosIgual = 0;
    if (this.notes.length == ton.notes.length) {
      for (let i = 0; i < this.notes.length; i++) {
        for (let j = 0; j < ton.notes.length; j++) {
          if (this.notes[i] == ton.notes[j]) {
            cuantosIgual++;
            break;
          }
        }
      }
    }
    return this.notes.length - cuantosIgual;
  }

  degreeChord(unArm: Chord) {
    // Check degree of a harmony with respect a tonality
    // Run through chords in tonality,

    // TODO: optimize, to avoid creating lots of chords
    let found:
      | number[]
      | undefined = this.defEscAcordes.find((notes: number[]) =>
      unArm.isEquivalent(new Chord(notes))
    );
    // check if is o7
    // check if neapolitan
    // return degree of chord
    let chord = new Chord(found);
    return this.degreeNote(Number(chord.fundamental()));
  }
}

//   gradoAcordeRomSencillo(unAcorde: Chord, escala: Tonality) {
//     let cor = this.gradoSecundario(unAcorde, escala);
//     let grado = cor.grado;
//     let es = cor.escala;
//     // System.out.println(es+"Escala.gradoArodeRomano: " + grado);
//     let gradStr = "";
//     let graS = "",
//       pertS = "";
//     // let esS = "";
//     if (grado > 0) {
//       switch (grado) {
//         case 1:
//           if (unAcorde.invertion() == 2) {
//             graS = "I"; // Aqui cambiar a K para cadencial
//           } else {
//             graS = "I";
//           }
//           break;
//         case 2:
//           if (
//             mod(12)(Number(unAcorde.fundamental(false))) ==
//             this.baseEsc + 1
//           ) {
//             // graS = "N";
//             graS = "II";
//           } else {
//             graS = "II";
//           }
//           break;
//         case 3:
//           graS = "III";
//           break;
//         case 4:
//           graS = "IV";
//           break;
//         case 5:
//           if (unAcorde.chordDefinition.name === "D7") {
//             // graS = "N";
//             graS = "DV";
//           } else {
//             graS = "V";
//           }
//           break;
//         case 6:
//           graS = "VI";
//           break;
//         case 7:
//           if (unAcorde.chordDefinition.name === "o7") {
//             // graS = "N";
//             graS = "Dvii";
//           } else {
//             graS = "VII";
//           }
//           // graS = "VII";
//           break;
//       }
//       if (escala.perteneceListaNotas(unAcorde.notesReduced) == false) {
//         //            if (escala.perteneceArmonia(unAcorde) == false)
//         pertS = "*";
//       }
//       if (es != 1) {
//         //   gradStr = pertS + graS + "" + unAcorde.inversionStr + "/"
//         //         + esS;
//       } else {
//         gradStr = pertS + "" + graS + "" + unAcorde.invertion(true);
//       }
//     } else {
//       gradStr = "";
//     }
//     return gradStr;
//   }
