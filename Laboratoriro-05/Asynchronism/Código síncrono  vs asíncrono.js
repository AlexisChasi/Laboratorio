
/* ejempo de un código síncrono  */
"use strict";

function solicitar(tipo) {

    for (let index = 0; index < 10000000000; index++) 
    {
    }
    return `¡Hola, ya regresé con el ${tipo}!`
}
console.log("Empezar a jugar PC")
console.log("NO hay internet")
console.log("Llamar a servicio tecnico")
const name = 'Alexis'
const respuestaEstudiante = solicitar("Sin conexion")
console.log(respuestaEstudiante)
console.log("Restablecer conexion");

/* Aquí se presenta un ejempo de un código asíncrono */
"use strict";

function solicitar(tipo) {
    console.log(`¡Hola,probando JS ${tipo}!`)
}

console.log("Empezar a jugar PC")
console.log("NO hay internet")
console.log("Llamar a servicio tecnico")
const name1 = 'Alexis'
const data = setTimeout(()=>solicitar("Sin conexion"),5000)
console.log("Restablecer conexion")