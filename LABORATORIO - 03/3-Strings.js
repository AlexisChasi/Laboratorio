//--------------------------------------------------------------------------------------
//STRINGS 
// crear strings


'use strict';

const nombreVideojuego = "StarCraft";
const tipoVideojuego = "Estrategia en tiempo real";

console.log(nombreVideojuego + ", " + tipoVideojuego);
//--------------------------------------------------------------------------------------
// METODOS DE LOS STRINGS 
'use strict';

const nombreJuego = "Dota 2";

console.log("Número de letras:", nombreJuego.length);
console.log("Encotrar alguna palabra:", nombreJuego.includes("Dota"));
console.log("Convertir a mayúsculas:", nombreJuego.toUpperCase());
console.log("Convertir a minúsculas:", nombreJuego.toLowerCase());
console.log("Quitar espacios adelante y atrás:", nombreJuego.trim());
console.log("Reemplazar una palabra:", nombreJuego.replace('Dota', 'Dota 2: The International'));
console.log("Cortar un texto:", nombreJuego.slice(1, 4));
console.log("Cortar un texto:", nombreJuego.substring(1, 4));
console.log("Obtener un carácter específico:", nombreJuego.charAt(0));
console.log("Repetir un texto:", nombreJuego.repeat(2));
console.log("Dividir un texto:", nombreJuego.split(" "));

//--------------------------------------------------------------------------------------
// Uso del template strings
'use strict';

const nombre = "Jorge";
const apellido = "González";
const deporte = "fútbol";
const edad = 25;
const activo = true;

console.log(nombre + "-" + apellido + "-" + deporte);
console.log(`${nombre} - ${apellido} - ${deporte} - ${activo ? edad : 'No está activo'}`);
