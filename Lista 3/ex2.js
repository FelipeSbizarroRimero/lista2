let input = require("readline-sync");

let numero = input.questionInt("Digite um numero: ");

let resultado = numero + 5;

if (resultado > 10) {
    console.log("Seu numero é maior q 10, seu numero é:  " + resultado);
}