let dividendo = 8;
let divisor = 3;

let decimal = dividendo/divisor;

let quociente = parseInt(decimal);

let resto = Math.round ((decimal - quociente) * divisor);

console.log(`
    ==== Tabela com resultado ====
    dividendo;  ${dividendo}
    divisor; ${divisor}
    quociente; ${quociente}
    resto;${resto}
    ===================
    `)

