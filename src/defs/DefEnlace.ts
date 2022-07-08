export default class DefEnlace {
  strCortoL: string[];
  strLargoL: string[];
  constructor() {
    this.strCortoL = [];
    this.strLargoL = [];

    //
    this.strCortoL.push("58Par");
    this.strLargoL.push("Paralelas prohibidas");
    //
    this.strCortoL.push("Arm");
    this.strLargoL.push("Armonico");
    //
    this.strCortoL.push("Mel");
    this.strLargoL.push("Melodico");
    //
    this.strCortoL.push("Tdir");
    this.strLargoL.push("Traslado directo");
    //
    this.strCortoL.push("Tcon");
    this.strLargoL.push("Traslado contrario");
    //
    this.strCortoL.push("Tobl");
    this.strLargoL.push("Traslado oblicuo");
    //
    this.strCortoL.push("Sop3");
    this.strLargoL.push("Salto de terceras \nen Soprano");
    //
    this.strCortoL.push("Ten3");
    this.strLargoL.push("Salto de terceras \nen Tenor");
    //
    this.strCortoL.push("PCad");
    this.strLargoL.push("Prepara \nAcorde cadencial K64");
    //
    this.strCortoL.push("RCad");
    this.strLargoL.push("Resuelve \nAcorde cadencial K64");
    //
    this.strCortoL.push("Arm6");
    this.strLargoL.push("Armonico, inversion");
    //
    this.strCortoL.push("Tra6");
    this.strLargoL.push("Traslado, inversion");
    //
    this.strCortoL.push("Slt6");
    this.strLargoL.push("Salto, inversion");
    //
    this.strCortoL.push("6-6");
    this.strLargoL.push("Enlace de 6-6");
    //
    this.strCortoL.push("6-6b");
    this.strLargoL.push("Enlace de 6-6 \ncorrelacion segunda");
    //
    this.strCortoL.push("6-6c");
    this.strLargoL.push("Enlace de 6-6 \nmenor t6-D6, D6-t6");
    //
    this.strCortoL.push("6-6d");
    this.strLargoL.push("Enlace de 6-6 \nmenor S6-D6");
    //
    this.strCortoL.push("6-6d");
    this.strLargoL.push("Enlace de 6-6 \nmenor S6-D6");
    //
    this.strCortoL.push("6-6d");
    this.strLargoL.push("Enlace de 6-6 \nmenor S6-D6");
    //
    this.strCortoL.push("6,4Pas");
    this.strLargoL.push("Enlace de 6,4 \ncorde de paso");
    //
    this.strCortoL.push("D7Prep");
    this.strLargoL.push("Prepara D7 por salto\n o paso");
    //
    this.strCortoL.push("D7PrepB");
    this.strLargoL.push("Prepara D7 por nota\ncomun");
    //
    this.strCortoL.push("S-D7*");
    this.strLargoL.push("Preparacion de D7\nincompletopor medio de S");
    //
    this.strCortoL.push("D7-T*5");
    this.strLargoL.push("Resolucion de D7\na tonica sin quinta");
    //
    this.strCortoL.push("D7-T");
    this.strLargoL.push("Resolucion de D7\na tonica completa");
    //
    this.strCortoL.push("D7*5-T");
    this.strLargoL.push("Resolucion de D7\nincompleto a tonica completa");
    //
    this.strCortoL.push("D7i-T");
    this.strLargoL.push("Resolucion de D7\ninversion a tonica completa");
    //
    this.strCortoL.push("Slt5");
    this.strLargoL.push("Salto de 5tas\nde D2 a T6");
    //
    this.strCortoL.push("Slt5-1");
    this.strLargoL.push("Salto de 5tas\ny 1ras de D2 a T6");
    //
    this.strCortoL.push("VII7-T");
    this.strLargoL.push("VII7 a Tonica 3ra duplicada");
    //
    this.strCortoL.push("VII7-D7");
    this.strLargoL.push("VII7 a D7 e inversiones");
    //
    this.strCortoL.push("VII7-D7b"); //261
    this.strLargoL.push("VII7 a D7 e inversiones");
    //
    this.strCortoL.push("Pr-SII6");
    this.strLargoL.push("Preparacion SII6");
    //
    this.strCortoL.push("SII6-Rs");
    this.strLargoL.push("Resolucion de SII6");
    //
    this.strCortoL.push("Pr-SII");
    this.strLargoL.push("Preparacion de SII");
    //
    this.strCortoL.push("SII-Rs");
    this.strLargoL.push("Resolucion de SII");
    //
    this.strCortoL.push("V-VI");
    this.strLargoL.push("Giro interrumpido");
    //
    this.strCortoL.push("TSVI Esl");
    this.strLargoL.push("Eslabon intermedio");
    //
    this.strCortoL.push("TSVI sub");
    this.strLargoL.push("TSVI Funcion Subdominante");
    //
    this.strCortoL.push("Pr-SII7");
    this.strLargoL.push("Preparacion SII7");
    //
    this.strCortoL.push("SII7-V");
    this.strLargoL.push("Resolucion de SII7 a V ");
    //
    this.strCortoL.push("SII7-K");
    this.strLargoL.push("Resolucion de SII7 a K63 ");
    //
    this.strCortoL.push("SII7-T");
    this.strLargoL.push("Resolucion de SII7 a T");
    //
    this.strCortoL.push("SII7-D7");
    this.strLargoL.push("Resolucion de SII7 a D7 e inv ");
    //
    this.strCortoL.push("SII-SII2");
    this.strLargoL.push("SII2 de paso");
    //
    this.strCortoL.push("III-mel");
    this.strLargoL.push("Movimiento de paso en III");
    //
    this.strCortoL.push("Cant");
    this.strLargoL.push("Enlace vocal");
    //
    this.strCortoL.push("Cool");
    this.strLargoL.push("Enlace Cool ;)");
    //
    this.strCortoL.push("x");
    this.strLargoL.push("N/D");
  }

  gIdx(sr:string) {
    return this.strCortoL.indexOf(sr);
  }
}
