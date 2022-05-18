import "./styles.css";

let numero1: number = Number(prompt("Ingrese el primer número."));
let numero2: number = Number(prompt("Ingrese su número límite."));
for (let i = 1; i <= numero2; i++) {
  console.log(numero1 + " x " + i + " = " + numero1 * i);
}
