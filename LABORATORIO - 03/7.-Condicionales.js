//--------------------------------------------------------------------------------------
// CONDICIONALES
//Condicional simple

'use strict';

const listaTareas = []

// utilizando el condicional clásico
if (listaTareas.length === 0) {
console.log("No hay tareas pendientes")
}

// utilizando operador ternario
listaTareas.length === 0 ? console.log("No hay tareas pendientes") : ""

// Condicional doble
'use strict';

const listaAnimales = ['Perro', 'Gato', 'Conejo', 'Pájaro'];

// utilizando el condicional clásico
if (listaAnimales.length !== 0) {
console.log("Hay animales en la lista");
} else {
console.log("No hay animales en la lista");
}

// utilizando operador ternario
const accion = listaAnimales.length !== 0 ? "Hay animales en la lista" : "No hay animales en la lista";
console.log(accion);

// condicional anidada
'use strict';

const listaVideojuegos = ['Super Mario', 'Zelda', 'Pokémon', 'Final Fantasy'];

// utilizando el condicional clásico
if (listaVideojuegos.length >= 4) {
console.log("¡Descuento del 20% en tu compra!");
} else if (listaVideojuegos.length >= 3) {
console.log("¡Descuento del 15% en tu compra!");
} else if (listaVideojuegos.length >= 2) {
console.log("¡Descuento del 10% en tu compra!");
} else {
console.log("No aplican descuentos en tu compra");
}

// utilizando operador ternario
listaVideojuegos.length >= 4 ? console.log("¡Descuento del 20% en tu compra!") : listaVideojuegos.length >= 3 ? console.log("¡Descuento del 15% en tu compra!") : listaVideojuegos.length >= 2 ? console.log("¡Descuento del 10% en tu compra!") : console.log("No aplican descuentos en tu compra");


// condicional multiple

'use strict';

const opcionMenu = 3;

switch (opcionMenu) {
case 1:
console.log("Jugar");
break;
case 2:
console.log("Configuración");
break;
case 3:
console.log("Ayuda");
break;
default:
console.log("Opción no válida");
break;
}