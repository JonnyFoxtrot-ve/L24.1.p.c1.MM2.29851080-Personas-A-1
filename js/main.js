import Cl_personas from "./personas.js";
import Cl_procesarPersonas from "./procesarPersonas.js";

let persona1 = new Cl_personas("Luisa", "F");
let persona2 = new Cl_personas("Ana", "F");
let persona3 = new Cl_personas("José", "M");
let persona4 = new Cl_personas("Carmen", "F");
let persona5 = new Cl_personas("Rosa", "F");
let persona6 = new Cl_personas("José", "M");
let persona7 = new Cl_personas("María", "F");
let persona8 = new Cl_personas("Luz", "F");
let persona9 = new Cl_personas("Rafael", "M");
let persona10 = new Cl_personas("Liz", "F");
let persona11 = new Cl_personas("Marcos", "M");
let persona12 = new Cl_personas("Kei", "M");

let procesarPersonas = new Cl_procesarPersonas();

procesarPersonas.procesarp(persona1);
procesarPersonas.procesarp(persona2);
procesarPersonas.procesarp(persona3);
procesarPersonas.procesarp(persona4);
procesarPersonas.procesarp(persona5);
procesarPersonas.procesarp(persona6);
procesarPersonas.procesarp(persona7);
procesarPersonas.procesarp(persona8);
procesarPersonas.procesarp(persona9);
procesarPersonas.procesarp(persona10);
procesarPersonas.procesarp(persona11);
procesarPersonas.procesarp(persona12);

let salida = document.getElementById("salida");
salida.innerHTML += `<br>Procentaje de mujeres procesadas ${procesarPersonas
  .porM()
  .toFixed(2)}%`;
salida.innerHTML += `<br> ${procesarPersonas.mayorGenero()}`;

console.log(procesarPersonas);
console.log(procesarPersonas.porM());
