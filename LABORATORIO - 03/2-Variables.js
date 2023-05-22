// uso del var 
'use strict';

// Asignar una variable con un ejemplo relacionado con deportes
var nombreEquipo = "Barcelona";
var golesMarcados1;

// Reasignar el valor a una variable declarada
nombreEquipo = "Real Madrid";
golesMarcados1 = 3;

console.log(nombreEquipo + " ha marcado " + golesMarcados1 + " goles.");

//--------------------------------------------------------------------------------------

//uso del let 
'use strict';

// Asignar una variable con un ejemplo relacionado con deportes
let nombreJugador = "Messi";
let golesMarcados;

nombreJugador = "Cristiano";
golesMarcados = 15;

console.log(nombreJugador + " ha marcado " + golesMarcados + " goles.");

//--------------------------------------------------------------------------------------
// uso del const
'use strict';

// asignar una variable relacionada con los deportes
const nombreDeporte = "Fútbol";
// siempre deben inicializar con un valor
let cantidadJugadores = 12;


console.log(nombreDeporte + " " + cantidadJugadores);