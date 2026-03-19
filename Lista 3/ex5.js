let input = require("readline-sync");

let numero1 = input.questionInt("Digite um numero: ");

let numero2 = input.questionInt("Digite um numero: ");

let resultado1 = numero1 + numero2;

let resultado2 = numero1 * 10;

let resultado3 = numero2 * 10;

if (resultado1 < 20) {
    console.log("Seu vezes 10 é:  " + resultado1);
    console.log("Seu vezes 10 é:  " + resultado2);
}