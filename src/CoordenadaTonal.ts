/**
 *
 * @author Cristian
 */
export default class CoordenadaTonal {
  escala: number;
  grado: number;
  tipo: string;
  // Los grados van del 1 al 7

  constructor(esc: number = 0, tp: string = "", gra: number = 0) {
    this.escala = esc;
    this.tipo = tp;
    this.grado = gra;
  }

  setReg(esc: any, tp: string, gra: number) {
    this.escala = esc;
    this.grado = gra;
    this.tipo = tp;
  }

  stringify() {
    return "Escala " + this.escala + " " + this.tipo + " grado " + this.grado;
  }
}
