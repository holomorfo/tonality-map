import { Tonality } from "./Tonality";
import { Chord } from "./Chord";
// import Armonia from "./Armonia";
// import CoordenadaTonal from "./CoordenadaTonal";
// import { mod } from "./defs/Oper";
const dictStringTonality: TonalityInfo[] = [
  { name: "CM", base: 0, kind: "M" },
  // TODO: implement alternate names
  { name: "C#M", base: 1, kind: "M" },
  { name: "DM", base: 2, kind: "M" },
  { name: "D#M", base: 3, kind: "M" },
  { name: "EM", base: 4, kind: "M" },
  { name: "FM", base: 5, kind: "M" },
  { name: "F#M", base: 6, kind: "M" },
  { name: "GM", base: 7, kind: "M" },
  { name: "G#M", base: 8, kind: "M" },
  { name: "AM", base: 9, kind: "M" },
  { name: "A#M", base: 10, kind: "M" },
  { name: "BM ", base: 11, kind: "M" },
  // Minor
  { name: "Cm", base: 0, kind: "m" },
  { name: "C#m", base: 1, kind: "m" },
  { name: "Dm", base: 2, kind: "m" },
  { name: "D#m", base: 3, kind: "m" },
  { name: "Em", base: 4, kind: "m" },
  { name: "Fm", base: 5, kind: "m" },
  { name: "F#m", base: 6, kind: "m" },
  { name: "Gm", base: 7, kind: "m" },
  { name: "G#m", base: 8, kind: "m" },
  { name: "Am", base: 9, kind: "m" },
  { name: "A#m", base: 10, kind: "m" },
  { name: "Bm ", base: 11, kind: "m" },
];

export interface TonalityInfo {
  name: string;
  base: number;
  kind: string;
}
export interface UniverseTonality {
  base: number;
  kind: string;
  tonality: Tonality;
}
export class UniversoTonal {
  universeDictionary: UniverseTonality[] = [];
  tonalityMain: TonalityInfo = {
    name: "CM",
    base: 0,
    kind: "M",
  };

  constructor() {
    this.universeDictionary = dictStringTonality.map(({ name, base, kind }) => {
      return {
        name,
        base,
        kind,
        tonality: new Tonality(base, kind),
      };
    });
  }

  getMainTonality() {
    // Return main tonality
    const found = this.universeDictionary.find(
      (e) =>
        e.base === this.tonalityMain.base && e.kind === this.tonalityMain.kind
    );
    return found !== undefined ? found : this.tonalityMain;
  }

  changeMainTonality(name: string) {
    const found = dictStringTonality.find((e) => e.name === name);
    this.tonalityMain = found !== undefined ? found : this.tonalityMain;
  }

  getTonalityByName(name: string) {
    // From string name, find tonality info
    // Return tonality reference to that info
    const found = dictStringTonality.find((e) => e.name === name);
    return found !== undefined
      ? this.getTonalityByInfo(found.base, found.kind)
      : undefined;
  }

  getTonalityByInfo(base: number, kind: string) {
    // From base and kind, return tonality
    return this.universeDictionary.find(
      (e) => e.base === base && e.kind === kind
    );
  }

  calculateFunctions(chord: Chord) {
    // Check degree of chord in each tonality.
    // Write better form for this
    return this.universeDictionary.map((ton) => [
      ton.tonality.degreeChord(chord),
      ton.tonality.base + "" + ton.tonality.kind,
    ]);
    // .filter((e) => e[0] > -1);
  }

  calculateTableCSV(chord: Chord) {
    let funcs = this.calculateFunctions(chord);
    return funcs.reduce((p, e) => p + e[1] + ", " + e[0] + "\n", "");
  }

  // calculateFunctionsFirstDegree(chord: Armonia) {
  // calculate function for each tonality
  // first degree
  // }
  // Simple degree. maybe it should be calculated from
  // inside tonality, not in the universe

  // gradoSecundario(unArm: Armonia, escala: Tonality) {
  // let coor = new CoordenadaTonal();
  // let fund = escala.baseEsc;
  // let tipo = "M";
  // // bool cond = false;
  // let esc: Tonality;
  // if (this.gradoSencillo(unArm, escala) > 0) {
  //   // Si es acorde de la tonalidad
  //   coor.setReg(1, escala.tipoEsc, this.gradoSencillo(unArm, escala));
  // } else {
  //   //Debug.Log("Entro 1");
  //   // Si es dominante de otra escala
  //   for (let i = 0; i < escala.notasTonalidad.length; i++) {
  //     //  Debug.Log("Entro 2 " );

  //     fund = escala.notasTonalidad[i];
  //     tipo = "" + escala.getTipoTriada(i)[0];
  //     esc = this.getTonalityByInfo(fund, tipo);
  //     // esc.imprimir();
  //     let grad = this.gradoSencillo(unArm, esc);
  //     //Aqui los grados 0-6
  //     tipo = escala.getTipoTriada(i);
  //     //Debug.Log(fund+" "+tipo+" "+grad);
  //     if (grad == 5) {
  //       //    Debug.Log("Entro 3");
  //       coor.setReg(i + 1, esc.tipoEsc, grad);
  //       // AQUI VOY
  //     }
  //     if (grad == 7) {
  //       // FALTA CORREGIR o7
  //       //  Debug.Log("Entro 4");
  //       // Aqui se revisa si es o7
  //       // CUIDADO CON COMPARAR STRINGS
  //       if (unArm.tipoDeAcordeStr === "o7") {
  //         for (let j = 0; j < unArm.notasArmonia.length; j++) {
  //           if (esc.gradoNota(unArm.notasArmonia[j]) == 7) {
  //             coor.setReg(i + 1, esc.tipoEsc, grad);
  //             break;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // return coor;
  // }
}
