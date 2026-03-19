let input = require("readline-sync");

let numero = input.questionInt("Digite um numero: ");

let resultado = numero + 10;

if (resultado > 3) {
    console.log("Seu numero é maior q 3, seu numero é:  " + resultado);
}