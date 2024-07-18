export default class procesarPersonas {
  constructor() {
    this.contar = 0;
    this.contarM = 0;
    this.contarF = 0;
  }

  porM() {
    return (this.contarF / this.contar) * 100;
  }

  mayorGenero() {
    if (this.contarF > this.contarM) {
      return "Hay más mujeres";
    } else {
      ("Hay más hombres");
    }
  }
  procesarp(p) {
    this.contar++;
    if (p.sexo === "M") {
      this.contarM++;
    } else {
      this.contarF++;
    }
  }
}
