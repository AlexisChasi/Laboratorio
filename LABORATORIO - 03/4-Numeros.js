//--------------------------------------------------------------------------------------
// NUMEROS
// OPERADORES

'use strict';

// Es importante reconocer el tipo de valor asignado
const cantidadHoras = "10";
const cantidadMinutos = 10;

console.log(cantidadMinutos, cantidadHoras);
console.log(typeof(cantidadMinutos), typeof(cantidadHoras));

console.log("suma:", cantidadMinutos + 10);
console.log("resta:", cantidadMinutos - 10);
console.log("multiplicación:", cantidadMinutos * 10);
console.log("división:", cantidadMinutos / 10);
console.log("módulo:", cantidadMinutos % 10);

// Importante el manejo de operadores de incremento y decremento
let cantidadMinutosActual = 10;

console.log(++cantidadMinutosActual);
console.log(cantidadMinutosActual++);

let cantidadHorasActual = 10;

console.log(--cantidadHorasActual);
console.log(cantidadHorasActual--);


//--------------------------------------------------------------------------------------
//METODO MATH
'use strict';

const numeroPuntos = 30;
console.log(Math);
console.log(Math.PI);
console.log(Math.round(3.57));
console.log(Math.sqrt(36));
console.log(Math.abs(-789));
console.log(Math.pow(3, 4));
console.log(Math.min(15, 7));
console.log(Math.max(92, -15));
console.log(Math.round(Math.random() * 50));

// orden de precedencia de los operadores
'use strict';

console.log(2 + 6 * 3);
console.log(5 * 2 ** 4);
console.log(150 * 0.25);
console.log(300 * 0.8);

// conversión

'use strict';

let edadJugador = "28";
let precioJuego = "777.42";

console.log(Number.parseInt(edadJugador));
console.log(Number.parseFloat(precioJuego));

console.log(Number.isInteger(edadJugador));

console.log(`${+edadJugador + +precioJuego}`);