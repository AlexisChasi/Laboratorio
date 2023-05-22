//--------------------------------------------------------------------------------------
// BOOLEANOS
// Operadores relacionales

'use strict';

// operadores de asignación
let saldoCuentaBancaria = 1500;
let saldoCompra = 500;
let estadoCuenta;
let emailConfirmado = "MIO@GMAIL.com";

// operadores de asignación de adición
saldoCuentaBancaria += 300;
console.log(saldoCuentaBancaria);

// operadores de comparación
saldoCuentaBancaria = "2000";
console.log(saldoCompra == saldoCuentaBancaria);
// evalua tipo de dato y contenido
console.log(saldoCompra === saldoCuentaBancaria);

console.log(estadoCuenta === emailConfirmado);

// operadores aritméticos
console.log(saldoCompra + Number.parseInt(saldoCuentaBancaria));

// operadores lógicos
console.log(saldoCompra != saldoCuentaBancaria);
// evalua tipo de dato y contenido
console.log(emailConfirmado !== "tuyo@GMAIL.com");

//OPERADOR TERNARIO 

'use strict';

let cantidadGolosinas = 10;
let cantidadDinero = 50;

const respuesta = cantidadDinero >= cantidadGolosinas ? "Comprar" : "Ahorrar más dinero";
console.log(respuesta);