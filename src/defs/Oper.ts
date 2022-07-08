/**
 *
 * @author Cristian
 */

export function equalArr(arr1: any[], arr2: any[]) {
  // console.log(arr1, arr2);
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
/**
 * Funcion modulo como la de matlab
 *
 * @param num
 * @param base
 * @return
 */
export function mod(base: number) {
  return function (num: number) {
    num = num % base;
    if (num < 0) num = base + num;
    return num;
  };
}

export function numRomano(num: any) {
  let nota = "";
  switch (num) {
    case 1:
      nota += "I";
      break;
    case 2:
      nota += "II";
      break;
    case 3:
      nota += "III";
      break;
    case 4:
      nota += "IV";
      break;
    case 5:
      nota += "V";
      break;
    case 6:
      nota += "VI";
      break;
    case 7:
      nota += "VII";
      break;
    default:
      nota += "*";
      break;
  }
  return nota;
}

/**
 * Funcion que le asigna un numero a cada nota de la escala, utilizando
 * sostenidos. Consiste de siete octavas.
 * Debe poner bemoles o sostenidos de acuerdo a que tipo de escala.
 *
 * @param midinum
 * @return
 */
export function num2nota12(midinum: number, acc: string = "s") {
  // 21= A0, 108 = C8
  // 21=12+9;
  // Ver que clase de nota es modulo 12;

  let modu = mod(12)(midinum);
  // Corregir de acuerdo a bemoles o sostenidos
  let nota = "";

  if (acc == "s") {
    switch (modu) {
      case 0:
        nota += "c";
        break;
      case 1:
        nota += "c#";
        break;
      case 2:
        nota += "d";
        break;
      case 3:
        nota += "d#";
        break;
      case 4:
        nota += "e";
        break;
      case 5:
        nota += "f";
        break;
      case 6:
        nota += "f#";
        break;
      case 7:
        nota += "g";
        break;
      case 8:
        nota += "g#";
        break;
      case 9:
        nota += "a";
        break;
      case 10:
        nota += "a#";
        break;
      case 11:
        nota += "b";
        break;
    }
  } else {
    if (acc == "b") {
      switch (modu) {
        case 0:
          nota += "c";
          break;
        case 1:
          nota += "db";
          break;
        case 2:
          nota += "d";
          break;
        case 3:
          nota += "eb";
          break;
        case 4:
          nota += "e";
          break;
        case 5:
          nota += "f";
          break;
        case 6:
          nota += "gb";
          break;
        case 7:
          nota += "g";
          break;
        case 8:
          nota += "ab";
          break;
        case 9:
          nota += "a";
          break;
        case 10:
          nota += "bb";
          break;
        case 11:
          nota += "b";
          break;
      }
    }
  }
  return nota;
}
